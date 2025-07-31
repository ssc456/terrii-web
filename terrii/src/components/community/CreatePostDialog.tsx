import React, { useState } from 'react';
import { X, Image, Paperclip, Tag } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../ui/Dialog';
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
import { terriiApi } from '../../lib/terriiApi';
import { Storage } from 'aws-amplify';
import type { CommunityCategory } from '../../mock/community';

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
  const [attachments, setAttachments] = useState<{ type: string; url: string; name: string }[]>([]);
  const [tagInputVisible, setTagInputVisible] = useState(false);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const fileType = file.type.startsWith('image/') ? 'image' : 'file';
          setAttachments([
            ...attachments, 
            { 
              type: fileType, 
              url: event.target.result as string,
              name: file.name
            }
          ]);
        }
      };
      
      reader.readAsDataURL(file);
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
                  <div key={index} className="flex items-center p-2 border rounded-md">
                    {attachment.type === 'image' ? (
                      <div className="w-16 h-16 mr-2">
                        <img 
                          src={attachment.url} 
                          alt={attachment.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    ) : (
                      <Paperclip className="h-4 w-4 mr-2" />
                    )}
                    <span className="flex-1 truncate">{attachment.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeAttachment(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                <div className="flex gap-2 mt-2">
                  <label className="cursor-pointer">
                    <Button type="button" variant="outline" size="sm" className="flex items-center gap-1">
                      <Image className="h-4 w-4" />
                      Add Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </Button>
                  </label>
                  
                  <label className="cursor-pointer">
                    <Button type="button" variant="outline" size="sm" className="flex items-center gap-1">
                      <Paperclip className="h-4 w-4" />
                      Add File
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </Button>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!title.trim() || !content.trim() || !category}>
              {isStaff ? 'Post Notice' : 'Post to Community'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
