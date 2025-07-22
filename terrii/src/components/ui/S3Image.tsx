import { getUrl } from 'aws-amplify/storage';
import { useState, useEffect } from 'react';

interface S3ImageProps {
  s3Key?: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  onError?: () => void;
}

/**
 * Component to display images from S3 storage with CloudFront optimization
 */
export const S3Image: React.FC<S3ImageProps> = ({ 
  s3Key, 
  alt, 
  className = '', 
  fallbackSrc = '/default-avatar.svg',
  onError 
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Debug logging for S3Image
    console.log(`S3Image component received s3Key:`, s3Key);
    
    if (!s3Key) {
      console.log('No s3Key provided, using fallback');
      setImageUrl(null);
      setLoading(false);
      return;
    }

    const loadImage = async () => {
      try {
        setLoading(true);
        setError(false);
        
        console.log(`Attempting to get URL for s3Key: ${s3Key}`);
        
        const result = await getUrl({
          key: s3Key,
          options: {
            // Set a reasonable expiration time (1 hour)
            expiresIn: 3600
          }
        });
        
        console.log(`Successfully got URL for ${s3Key}:`, result.url.toString());
        setImageUrl(result.url.toString());
      } catch (err) {
        console.error(`Error loading S3 image for key ${s3Key}:`, err);
        setError(true);
        onError?.();
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [s3Key, onError]);

  if (loading) {
    return (
      <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        onError={() => {
          console.error('Fallback image also failed to load');
        }}
      />
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      onError={() => {
        setError(true);
        onError?.();
      }}
    />
  );
};
