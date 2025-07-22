import { uploadData } from 'aws-amplify/storage';
import { v4 as uuidv4 } from 'uuid';

/**
 * Upload an image file to S3 storage
 * @param file The image file to upload
 * @param folder The S3 folder path (e.g., 'terrii-residents', 'profile-pictures')
 * @returns Promise<string> The S3 key of the uploaded image
 */
export const uploadImageToS3 = async (file: File, folder: string = 'terrii-residents'): Promise<string> => {
  if (!file) {
    throw new Error('No file provided');
  }

  // Validate file type
  if (!file.type.startsWith('image/')) {
    throw new Error('File must be an image');
  }

  // Validate file size (5MB limit)
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    throw new Error('Image size must be less than 5MB');
  }

  try {
    // Generate unique filename
    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const filename = `${uuidv4()}.${ext}`;
    const key = `${folder}/${filename}`;

    // Upload to S3
    const result = await uploadData({
      key,
      data: file,
      options: {
        contentType: file.type,
        metadata: {
          originalName: file.name,
          uploadedAt: new Date().toISOString()
        }
      }
    }).result;

    return result.key;
  } catch (error) {
    console.error('Error uploading image to S3:', error);
    throw new Error('Failed to upload image. Please try again.');
  }
};

/**
 * Generate a preview URL for a file before upload
 * @param file The file to generate preview for
 * @returns Promise<string> Data URL for preview
 */
export const generateImagePreview = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        resolve(e.target.result as string);
      } else {
        reject(new Error('Failed to read file'));
      }
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
};
