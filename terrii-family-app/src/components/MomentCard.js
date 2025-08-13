import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Alert } from 'react-native';
import { Colors, Typography, Spacing } from '../constants/Theme';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import S3Image from './S3Image';

/**
 * Mobile-optimized MomentCard component that mirrors desktop functionality
 * Supports viewing moments, liking, and commenting (but not creating)
 */
export default function MomentCard({
  momentData,
  onLike,
  onComment,
  onPress,
  onViewDetail,
  showComments = false,
  isLiked = false
}) {
  const [isPressed, setIsPressed] = useState(false);
  
  // Safely extract data
  const title = momentData?.title || 'Untitled Moment';
  const description = momentData?.description || '';
  const createdAt = momentData?.createdAt;
  const resident = momentData?.resident;
  const media = momentData?.media || [];
  const tags = momentData?.tags || [];
  const likes = momentData?.likes || 0;
  const authorRole = momentData?.authorRole;
  
  // Get first photo for hero display
  const heroPhoto = media.length > 0 ? media[0] : null;
  
  // Get resident avatar info
  const residentName = resident?.name || 'Resident';
  const residentPhoto = resident?.photo;
  const avatarLetter = residentName.charAt(0).toUpperCase();
  
  // Format timestamp
  const timeAgo = createdAt ? moment(createdAt).fromNow() : '';
  const isRecent = createdAt ? moment().diff(moment(createdAt), 'hours') < 24 : false;
  
  // Handle interactions
  const handlePress = () => {
    if (onPress) {
      onPress(momentData);
    } else if (onViewDetail) {
      onViewDetail(momentData);
    }
  };
  
  const handleLike = (e) => {
    e?.stopPropagation?.();
    if (onLike) {
      onLike(momentData.id);
    }
  };
  
  const handleComment = (e) => {
    e?.stopPropagation?.();
    if (onComment) {
      onComment(momentData);
    }
  };

  return (
    <Pressable 
      style={[styles.container, isPressed && styles.containerPressed]} 
      onPress={handlePress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      android_ripple={{ color: 'rgba(0,0,0,0.05)' }}
    >
      {/* Hero Image Section */}
      {heroPhoto && (
        <View style={styles.heroSection}>
          <S3Image s3Key={heroPhoto} style={styles.heroImage} />
          <LinearGradient 
            colors={['rgba(0,0,0,0.4)', 'transparent']} 
            style={styles.heroOverlay}
          />
          
          {/* Overlay Content */}
          <View style={styles.heroContent}>
            {/* Status Badge */}
            {isRecent && (
              <View style={styles.recentBadge}>
                <Text style={styles.recentBadgeText}>New</Text>
              </View>
            )}
            
            {/* Time Badge */}
            <View style={styles.timeBadge}>
              <Text style={styles.timeBadgeText}>{timeAgo}</Text>
            </View>
          </View>
          
          {/* Bottom Gradient Title */}
          <LinearGradient 
            colors={['transparent', 'rgba(0,0,0,0.7)']} 
            style={styles.titleOverlay}
          >
            <Text style={styles.heroTitle} numberOfLines={2}>{title}</Text>
          </LinearGradient>
        </View>
      )}
      
      {/* Content Section */}
      <View style={[styles.contentSection, !heroPhoto && styles.contentSectionNoHero]}>
        {/* Header (only show if no hero image) */}
        {!heroPhoto && (
          <View style={styles.headerRow}>
            <View style={styles.residentInfo}>
              {residentPhoto ? (
                <S3Image s3Key={residentPhoto} style={styles.avatarImage} />
              ) : (
                <View style={styles.avatarCircle}>
                  <Text style={styles.avatarText}>{avatarLetter}</Text>
                </View>
              )}
              <View style={styles.headerText}>
                <Text style={styles.momentTitleNoHero} numberOfLines={2}>{title}</Text>
                <View style={styles.metaRow}>
                  <Text style={styles.residentName}>{residentName}</Text>
                  <Text style={styles.timeSeparator}> • </Text>
                  <Text style={styles.timeText}>{timeAgo}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        
        {/* Resident Info for Hero Layout */}
        {heroPhoto && (
          <View style={styles.residentRowHero}>
            <View style={styles.residentInfo}>
              {residentPhoto ? (
                <S3Image s3Key={residentPhoto} style={styles.avatarImageSmall} />
              ) : (
                <View style={styles.avatarCircleSmall}>
                  <Text style={styles.avatarTextSmall}>{avatarLetter}</Text>
                </View>
              )}
              <Text style={styles.residentNameHero}>{residentName}</Text>
            </View>
            {authorRole && (
              <View style={styles.authorBadge}>
                <Text style={styles.authorBadgeText}>{authorRole}</Text>
              </View>
            )}
          </View>
        )}
        
        {/* Description */}
        {description && (
          <Text style={styles.description} numberOfLines={heroPhoto ? 3 : 4}>
            {description}
          </Text>
        )}
        
        {/* Tags */}
        {tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {tags.slice(0, 4).map((tag, index) => (
              <View key={index} style={styles.tagChip}>
                <Text style={styles.tagText}>#{tag}</Text>
              </View>
            ))}
            {tags.length > 4 && (
              <View style={styles.tagMore}>
                <Text style={styles.tagMoreText}>+{tags.length - 4}</Text>
              </View>
            )}
          </View>
        )}
        
        {/* Photo Gallery (for multiple photos) */}
        {media.length > 1 && (
          <View style={styles.photoGallery}>
            {media.slice(1, 4).map((photo, index) => (
              <View key={index} style={styles.galleryItem}>
                <S3Image s3Key={photo} style={styles.galleryImage} />
                {index === 2 && media.length > 4 && (
                  <View style={styles.galleryOverlay}>
                    <Text style={styles.galleryOverlayText}>+{media.length - 4}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        )}
        
        {/* Actions Row */}
        <View style={styles.actionsRow}>
          <TouchableOpacity 
            style={[styles.actionButton, isLiked && styles.actionButtonLiked]} 
            onPress={handleLike}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={[styles.actionIcon, isLiked && styles.actionIconLiked]}>
              {isLiked ? '❤️' : '🤍'}
            </Text>
            <Text style={[styles.actionText, isLiked && styles.actionTextLiked]}>
              {likes}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={handleComment}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.actionIcon}>💬</Text>
            <Text style={styles.actionText}>Comment</Text>
          </TouchableOpacity>
          
          <View style={styles.spacer} />
          
          <TouchableOpacity 
            style={styles.viewButton}
            onPress={handlePress}
          >
            <Text style={styles.viewButtonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 20,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  containerPressed: {
    transform: [{ scale: 0.98 }],
    shadowOpacity: 0.12,
  },
  
  // Hero Section (with image)
  heroSection: {
    position: 'relative',
    height: 220,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.lightBackground,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
  },
  heroContent: {
    position: 'absolute',
    top: Spacing.md,
    left: Spacing.md,
    right: Spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentBadge: {
    backgroundColor: Colors.terriiGreen,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  recentBadgeText: {
    color: '#fff',
    fontSize: Typography.fontSize.xs,
    fontWeight: '700',
  },
  timeBadge: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  timeBadgeText: {
    color: '#fff',
    fontSize: Typography.fontSize.xs,
    fontWeight: '600',
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: 'flex-end',
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  heroTitle: {
    color: '#fff',
    fontSize: Typography.fontSize.lg,
    fontWeight: '700',
    lineHeight: Typography.lineHeight.sm,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  
  // Content Section
  contentSection: {
    padding: Spacing.lg,
    paddingTop: Spacing.md,
  },
  contentSectionNoHero: {
    paddingTop: Spacing.lg,
  },
  
  // Header Row (no hero)
  headerRow: {
    marginBottom: Spacing.md,
  },
  residentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.lightBackground,
    marginRight: Spacing.md,
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.terriiBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  headerText: {
    flex: 1,
  },
  momentTitleNoHero: {
    fontSize: Typography.fontSize.lg,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  residentName: {
    fontSize: Typography.fontSize.sm,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  timeSeparator: {
    color: Colors.textLight,
    fontSize: Typography.fontSize.sm,
  },
  timeText: {
    fontSize: Typography.fontSize.sm,
    color: Colors.textLight,
  },
  
  // Resident Row (hero layout)
  residentRowHero: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.sm,
  },
  avatarImageSmall: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.lightBackground,
    marginRight: Spacing.sm,
  },
  avatarCircleSmall: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.terriiBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  avatarTextSmall: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  residentNameHero: {
    fontSize: Typography.fontSize.md,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  authorBadge: {
    backgroundColor: Colors.terriiBlue + '20',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  authorBadgeText: {
    fontSize: Typography.fontSize.xs,
    color: Colors.terriiDarkBlue,
    fontWeight: '600',
  },
  
  // Description
  description: {
    fontSize: Typography.fontSize.sm,
    lineHeight: Typography.lineHeight.md,
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
  },
  
  // Tags
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: Spacing.md,
  },
  tagChip: {
    backgroundColor: Colors.lightBackground,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 6,
  },
  tagText: {
    fontSize: Typography.fontSize.xs,
    color: Colors.terriiDarkBlue,
    fontWeight: '600',
  },
  tagMore: {
    backgroundColor: Colors.terriiBlue,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    marginBottom: 6,
  },
  tagMoreText: {
    fontSize: Typography.fontSize.xs,
    color: '#fff',
    fontWeight: '600',
  },
  
  // Photo Gallery
  photoGallery: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
    gap: 8,
  },
  galleryItem: {
    flex: 1,
    height: 80,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.lightBackground,
  },
  galleryOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  galleryOverlayText: {
    color: '#fff',
    fontSize: Typography.fontSize.sm,
    fontWeight: '700',
  },
  
  // Actions Row
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Spacing.sm,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: Colors.lightBackground,
    marginRight: Spacing.md,
  },
  actionButtonLiked: {
    backgroundColor: Colors.terriiGreen + '20',
  },
  actionIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  actionIconLiked: {
    // Keep emoji colors
  },
  actionText: {
    fontSize: Typography.fontSize.xs,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  actionTextLiked: {
    color: Colors.terriiDarkBlue,
  },
  spacer: {
    flex: 1,
  },
  viewButton: {
    backgroundColor: Colors.terriiDarkBlue,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: Typography.fontSize.xs,
    fontWeight: '700',
  },
});
