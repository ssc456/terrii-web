import React, { useState, useRef } from 'react';
import { X, Image, Paperclip, Tag, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/Dialog';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Badge } from '../ui/Badge';
import { Label } from '../ui/Label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '../ui/Select';
import { useAuth } from '../../contexts/AuthContext';
import type { CommunityCategory } from '../../mock/community';
import { uploadImageToS3 } from '../../lib/imageUpload';
import { S3Image } from '../ui/S3Image';

interface CreatePostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (post: {
    title: string;
    content: string;
    category: string;
    tags: string[];
    mentions: string[];
    attachments: { type: string; url: string; name: string }[];
  }) => void;
  categories: CommunityCategory[];
  isStaff: boolean;
}

export function CreatePostDialog({
  open,
  onOpenChange,
  onSubmit,
  categories,
  isStaff
}: CreatePostDialogProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [mentions, setMentions] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<{ type: string; url: string; name: string; preview?: string; uploading?: boolean; error?: string }[]>([]);
  const [tagInputVisible, setTagInputVisible] = useState(false);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadingCount, setUploadingCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      content,
      category,
      tags,
      mentions,
      attachments
    });
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setCategory('');
    setTags([]);
    setCurrentTag('');
    setMentions([]);
    setAttachments([]);
    setTagInputVisible(false);
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      for (const file of Array.from(files)) {
        const isImage = file.type.startsWith('image/');
        // Generate preview immediately for images
        let preview: string | undefined;
        if (isImage) {
          preview = await new Promise<string | undefined>((resolve) => {
            const reader = new FileReader();
            reader.onload = (event) => resolve(event.target?.result as string);
            reader.onerror = () => resolve(undefined);
            reader.readAsDataURL(file);
          });
        }
        // Add placeholder attachment (url temporarily data URL or file name) with uploading flag
        const tempId = `${Date.now()}_${file.name}`;
        setAttachments(prev => [
          ...prev,
          {
            type: isImage ? 'image' : 'file',
            url: tempId, // temporary id; will be replaced by S3 key
            name: file.name,
            preview,
            uploading: true
          }
        ]);
        setUploadingCount(c => c + 1);
        // Start upload to S3
        try {
          const s3Key = await uploadImageToS3(file, 'terrii-community');
          setAttachments(prev => prev.map(att => att.url === tempId ? { ...att, url: s3Key, uploading: false } : att));
        } catch (err: any) {
          setAttachments(prev => prev.map(att => att.url === tempId ? { ...att, uploading: false, error: err?.message || 'Upload failed' } : att));
          console.error('Community post attachment upload failed:', err);
        } finally {
          setUploadingCount(c => c - 1);
        }
      }
      e.target.value = '';
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] w-full">
        <DialogHeader>
          <DialogTitle>Create {isStaff ? 'Notice' : 'Post'}</DialogTitle>
          <DialogDescription>
            {isStaff 
              ? 'Share important information and notices with families and residents.' 
              : 'Share updates, photos, and moments with your community.'
            }
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mt-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a title for your post"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What would you like to share?"
                className="min-h-[120px]"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Tags</Label>
                {!tagInputVisible && (
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setTagInputVisible(true)}
                  >
                    <Tag className="h-4 w-4 mr-1" />
                    Add Tag
                  </Button>
                )}
              </div>
              
              {tagInputVisible && (
                <div className="flex mb-2">
                  <Input
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter a tag and press Enter"
                    className="flex-1"
                  />
                  <Button 
                    type="button" 
                    onClick={handleAddTag}
                    className="ml-2"
                  >
                    Add
                  </Button>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1 px-2 py-1">
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {tags.length === 0 && !tagInputVisible && (
                  <span className="text-terrii-text-light text-xs">No tags added</span>
                )}
              </div>
            </div>
            
            <div>
              <Label>Attachments</Label>
              <div className="flex flex-col gap-2">
                {attachments.map((attachment, index) => (
                  <div key={index} className="flex items-center p-2 border rounded-md relative">
                    {attachment.type === 'image' ? (
                      <div className="w-16 h-16 mr-2 relative">
                        {attachment.preview && (
                          <img
                            src={attachment.preview}
                            alt={attachment.name}
                            className="w-full h-full object-cover rounded-md"
                            style={{ opacity: attachment.uploading ? 0.6 : 1 }}
                          />
                        )}
                        {!attachment.preview && !attachment.error && !attachment.uploading && (
                          <S3Image
                            s3Key={attachment.url}
                            alt={attachment.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        )}
                        {attachment.uploading && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-md">
                            <Loader2 className="h-5 w-5 animate-spin text-white" />
                          </div>
                        )}
                        {attachment.error && (
                          <div className="absolute inset-0 bg-red-500/60 flex items-center justify-center text-white text-xs rounded-md p-1 text-center">
                            {attachment.error}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Paperclip className="h-4 w-4 mr-2" />
                    )}
                    <span className="flex-1 truncate text-sm">
                      {attachment.name}
                      {attachment.uploading && ' (uploading...)'}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeAttachment(index)}
                      disabled={attachment.uploading}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                {attachments.length === 0 && (
                  <span className="text-terrii-text-light text-xs">No attachments</span>
                )}
                <div className="flex gap-2 mt-2">
                  <Button type="button" variant="outline" size="sm" className="flex items-center gap-1" onClick={() => imageInputRef.current?.click()}>
                    <Image className="h-4 w-4" />
                    Add Image
                  </Button>
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Button type="button" variant="outline" size="sm" className="flex items-center gap-1" onClick={() => fileInputRef.current?.click()}>
                    <Paperclip className="h-4 w-4" />
                    Add File
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!title.trim() || !content.trim() || uploadingCount > 0 || (!category.trim() && categories.length>0)}>
              {uploadingCount > 0 ? 'Uploading...' : (isStaff ? 'Post Notice' : 'Post to Community')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
