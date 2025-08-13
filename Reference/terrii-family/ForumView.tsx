import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { ArrowLeft, Users, MessageCircle, Plus, Search, Pin, Clock, Eye, EyeOff, ThumbsUp, Reply } from "lucide-react";
import { FamilyMember, ForumPost, ForumReply } from "../TERRiiUIApp";

interface ForumViewProps {
  user: FamilyMember | null;
  onBack: () => void;
  onShowUpgrade: () => void;
}

export function ForumView({ user, onBack, onShowUpgrade }: ForumViewProps) {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [filter, setFilter] = useState<"all" | "staff" | "family">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showReplyForm, setShowReplyForm] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  // Mock forum posts data
  const mockPosts: ForumPost[] = [
    {
      id: "1",
      title: "Family Coffee Morning - This Saturday",
      content: "Join us this Saturday at 10 AM for our monthly family coffee morning! We'll have updates from the care team, and it's a wonderful opportunity to connect with other families. Light refreshments will be provided.",
      author: "Lisa Williams",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      isStaffPost: true,
      canReply: true,
      replies: [
        {
          id: "r1",
          content: "Thank you for organizing this! Looking forward to meeting other families.",
          author: "Sarah Johnson",
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
          isAnonymous: false
        },
        {
          id: "r2",
          content: "Will there be parking available? We're coming from out of town.",
          author: "Anonymous",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          isAnonymous: true
        }
      ],
      tags: ["event", "family"]
    },
    {
      id: "2",
      title: "New Garden Area Opening",
      content: "We're excited to announce that our new sensory garden will be open for residents and families to enjoy starting next week. The garden features herb beds, comfortable seating areas, and a beautiful fountain.",
      author: "Dr. Michael Chen",
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      isStaffPost: true,
      canReply: true,
      replies: [],
      tags: ["announcement", "garden"]
    },
    {
      id: "3",
      title: "Thank you to the activities team",
      content: "I wanted to share how much my mother has been enjoying the art therapy sessions. The staff are so patient and encouraging. It's wonderful to see her creativity flourishing again.",
      author: "Jennifer Miller",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      isStaffPost: false,
      canReply: true,
      replies: [
        {
          id: "r3",
          content: "Thank you so much for sharing this! It means the world to us to hear about the positive impact. We'll make sure to pass this on to the activities team.",
          author: "Sarah (Activities Coordinator)",
          timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          isAnonymous: false
        }
      ],
      tags: ["appreciation", "activities"]
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setPosts(mockPosts);
      setIsLoading(false);
    }, 800);
  }, []);

  const filteredPosts = posts.filter(post => {
    // Search filter
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !post.content.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Type filter
    switch (filter) {
      case "staff":
        return post.isStaffPost;
      case "family":
        return !post.isStaffPost;
      default:
        return true;
    }
  });

  const handleSubmitReply = (postId: string) => {
    if (!replyText.trim()) return;

    const newReply: ForumReply = {
      id: Date.now().toString(),
      content: replyText,
      author: isAnonymous ? "Anonymous" : (user?.name || "You"),
      timestamp: new Date(),
      isAnonymous
    };

    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, replies: [...post.replies, newReply] }
        : post
    ));

    setReplyText("");
    setShowReplyForm(null);
    setIsAnonymous(false);
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  const PostCard: React.FC<{ post: ForumPost; index: number }> = ({ post, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
              post.isStaffPost 
                ? 'bg-gradient-to-br from-green-400 to-blue-500' 
                : 'bg-gradient-to-br from-purple-400 to-pink-500'
            }`}>
              {post.isStaffPost ? (
                <Users className="w-6 h-6 text-white" />
              ) : (
                <MessageCircle className="w-6 h-6 text-white" />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 
                  className="text-lg font-semibold"
                  style={{ 
                    fontFamily: 'var(--font-family-secondary)',
                    fontWeight: 'var(--font-semibold)'
                  }}
                >
                  {post.title}
                </h3>
                {post.isStaffPost && (
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                    Staff
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <span className="font-medium">{post.author}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {formatTimestamp(post.timestamp)}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <p 
            className="text-base text-gray-700 leading-relaxed mb-4"
            style={{ 
              fontFamily: 'var(--font-family-primary)',
              fontWeight: 'var(--font-normal)',
              lineHeight: 'var(--leading-relaxed)'
            }}
          >
            {post.content}
          </p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="text-xs bg-gray-50 text-gray-700 border-gray-200"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <MessageCircle className="w-4 h-4" />
                <span>{post.replies.length} replies</span>
              </div>
              
              <motion.button
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ThumbsUp className="w-4 h-4" />
                <span>Like</span>
              </motion.button>
            </div>

            {post.canReply && (
              <motion.button
                onClick={() => setShowReplyForm(showReplyForm === post.id ? null : post.id)}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Reply className="w-4 h-4" />
                Reply
              </motion.button>
            )}
          </div>

          {/* Replies */}
          {post.replies.length > 0 && (
            <div className="mt-6 pl-6 border-l-2 border-gray-100 space-y-4">
              {post.replies.map((reply) => (
                <div key={reply.id} className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="text-sm font-medium"
                      style={{ 
                        fontFamily: 'var(--font-family-primary)',
                        fontWeight: 'var(--font-semibold)'
                      }}
                    >
                      {reply.isAnonymous ? "Anonymous" : reply.author}
                    </span>
                    {reply.isAnonymous && (
                      <EyeOff className="w-3 h-3 text-gray-400" />
                    )}
                    <span className="text-xs text-gray-500">
                      {formatTimestamp(reply.timestamp)}
                    </span>
                  </div>
                  <p 
                    className="text-sm text-gray-700 leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-family-primary)',
                      fontWeight: 'var(--font-normal)'
                    }}
                  >
                    {reply.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Reply Form */}
          {showReplyForm === post.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-4 border-t"
            >
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Share your thoughts..."
                className="angii-input w-full min-h-[80px] resize-none mb-3"
                style={{ 
                  fontFamily: 'var(--font-family-primary)',
                  fontWeight: 'var(--font-normal)'
                }}
              />

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  Post anonymously
                </label>

                <div className="flex gap-2">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => setShowReplyForm(null)}
                      variant="outline"
                      size="sm"
                    >
                      Cancel
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => handleSubmitReply(post.id)}
                      disabled={!replyText.trim()}
                      className="angii-button"
                      size="sm"
                    >
                      Post Reply
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="px-6 py-6 pb-24">
      {/* Header */}
      <motion.div
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="w-12 h-12 rounded-2xl"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </motion.div>
        
        <div className="flex-1">
          <h1 
            className="text-2xl"
            style={{ 
              fontFamily: 'var(--font-family-secondary)',
              fontWeight: 'var(--font-bold)'
            }}
          >
            Family Forum
          </h1>
          <p className="text-lg text-gray-600">
            Connect with other families and care staff
          </p>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Users className="w-4 h-4" />
          <span>{posts.length}</span>
        </div>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        className="relative mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search discussions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="angii-input w-full pl-10"
        />
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        className="flex gap-2 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {[
          { key: "all", label: "All Posts" },
          { key: "staff", label: "Staff Updates" },
          { key: "family", label: "Family Posts" }
        ].map((filterOption) => (
          <motion.button
            key={filterOption.key}
            onClick={() => setFilter(filterOption.key as any)}
            className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all ${
              filter === filterOption.key
                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {filterOption.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Upgrade CTA */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="border-0 shadow-md" style={{ background: 'linear-gradient(135deg, #FEF3C7 0%, #E0F2FE 100%)' }}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Plus className="w-8 h-8 text-orange-500" />
              <div className="flex-1">
                <p className="text-sm font-medium text-orange-800 mb-1">
                  Want to start your own discussions?
                </p>
                <p className="text-xs text-orange-700">
                  Upgrade to ANGii for full forum access and your own family discussions!
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onShowUpgrade}
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl"
                >
                  Upgrade
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Posts List */}
      <div className="space-y-6">
        {isLoading ? (
          // Loading skeleton
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 
              className="text-lg mb-2"
              style={{ 
                fontFamily: 'var(--font-family-secondary)',
                fontWeight: 'var(--font-semibold)'
              }}
            >
              No discussions found
            </h3>
            <p className="text-gray-600">
              {searchQuery ? "Try adjusting your search" : "Check back later for new posts"}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}