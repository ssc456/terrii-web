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
import { S3Image } from '../ui/S3Image';
import type { CommunityPost } from '../../mock/community';

interface PostCardProps {
  post: CommunityPost;
  userRole: 'staff' | 'family';
  onClick: (postId: string) => void;
  onAction?: (postId: string, action: string) => void;
  onLike?: (postId: string) => void;
  onHeart?: (postId: string) => void; // new
  onComment?: (postId: string, content: string) => void;
  showCheckbox?: boolean;
  isSelected?: boolean;
  onSelectChange?: (postId: string, selected: boolean) => void;
}

export function PostCard({
  post,
  userRole,
  onClick,
  onAction,
  onLike,
  onHeart,
  onComment,
  showCheckbox = false,
  isSelected = false,
  onSelectChange
}: PostCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  // NEW: local UI state for improved comment UX
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [submittingComment, setSubmittingComment] = useState(false);

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

  const handleSubmitComment = async () => {
    if (!commentText.trim() || !onComment) return;
    try {
      setSubmittingComment(true);
      await onComment(post.id, commentText.trim());
      setCommentText('');
      // Keep comments section open
    } catch (e) {
      console.error('Failed to submit comment', e);
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmitComment();
    }
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
              <S3Image s3Key={post.author.photo} alt={post.author.name} className="w-12 h-12 object-cover rounded-full" />
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
            
            {/* Media Preview */}
            {((post.attachments && post.attachments.length > 0) || (post.media && post.media.length > 0)) && (
              <div className="mb-3">
                {/* For new backend posts with S3 media keys */}
                {post.media && post.media.length > 0 && (
                  <S3Image 
                    s3Key={post.media[0]}
                    alt="Post media"
                    className="w-full h-40 object-cover rounded-md"
                  />
                )}
                {/* For legacy posts with attachments */}
                {post.attachments && post.attachments.length > 0 && !post.media && (
                  <img 
                    src={post.attachments[0].url}
                    alt={post.attachments[0].name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                )}
              </div>
            )}
          </div>
        </div>
        {/* Enhanced comments & single stats row */}
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button 
                className="flex items-center space-x-1 text-terrii-text-light hover:text-terrii-blue transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  onLike?.(post.id);
                }}
                disabled={!onLike}
              >
                <ThumbsUp className={`h-4 w-4 ${post.reactions.hasLiked ? 'text-terrii-blue fill-current' : ''}`} />
                <span>{post.reactions.likes.count}</span>
              </button>
              <button 
                className="flex items-center space-x-1 text-terrii-text-light hover:text-terrii-error transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  onHeart?.(post.id);
                }}
                disabled={!onHeart}
              >
                <Heart className={`h-4 w-4 ${post.reactions.hasHearted ? 'text-terrii-error fill-current' : ''}`} />
                <span>{post.reactions.hearts.count}</span>
              </button>
              <button 
                className="flex items-center space-x-1 text-terrii-text-light hover:text-terrii-primary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowComments(v => !v);
                }}
              >
                <MessageCircle className="h-4 w-4" />
                <span>{post.replies.length}</span>
              </button>
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

          {showComments && (
            <div 
              className="mt-4 border-t border-terrii-border-light pt-4" 
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-sm font-semibold text-terrii-text-secondary mb-2">
                Comments ({post.replies.length})
              </h4>
              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {post.replies.length === 0 && (
                  <div className="text-xs text-terrii-text-light italic">No comments yet. Be the first to comment.</div>
                )}
                {post.replies.map(reply => (
                  <div key={reply.id} className="flex items-start space-x-2">
                    <div className="h-8 w-8 rounded-full bg-terrii-blue/10 flex items-center justify-center text-terrii-blue text-xs font-medium flex-shrink-0">
                      {reply.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-terrii-text-light mb-0.5 flex items-center gap-2">
                        <span className="font-medium text-terrii-text-primary">{reply.author.name}</span>
                        <span>{formatDistanceToNow(reply.timestamp, { addSuffix: true })}</span>
                      </div>
                      <p className="text-sm text-terrii-text-primary whitespace-pre-wrap break-words">
                        {reply.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {onComment && (
                <div className="mt-3">
                  <textarea
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Write a comment... (Ctrl/Cmd+Enter to send)"
                    className="w-full text-sm rounded-md border border-terrii-border-light bg-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-terrii-blue/30 p-2 resize-y min-h-[60px]"
                  />
                  <div className="flex justify-end mt-2 gap-2">
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => { setShowComments(false); }}
                    >
                      Close
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      disabled={!commentText.trim() || submittingComment}
                      onClick={handleSubmitComment}
                    >
                      {submittingComment ? 'Posting...' : 'Post Comment'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
