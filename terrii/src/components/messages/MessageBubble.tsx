import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { 
  MessageSquare, MoreHorizontal, Check, CheckCheck, ThumbsUp, 
  Heart, Star, Download
} from 'lucide-react';
// Import the entire module
import * as MessagesModule from '../../mock/messages';
import { Button } from '../ui/Button';

interface MessageBubbleProps {
  message: MessagesModule.Message;
  onReply?: (messageId: string) => void;
  onReact?: (messageId: string, reaction: string) => void;
}

export function MessageBubble({ message, onReply, onReact }: MessageBubbleProps) {
  const [hovering, setHovering] = useState(false);
  
  const getStatusIcon = (status?: string) => {
    if (!status || !message.isOwn) return null;
    
    switch (status) {
      case 'sent':
        return <Check className="h-3 w-3 text-terrii-text-light" />;
      case 'delivered':
        return <CheckCheck className="h-3 w-3 text-terrii-text-light" />;
      case 'read':
        return <CheckCheck className="h-3 w-3 text-terrii-success" />;
      default:
        return null;
    }
  };
  
  const handleDownloadAttachment = (attachment: any) => {
    // In a real app, this would download the file
    window.open(attachment.url, '_blank');
  };

  return (
    <div 
      className={`flex flex-col ${message.isOwn ? 'items-end' : 'items-start'}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="flex flex-col max-w-[85%] md:max-w-[70%]">
        {/* Sender name if not own message */}
        {!message.isOwn && (
          <div className="ml-1 mb-1 flex items-center space-x-1">
            <span className="text-xs font-medium text-terrii-text-secondary">
              {message.sender.name}
            </span>
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
            : 'bg-white border border-gray-200'
        }`}>
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          
          {message.isEdited && (
            <span className="text-xs text-terrii-text-light italic ml-2">(edited)</span>
          )}
          
          {/* Attachments */}
          {message.attachments && message.attachments.length > 0 && (
            <div className="mt-2 space-y-2">
              {message.attachments.map((attachment, index) => (
                <div key={index} className="relative group/attachment">
                  {attachment.type === 'image' ? (
                    <div className="relative">
                      <img
                        src={attachment.url}
                        alt={attachment.name}
                        className="max-w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => {
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
                        <MessageSquare className="h-4 w-4 text-terrii-text-secondary" />
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
            <div className={`absolute -top-3 ${message.isOwn ? 'left-0' : 'right-0'} flex items-center space-x-1 bg-white shadow rounded-full py-1 px-2`}>
              <Button
                variant="ghost"
                size="sm"
                className="w-6 h-6 rounded-full p-0"
                onClick={() => onReply && onReply(message.id)}
              >
                <MessageSquare className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-6 h-6 rounded-full p-0"
                onClick={() => onReact && onReact(message.id)}
              >
                <Heart className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-6 h-6 rounded-full p-0"
              >
                <MoreHorizontal className="h-3 w-3" />
              </Button>
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
        
        {/* Reactions */}
        {message.reactions && message.reactions.length > 0 && (
          <div className={`flex mt-1 ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
            <div className="flex bg-white shadow-sm rounded-full px-1 py-0.5 gap-1">
              {message.reactions.map((reaction, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="h-5 px-1 flex items-center text-xs rounded-full bg-gray-100"
                >
                  {reaction.type === 'heart' ? (
                    <Heart className="h-2 w-2 mr-1" />
                  ) : (
                    <ThumbsUp className="h-2 w-2 mr-1" />
                  )}
                  {reaction.count}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}