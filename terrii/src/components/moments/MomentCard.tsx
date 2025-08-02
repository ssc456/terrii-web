import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { 
  Heart, ThumbsUp, MessageSquare, Share2, MoreHorizontal,
  Check, Archive, Edit, Trash2, Star, Flag
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { S3Image } from '../ui/S3Image';

export interface Moment {
  id: string;
  title: string;
  description: string;
  emoji?: string;
  timestamp: Date;
  category: string;
  status: 'published' | 'pending_approval' | 'archived';
  author: {
    name: string;
    role: string;
    photo?: string;
  };
  resident: {
    name: string;
    photo?: string;
  };
  likes: number;
  comments: any[];
  hasLiked: boolean;
  isSharedWithFamily: boolean;
  tags: string[];
  photos: string[];
  engagement?: {
    views: number;
    familyViews: number;
    shares: number;
  };
}

interface MomentCardProps {
  moment: Moment;
  onLike?: (momentId: string) => void;
  onComment?: (momentId: string) => void;
  onShare?: (momentId: string) => void;
  onEdit?: (momentId: string) => void;
  onDelete?: (momentId: string) => void;
  onApprove?: (momentId: string) => void;
  onViewDetail?: (momentId: string) => void;
  viewMode?: 'compact' | 'full';
}

export function MomentCard({ 
  moment, 
  onLike, 
  onComment, 
  onShare, 
  onEdit, 
  onDelete,
  onApprove,
  onViewDetail,
  viewMode = 'full'
}: MomentCardProps) {
  const [hovering, setHovering] = useState(false);
  
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLike?.(moment.id);
  };
  
  const handleComment = (e: React.MouseEvent) => {
    e.stopPropagation();
    onComment?.(moment.id);
  };
  
  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShare?.(moment.id);
  };
  
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.(moment.id);
  };
  
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.(moment.id);
  };
  
  const handleApprove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onApprove?.(moment.id);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-terrii overflow-hidden w-full"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={() => onViewDetail?.(moment.id)}
    >
      {/* Card Header */}
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            {/* Staff info */}
            <div className="flex items-center">
              <div className="w-11 h-11 rounded-full bg-terrii-blue/10 flex items-center justify-center overflow-hidden border-2 border-white">
                {moment.author.photo ? (
                  <S3Image 
                    s3Key={moment.author.photo} 
                    alt={moment.author.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-terrii-text-primary font-medium">
                    {moment.author.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              
              <div className="ml-2">
                <div className="font-medium text-terrii-text-primary">{moment.author.name}</div>
                <div className="text-xs text-gray-500">{moment.author.role}</div>
              </div>
            </div>

            <div className="flex items-center mx-1">
              <div className="text-lg text-gray-400">→</div>
            </div>
            
            {/* Resident Info */}
            <div className="flex items-center bg-terrii-blue/5 p-2 rounded-lg">
              <div className="w-9 h-9 rounded-full bg-terrii-blue/10 flex items-center justify-center overflow-hidden">
                {moment.resident.photo ? (
                  <S3Image 
                    s3Key={moment.resident.photo} 
                    alt={moment.resident.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-terrii-text-primary font-medium">
                    {moment.resident.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="ml-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-terrii-text-primary">{moment.resident.name}</span>
                </div>
                <div className="text-xs text-gray-500">
                  {formatDistanceToNow(moment.timestamp, { addSuffix: true })}
                </div>
              </div>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="px-4">
        <div className="flex items-center space-x-2 mb-2">
          {moment.emoji && <span className="text-xl">{moment.emoji}</span>}
          <h3 className="font-semibold text-terrii-text-primary">{moment.title}</h3>
        </div>
        
        <p className="text-terrii-text-secondary mb-3">
          {moment.description.length > 150 && viewMode === 'compact' 
            ? `${moment.description.slice(0, 150)}...` 
            : moment.description}
        </p>
        
        {/* Photos */}
        {moment.photos && moment.photos.length > 0 && (
          <div className="mb-3">
            {moment.photos.length === 1 ? (
              <S3Image 
                s3Key={moment.photos[0]} 
                alt={moment.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {moment.photos.slice(0, 4).map((photo, index) => (
                  <div key={index} className={`${index < 2 ? 'h-40' : 'h-32'} relative`}>
                    <S3Image 
                      s3Key={photo} 
                      alt={`${moment.title} ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {index === 3 && moment.photos.length > 4 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                        <span className="text-white font-medium">+{moment.photos.length - 4}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Categories & Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="outline" className="bg-terrii-blue/10 text-terrii-blue border-none">
            {moment.category}
          </Badge>
          
          {moment.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100 text-terrii-text-secondary border-none">
              #{tag}
            </Badge>
          ))}
          
          {moment.tags.length > 3 && (
            <Badge variant="outline" className="bg-gray-100 text-terrii-text-secondary border-none">
              +{moment.tags.length - 3}
            </Badge>
          )}
          
          {moment.status === 'pending_approval' && (
            <Badge className="bg-terrii-warning/20 text-terrii-warning border-none ml-auto">
              Pending Approval
            </Badge>
          )}
          
          {moment.status === 'archived' && (
            <Badge className="bg-terrii-text-light/20 text-terrii-text-light border-none ml-auto">
              Archived
            </Badge>
          )}
          
          {moment.isSharedWithFamily && (
            <Badge className="bg-terrii-success/20 text-terrii-success border-none ml-auto">
              Shared with Family
            </Badge>
          )}
        </div>
      </div>
      
      {/* Card Footer */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center space-x-2 ${moment.hasLiked ? 'text-terrii-success' : 'text-terrii-text-light'}`}
            onClick={handleLike}
          >
            {moment.hasLiked ? (
              <Heart className="h-4 w-4 fill-current" />
            ) : (
              <Heart className="h-4 w-4" />
            )}
            <span>{moment.likes}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center space-x-2 text-terrii-text-light"
            onClick={handleComment}
          >
            <MessageSquare className="h-4 w-4" />
            <span>{moment.comments.length}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center space-x-2 text-terrii-text-light"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
