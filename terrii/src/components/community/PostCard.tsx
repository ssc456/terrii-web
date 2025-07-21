import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { 
  MessageCircle, Heart, ThumbsUp, MoreHorizontal, Pin, 
  Shield, Eye, Clock, Edit, Trash2, CheckCircle, Flag
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/DropdownMenu';
import type { CommunityPost } from '../../mock/community';

interface PostCardProps {
  post: CommunityPost;
  userRole: 'staff' | 'family';
  onClick: (postId: string) => void;
  onAction?: (postId: string, action: string) => void;
  showCheckbox?: boolean;
  isSelected?: boolean;
  onSelectChange?: (postId: string, selected: boolean) => void;
}

export function PostCard({
  post,
  userRole,
  onClick,
  onAction,
  showCheckbox = false,
  isSelected = false,
  onSelectChange
}: PostCardProps) {
  const [isHovering, setIsHovering] = useState(false);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const handleAction = (action: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onAction?.(post.id, action);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onSelectChange?.(post.id, e.target.checked);
  };

  return (
    <Card 
      className={`shadow-terrii cursor-pointer transition-shadow hover:shadow-md group w-full ${
        post.isPinned ? 'border-terrii-warning/50' : ''
      } ${
        post.status === 'pending_approval' ? 'border-terrii-warning/50' : ''
      }`}
      onClick={() => onClick(post.id)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="p-4 w-full">
        <div className="flex items-start space-x-4">
          {showCheckbox && (
            <div className="mt-1 mr-1" onClick={(e) => e.stopPropagation()}>
              <input 
                type="checkbox" 
                checked={isSelected}
                onChange={handleSelectChange}
                className="h-4 w-4 rounded border-gray-300 text-terrii-blue focus:ring-terrii-blue"
              />
            </div>
          )}
          
          <Avatar className="w-12 h-12">
            {post.author.photo ? (
              <AvatarImage src={post.author.photo} alt={post.author.name} />
            ) : (
              <AvatarFallback className="bg-terrii-green text-terrii-text-primary">
                {getInitials(post.author.name)}
              </AvatarFallback>
            )}
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-terrii-text-primary">{post.author.name}</h3>
                {post.author.isStaff && (
                  <Badge variant="outline" className="bg-terrii-blue/20 text-terrii-blue-dark">
                    <Shield className="h-3 w-3 mr-1" />
                    Staff
                  </Badge>
                )}
                {post.isPinned && (
                  <Badge variant="outline" className="bg-terrii-warning/20 text-terrii-warning">
                    <Pin className="h-3 w-3 mr-1" />
                    Pinned
                  </Badge>
                )}
                {post.status === 'pending_approval' && (
                  <Badge variant="outline" className="bg-terrii-warning/20 text-terrii-warning">
                    <Clock className="h-3 w-3 mr-1" />
                    Pending
                  </Badge>
                )}
                <span className="text-xs text-terrii-text-light">
                  {formatDistanceToNow(post.timestamp, { addSuffix: true })}
                </span>
              </div>
              
              {userRole === 'staff' && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={(e) => e.stopPropagation()}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {post.status === 'pending_approval' && (
                      <DropdownMenuItem onClick={(e) => handleAction('approve', e)}>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={(e) => handleAction('edit', e)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    {!post.isPinned ? (
                      <DropdownMenuItem onClick={(e) => handleAction('pin', e)}>
                        <Pin className="h-4 w-4 mr-2" />
                        Pin Post
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem onClick={(e) => handleAction('unpin', e)}>
                        <Pin className="h-4 w-4 mr-2" />
                        Unpin Post
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={(e) => handleAction('delete', e)}
                      className="text-terrii-error"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
              
              {userRole === 'family' && isHovering && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAction?.(post.id, 'report');
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Flag className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            <h2 className="font-semibold text-terrii-text-primary mb-2">
              {post.title}
            </h2>
            
            <p className="text-terrii-text-secondary mb-3 line-clamp-2">
              {post.content}
            </p>
            
            {/* Attachments Preview */}
            {post.attachments.length > 0 && (
              <div className="mb-3">
                {post.attachments[0].type === 'image' && (
                  <img 
                    src={post.attachments[0].url}
                    alt={post.attachments[0].name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                )}
              </div>
            )}
            
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-terrii-text-light">
                  <ThumbsUp className={`h-4 w-4 ${post.reactions.hasLiked ? 'text-terrii-blue fill-current' : ''}`} />
                  <span>{post.reactions.likes.count}</span>
                </div>
                <div className="flex items-center space-x-1 text-terrii-text-light">
                  <Heart className={`h-4 w-4 ${post.reactions.hasHearted ? 'text-terrii-error fill-current' : ''}`} />
                  <span>{post.reactions.hearts.count}</span>
                </div>
                <div className="flex items-center space-x-1 text-terrii-text-light">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.replies.length}</span>
                </div>
                <div className="flex items-center space-x-1 text-terrii-text-light">
                  <Eye className="h-4 w-4" />
                  <span>{post.views}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
                {post.tags.slice(0, 2).map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs hidden sm:inline-flex">
                    {tag}
                  </Badge>
                ))}
                {post.tags.length > 2 && (
                  <Badge variant="outline" className="text-xs hidden sm:inline-flex">
                    +{post.tags.length - 2}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
