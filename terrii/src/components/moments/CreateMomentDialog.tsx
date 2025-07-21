import { useState, useRef } from 'react';
import { X, Upload, Tag, Plus, PlusCircle, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../ui/Dialog';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import { Checkbox } from '../ui/Checkbox';
import { Label } from '../ui/Label';
import { Badge } from '../ui/Badge';

interface CreateMomentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateMoment: (momentData: any) => void;
  editingMoment?: any;
  residents?: { id: string; name: string; }[];
  categories?: { value: string; label: string; }[];
}

export function CreateMomentDialog({
  open,
  onOpenChange,
  onCreateMoment,
  editingMoment,
  residents = [],
  categories = []
}: CreateMomentDialogProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [momentTitle, setMomentTitle] = useState(editingMoment?.title || '');
  const [emoji, setEmoji] = useState(editingMoment?.emoji || '');
  const [momentContent, setMomentContent] = useState(editingMoment?.description || '');
  const [selectedResident, setSelectedResident] = useState(editingMoment?.resident?.id || '');
  const [momentCategory, setMomentCategory] = useState(editingMoment?.category?.toLowerCase() || '');
  const [shareWithFamily, setShareWithFamily] = useState(editingMoment?.isSharedWithFamily || true);
  const [requiresApproval, setRequiresApproval] = useState(editingMoment?.status === 'pending_approval' || false);
  const [momentTags, setMomentTags] = useState<string[]>(editingMoment?.tags || []);
  const [tagInput, setTagInput] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [existingPhotos, setExistingPhotos] = useState<string[]>(editingMoment?.photos || []);
  
  const handleAddTag = () => {
    if (tagInput.trim() && !momentTags.includes(tagInput.trim())) {
      setMomentTags([...momentTags, tagInput.trim()]);
      setTagInput('');
    }
  };
  
  const handleRemoveTag = (tagToRemove: string) => {
    setMomentTags(momentTags.filter(tag => tag !== tagToRemove));
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };
  
  const handleRemoveFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };
  
  const handleRemoveExistingPhoto = (index: number) => {
    setExistingPhotos(existingPhotos.filter((_, i) => i !== index));
  };
  
  const handleSubmit = () => {
    if (!momentTitle.trim() || !momentContent.trim() || !selectedResident || !momentCategory) {
      // Display error toast
      return;
    }
    
    const momentData = {
      id: editingMoment?.id || Date.now().toString(),
      title: momentTitle,
      emoji: emoji,
      description: momentContent,
      category: momentCategory.charAt(0).toUpperCase() + momentCategory.slice(1), // Capitalize
      resident: {
        id: selectedResident,
        name: residents.find(r => r.id === selectedResident)?.name || ''
      },
      isSharedWithFamily: shareWithFamily,
      status: requiresApproval ? 'pending_approval' : 'published',
      tags: momentTags,
      photos: existingPhotos, // In a real app, you'd handle file uploads to a server
      timestamp: new Date()
    };
    
    onCreateMoment(momentData);
    resetForm();
    onOpenChange(false);
  };
  
  const resetForm = () => {
    if (!editingMoment) {
      setMomentTitle('');
      setEmoji('');
      setMomentContent('');
      setSelectedResident('');
      setMomentCategory('');
      setShareWithFamily(true);
      setRequiresApproval(false);
      setMomentTags([]);
      setTagInput('');
      setUploadedFiles([]);
      setExistingPhotos([]);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{editingMoment ? 'Edit Moment' : 'Create New Moment'}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Resident Selection */}
          <div className="space-y-2">
            <Label htmlFor="resident">Resident</Label>
            <Select value={selectedResident} onValueChange={setSelectedResident}>
              <SelectTrigger>
                <SelectValue placeholder="Select resident" />
              </SelectTrigger>
              <SelectContent>
                {residents.map((resident) => (
                  <SelectItem key={resident.id} value={resident.id}>
                    {resident.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Title and Emoji */}
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-1">
              <Label htmlFor="emoji">Emoji</Label>
              <Input
                id="emoji"
                value={emoji}
                onChange={(e) => setEmoji(e.target.value)}
                placeholder="😊"
                className="text-2xl text-center"
              />
            </div>
            <div className="col-span-5">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={momentTitle}
                onChange={(e) => setMomentTitle(e.target.value)}
                placeholder="Enter moment title"
              />
            </div>
          </div>
          
          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">
              Description <span className="text-xs text-terrii-text-light">(max 300 chars)</span>
            </Label>
            <Textarea
              id="description"
              value={momentContent}
              onChange={(e) => setMomentContent(e.target.value.slice(0, 300))}
              placeholder="Describe this moment..."
              className="min-h-[120px]"
            />
            <div className="text-xs text-terrii-text-light text-right">
              {momentContent.length}/300
            </div>
          </div>
          
          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={momentCategory} onValueChange={setMomentCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Tags */}
          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {momentTags.map((tag, index) => (
                <Badge key={index} className="bg-terrii-blue/10 text-terrii-blue">
                  #{tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-terrii-blue hover:text-terrii-blue-dark"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex space-x-2">
              <div className="flex-1">
                <Input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="Add a tag..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                />
              </div>
              <Button type="button" variant="outline" onClick={handleAddTag}>
                <Tag className="h-4 w-4 mr-2" /> Add
              </Button>
            </div>
          </div>
          
          {/* File Upload */}
          <div className="space-y-2">
            <Label>Photos</Label>
            
            {/* Existing Photos */}
            {existingPhotos.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mb-3">
                {existingPhotos.map((photo, index) => (
                  <div key={index} className="relative h-24 bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src={photo}
                      alt={`Uploaded ${index}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveExistingPhoto(index)}
                      className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {/* New File Uploads */}
            {uploadedFiles.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mb-3">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="relative h-24 bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Uploaded ${index}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            <Button
              type="button"
              variant="outline"
              className="w-full py-8 border-dashed"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-5 w-5 mr-2" />
              Upload Photos
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              multiple
              className="hidden"
            />
          </div>
          
          {/* Sharing Options */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="shareWithFamily"
                checked={shareWithFamily}
                onCheckedChange={(checked) => setShareWithFamily(checked as boolean)}
              />
              <Label htmlFor="shareWithFamily" className="cursor-pointer">
                Share with family app
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="requiresApproval"
                checked={requiresApproval}
                onCheckedChange={(checked) => setRequiresApproval(checked as boolean)}
              />
              <Label htmlFor="requiresApproval" className="cursor-pointer">
                Requires approval before sharing
              </Label>
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              resetForm();
              onOpenChange(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            {editingMoment ? 'Save Changes' : 'Create Moment'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
