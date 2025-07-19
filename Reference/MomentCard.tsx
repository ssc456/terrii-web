import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { formatDistanceToNow } from 'date-fns';
import { 
  Check, CheckCheck, Paperclip, Heart, ThumbsUp, Reply, 
  MoreHorizontal, Copy, Forward, Download, Quote, Edit,
  Trash2, Flag, Star, StarOff
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MessageBubbleProps {
  message: {
    id: string;
    content: string;
    sender: {
      name: string;
      role: string;
      photo?: string;
    };
    timestamp: Date;
    isOwn: boolean;
    status?: 'sent' | 'delivered' | 'read';
    attachments?: {
      type: 'image' | 'file';
      url: string;
      name: string;
    }[];
    reactions?: {
      type: 'like' | 'heart';
      count: number;
      hasReacted: boolean;
    }[];
    replyTo?: {
      id: string;
      content: string;
      sender: string;
    };
    isStarred?: boolean;
    isEdited?: boolean;
  };
  onReply?: (messageId: string) => void;
  onReact?: (messageId: string, type: 'like' | 'heart') => void;
  onEdit?: (messageId: string) => void;
  onDelete?: (messageId: string) => void;
  onForward?: (messageId: string) => void;
  onStar?: (messageId: string) => void;
  onFlag?: (messageId: string) => void;
  onQuote?: (messageId: string) => void;
}

export function MessageBubble({ 
  message, 
  onReply, 
  onReact, 
  onEdit, 
  onDelete, 
  onForward, 
  onStar, 
  onFlag, 
  onQuote 
}: MessageBubbleProps) {
  const [showReactions, setShowReactions] = useState(false);
  const [hovering, setHovering] = useState(false);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'sent':
        return <Check className="h-3 w-3" />;
      case 'delivered':
        return <CheckCheck className="h-3 w-3" />;
      case 'read':
        return <CheckCheck className="h-3 w-3 text-terrii-success" />;
      default:
        return null;
    }
  };

  const handleReaction = (type: 'like' | 'heart') => {
    onReact?.(message.id, type);
    setShowReactions(false);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(message.content);
  };

  const handleDownloadAttachment = (attachment: any) => {
    // In a real app, this would trigger file download
    console.log('Downloading:', attachment.name);
  };

  return (
    <div 
      className={`flex items-start space-x-2 group ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {!message.isOwn && (
        <Avatar className="w-8 h-8">
          {message.sender.photo ? (
            <AvatarImage src={message.sender.photo} alt={message.sender.name} />
          ) : (
            <AvatarFallback className="bg-terrii-blue text-terrii-text-primary text-xs">
              {getInitials(message.sender.name)}
            </AvatarFallback>
          )}
        </Avatar>
      )}
      
      <div className={`flex-1 max-w-[80%] ${message.isOwn ? 'flex flex-col items-end' : ''}`}>
        {!message.isOwn && (
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-xs font-medium text-terrii-text-primary">
              {message.sender.name}
            </span>
            <Badge variant="outline" className="text-xs px-2 py-0">
              {message.sender.role}
            </Badge>
            {message.isStarred && <Star className="h-3 w-3 text-terrii-warning fill-current" />}
          </div>
        )}
        
        {/* Reply Context */}
        {message.replyTo && (
          <div className={`mb-2 p-2 rounded border-l-4 border-terrii-blue bg-terrii-blue/10 text-sm ${
            message.isOwn ? 'border-r-4 border-l-0' : ''
          }`}>
            <div className="text-xs text-terrii-text-light mb-1">Replying to {message.replyTo.sender}</div>
            <div className="text-terrii-text-secondary truncate">{message.replyTo.content}</div>
          </div>
        )}
        
        <div className={`relative rounded-lg px-3 py-2 ${
          message.isOwn 
            ? 'bg-terrii-green text-terrii-text-primary' 
            : 'bg-white border border-border'
        }`}>
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          
          {message.isEdited && (
            <span className="text-xs text-terrii-text-light italic ml-2">(edited)</span>
          )}
          
          {message.attachments && message.attachments.length > 0 && (
            <div className="mt-2 space-y-2">
              {message.attachments.map((attachment, index) => (
                <div key={index} className="relative group/attachment">
                  {attachment.type === 'image' ? (
                    <div className="relative">
                      <ImageWithFallback
                        src={attachment.url}
                        alt={attachment.name}
                        className="max-w-48 h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => {
                          // In real app, would open image in modal
                          window.open(attachment.url, '_blank');
                        }}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-1 right-1 bg-black/50 text-white opacity-0 group-hover/attachment:opacity-100 transition-opacity"
                        onClick={() => handleDownloadAttachment(attachment)}
                      >
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-2 bg-terrii-blue/10 rounded border cursor-pointer hover:bg-terrii-blue/20 transition-colors">
                      <div className="flex items-center space-x-2">
                        <Paperclip className="h-4 w-4 text-terrii-text-secondary" />
                        <span className="text-sm font-medium">{attachment.name}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDownloadAttachment(attachment)}
                      >
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Quick Actions - show on hover */}
          {hovering && (
            <div className={`absolute -top-2 ${message.isOwn ? 'left-0' : 'right-0'} flex items-center space-x-1 bg-white rounded-lg shadow-terrii border p-1 opacity-0 group-hover:opacity-100 transition-opacity`}>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => handleReaction('like')}
              >
                <ThumbsUp className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => handleReaction('heart')}
              >
                <Heart className="h-3 w-3" />
              </Button>
              {!message.isOwn && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => onReply?.(message.id)}
                >
                  <Reply className="h-3 w-3" />
                </Button>
              )}
              
              {/* More Options Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={message.isOwn ? "start" : "end"} className="w-48">
                  <DropdownMenuItem onClick={() => onQuote?.(message.id)}>
                    <Quote className="h-4 w-4 mr-2" />
                    Quote Message
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleCopyMessage}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Message
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onForward?.(message.id)}>
                    <Forward className="h-4 w-4 mr-2" />
                    Forward
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onStar?.(message.id)}>
                    {message.isStarred ? (
                      <>
                        <StarOff className="h-4 w-4 mr-2" />
                        Remove Star
                      </>
                    ) : (
                      <>
                        <Star className="h-4 w-4 mr-2" />
                        Star Message
                      </>
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {message.isOwn && (
                    <>
                      <DropdownMenuItem onClick={() => onEdit?.(message.id)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Message
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => onDelete?.(message.id)}
                        className="text-terrii-error hover:text-terrii-error"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Message
                      </DropdownMenuItem>
                    </>
                  )}
                  {!message.isOwn && (
                    <DropdownMenuItem 
                      onClick={() => onFlag?.(message.id)}
                      className="text-terrii-warning hover:text-terrii-warning"
                    >
                      <Flag className="h-4 w-4 mr-2" />
                      Report Message
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
        
        <div className={`flex items-center space-x-2 mt-1 ${
          message.isOwn ? 'flex-row-reverse space-x-reverse' : ''
        }`}>
          <span className="text-xs text-terrii-text-light">
            {formatDistanceToNow(message.timestamp, { addSuffix: true })}
          </span>
          
          {message.isOwn && message.status && (
            <div className="text-terrii-text-light">
              {getStatusIcon(message.status)}
            </div>
          )}
        </div>
        
        {message.reactions && message.reactions.length > 0 && (
          <div className={`flex items-center space-x-1 mt-1 ${message.isOwn ? 'justify-end' : ''}`}>
            {message.reactions.map((reaction, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`h-6 px-2 rounded-full text-xs transition-colors ${
                  reaction.hasReacted 
                    ? 'bg-terrii-success/20 text-terrii-success border border-terrii-success/30 hover:bg-terrii-success/30' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
                onClick={() => handleReaction(reaction.type)}
              >
                {reaction.type === 'like' ? (
                  <ThumbsUp className="h-2 w-2 mr-1" />
                ) : (
                  <Heart className="h-2 w-2 mr-1" />
                )}
                {reaction.count}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}