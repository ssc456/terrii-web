import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { uploadImageToS3, generateImagePreview } from '../../lib/imageUpload';
import { S3Image } from './S3Image';

interface ImageUploadProps {
  currentImage?: string; // S3 key of current image
  onImageChange: (s3Key: string | null) => void;
  className?: string;
  folder?: string;
  disabled?: boolean;
  placeholder?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  currentImage,
  onImageChange,
  className = '',
  folder = 'terrii-residents',
  disabled = false,
  placeholder = 'Upload resident photo'
}) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError(null);

    try {
      // Generate preview
      const previewUrl = await generateImagePreview(file);
      setPreview(previewUrl);

      // Upload to S3
      setUploading(true);
      const s3Key = await uploadImageToS3(file, folder);
      
      // Clear preview and update parent
      setPreview(null);
      onImageChange(s3Key);
    } catch (err) {
      console.error('Upload error:', err);
      setError(err instanceof Error ? err.message : 'Upload failed');
      setPreview(null);
    } finally {
      setUploading(false);
      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setError(null);
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const hasImage = currentImage || preview;

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center space-x-4">
        {/* Image Preview/Display */}
        <div className="relative">
          {hasImage ? (
            <div className="relative w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-200">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : currentImage ? (
                <S3Image
                  s3Key={currentImage}
                  alt="Resident photo"
                  className="w-full h-full object-cover"
                />
              ) : null}
              
              {/* Loading overlay */}
              {uploading && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {/* Remove button */}
              {!uploading && !disabled && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          ) : (
            <div 
              onClick={handleClick}
              className={`w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ImageIcon size={32} className="text-gray-400" />
            </div>
          )}
        </div>

        {/* Upload Button and Info */}
        <div className="flex-1">
          <button
            type="button"
            onClick={handleClick}
            disabled={disabled || uploading}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Upload size={16} />
            <span className="text-sm">
              {uploading ? 'Uploading...' : hasImage ? 'Change Photo' : 'Upload Photo'}
            </span>
          </button>
          
          <p className="text-xs text-gray-500 mt-1">
            {placeholder}. Max 5MB. JPG, PNG, GIF supported.
          </p>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="text-sm text-red-600 bg-red-50 p-2 rounded border">
          {error}
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        disabled={disabled}
      />
    </div>
  );
};
