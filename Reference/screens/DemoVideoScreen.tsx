import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { 
  Users, MessageSquare, Camera, RefreshCw, BarChart3, 
  Clock, Heart, Send, CheckCircle, Download, Play, Pause, RotateCcw,
  Volume2, VolumeX, Settings, MessageCircle
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface DemoVideoScreenProps {
  onExit: () => void;
}

type DemoStep = 
  | 'intro' 
  | 'residents' 
  | 'resident-profile' 
  | 'messaging' 
  | 'moments' 
  | 'community'
  | 'angela' 
  | 'insights' 
  | 'closing';

// Voiceover script for each section
const voiceoverScript = {
  intro: "Welcome to TERRii, the comprehensive family engagement platform designed specifically for care providers. Built by Hypercare Ecosystems, TERRii strengthens the connection between care teams and families.",
  residents: "Let's start with the Residents section. Here, care staff can see all residents at a glance, with clear status indicators showing who's up to date, who needs updates, and who's overdue. Each resident card displays their photo, room number, and current status.",
  'resident-profile': "When you tap on a resident, you'll see their detailed profile including their Circle of Care - family members, doctors, and care team members. The Quick Update feature lets staff easily send personalized messages to families, complete with photos.",
  messaging: "The Messages section provides secure communication between care staff and families. Staff can respond to family questions, share updates, and maintain ongoing conversations with photos and attachments.",
  moments: "Shared Moments is where the magic happens. Care staff can capture and share meaningful moments from residents' daily activities - art time, garden walks, social interactions. These moments are automatically shared with families, keeping them connected to their loved one's daily life.",
  community: "The Community section creates a space where families can connect with each other and receive updates from care providers. Staff can toggle between Notice Board mode for announcements only, or Two-Way Community mode that allows families to post and support each other with moderated discussions.",
  angela: "ANGii Sync integrates with our family app, showing concerns and questions from family members. The AI provides suggested actions, helping staff respond thoughtfully and efficiently to family needs.",
  insights: "The Insights dashboard gives care managers powerful analytics - from resident update rates to family engagement metrics. Weekly activity charts and KPIs help optimize care communication.",
  closing: "TERRii transforms care communication by strengthening connections between families and care teams. Ready to enhance your care facility's family engagement?"
};

export function DemoVideoScreen({ onExit }: DemoVideoScreenProps) {
  const [currentStep, setCurrentStep] = useState<DemoStep>('intro');
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const [voiceoverEnabled, setVoiceoverEnabled] = useState(true);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [showVoiceSettings, setShowVoiceSettings] = useState(false);
  const [currentUtterance, setCurrentUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Demo timing configuration - extended by 10 seconds per scene to ensure voiceover completion
  // Previous timing + 10 seconds buffer for comfortable narration
  const stepDurations = {
    intro: 21000,        // 11s + 10s = 21s
    residents: 25000,    // 15s + 10s = 25s
    'resident-profile': 24000, // 14s + 10s = 24s
    messaging: 21000,    // 11s + 10s = 21s
    moments: 25000,      // 15s + 10s = 25s
    community: 23000,    // 13s + 10s = 23s
    angela: 21000,       // 11s + 10s = 21s
    insights: 20000,     // 10s + 10s = 20s
    closing: 18000,      // 8s + 10s = 18s
  };

  const steps: DemoStep[] = [
    'intro', 'residents', 'resident-profile', 
    'messaging', 'moments', 'community', 'angela', 'insights', 'closing'
  ];

  const totalDuration = Object.values(stepDurations).reduce((a, b) => a + b, 0);

  // Initialize voices
  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      setAvailableVoices(voices);
      
      // Try to find a good default voice (prefer female, English)
      const preferredVoice = voices.find(voice => 
        voice.lang.startsWith('en') && 
        (voice.name.toLowerCase().includes('female') || 
         voice.name.toLowerCase().includes('zira') ||
         voice.name.toLowerCase().includes('susan'))
      ) || voices.find(voice => voice.lang.startsWith('en')) || voices[0];
      
      if (preferredVoice) {
        setSelectedVoice(preferredVoice.name);
      }
    };

    // Load voices immediately
    loadVoices();
    
    // Also load when voices change (some browsers load them asynchronously)
    speechSynthesis.addEventListener('voiceschanged', loadVoices);
    
    return () => {
      speechSynthesis.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  // Stop any current speech when component unmounts
  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  // Handle voiceover for each step
  const playVoiceover = (step: DemoStep) => {
    if (!voiceoverEnabled) return;

    // Stop any current speech
    speechSynthesis.cancel();
    
    const text = voiceoverScript[step];
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure voice
    const voice = availableVoices.find(v => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
    }
    
    // Adjusted for comfortable narration pace
    utterance.rate = 0.85;  // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.volume = 0.8;
    
    utterance.onstart = () => {
      setIsSpeaking(true);
    };
    
    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentUtterance(null);
    };
    
    utterance.onerror = () => {
      setIsSpeaking(false);
      setCurrentUtterance(null);
    };

    setCurrentUtterance(utterance);
    speechSynthesis.speak(utterance);
  };

  // Auto-progress demo
  useEffect(() => {
    if (!isPlaying) return;

    const stepDuration = stepDurations[currentStep];
    const interval = 50; // Update every 50ms for smooth progress

    const timer = setInterval(() => {
      setStepProgress(prev => {
        const newProgress = prev + interval;
        const stepProgressPercent = (newProgress / stepDuration) * 100;

        if (newProgress >= stepDuration) {
          const currentIndex = steps.indexOf(currentStep);
          if (currentIndex < steps.length - 1) {
            setCurrentStep(steps[currentIndex + 1]);
            return 0;
          } else {
            setIsPlaying(false);
            return stepDuration;
          }
        }

        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentStep, isPlaying]);

  // Play voiceover when step changes
  useEffect(() => {
    if (isPlaying) {
      // Small delay to let the visual transition start
      const timeout = setTimeout(() => {
        playVoiceover(currentStep);
      }, 300);
      
      return () => clearTimeout(timeout);
    }
  }, [currentStep, isPlaying, voiceoverEnabled, selectedVoice]);

  // Update overall progress
  useEffect(() => {
    const currentIndex = steps.indexOf(currentStep);
    const completedDuration = steps.slice(0, currentIndex).reduce((sum, step) => sum + stepDurations[step], 0);
    const currentProgress = (completedDuration + stepProgress) / totalDuration * 100;
    setProgress(currentProgress);
  }, [currentStep, stepProgress]);

  const handlePlayPause = () => {
    if (isPlaying) {
      // Pause
      setIsPlaying(false);
      if (isSpeaking) {
        speechSynthesis.pause();
      }
    } else {
      // Resume
      setIsPlaying(true);
      if (speechSynthesis.paused) {
        speechSynthesis.resume();
      } else if (voiceoverEnabled) {
        playVoiceover(currentStep);
      }
    }
  };

  const handleRestart = () => {
    speechSynthesis.cancel();
    setCurrentStep('intro');
    setStepProgress(0);
    setProgress(0);
    setIsPlaying(true);
    setIsSpeaking(false);
    setCurrentUtterance(null);
  };

  const toggleVoiceover = () => {
    if (voiceoverEnabled) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    setVoiceoverEnabled(!voiceoverEnabled);
  };

  const handleVoiceChange = (voiceName: string) => {
    setSelectedVoice(voiceName);
    // Restart current voiceover with new voice if playing
    if (isSpeaking && voiceoverEnabled) {
      speechSynthesis.cancel();
      setTimeout(() => playVoiceover(currentStep), 100);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'intro':
        return (
          <motion.div 
            className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-terrii-green to-terrii-blue p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-terrii-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              <span className="text-3xl font-bold text-terrii-text-primary">T</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-terrii-text-primary mb-2">
                Welcome to TERRii
              </h1>
              <p className="text-lg text-terrii-text-secondary">
                The Family Engagement Platform for Care Providers
              </p>
              <p className="text-sm text-terrii-text-light mt-2">
                Built by Hypercare Ecosystems
              </p>
            </motion.div>
          </motion.div>
        );

      case 'residents':
        return (
          <div className="h-full bg-terrii-blue/10 p-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <h2 className="text-2xl font-semibold text-terrii-text-primary mb-2">Residents</h2>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { label: 'Up to date', count: 12, color: 'text-terrii-success' },
                  { label: 'Need update', count: 3, color: 'text-terrii-warning' },
                  { label: 'Overdue', count: 1, color: 'text-terrii-error' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white p-3 rounded-lg text-center shadow-terrii"
                  >
                    <div className={`text-xl font-bold ${stat.color}`}>{stat.count}</div>
                    <div className="text-xs text-terrii-text-secondary">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="space-y-3">
              {[
                { name: 'Margaret Thompson', room: '101A', status: 'updated', photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face' },
                { name: 'James Mitchell', room: '102B', status: 'needs-update' },
                { name: 'Dorothy Williams', room: '103A', status: 'updated', photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop&crop=face' },
              ].map((resident, index) => (
                <motion.div
                  key={resident.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <Card className="shadow-terrii hover:shadow-terrii-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          {resident.photo ? (
                            <AvatarImage src={resident.photo} alt={resident.name} />
                          ) : (
                            <AvatarFallback className="bg-terrii-green text-terrii-text-primary">
                              {resident.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-medium text-terrii-text-primary">{resident.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-terrii-text-light">Room {resident.room}</span>
                            <Badge variant="outline" className={
                              resident.status === 'updated' 
                                ? 'bg-terrii-success/20 text-terrii-success' 
                                : 'bg-terrii-warning/20 text-terrii-warning'
                            }>
                              {resident.status === 'updated' ? 'Up to date' : 'Needs update'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'resident-profile':
        return (
          <div className="h-full bg-terrii-blue/10 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <Card className="shadow-terrii">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" />
                    </Avatar>
                    <div>
                      <h2 className="text-xl font-semibold text-terrii-text-primary">Margaret Thompson</h2>
                      <p className="text-terrii-text-secondary">Room 101A</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-medium text-terrii-text-primary mb-2">Circle of Care</h3>
                    <div className="flex space-x-2">
                      {['Susan (Daughter)', 'Dr. Smith', 'Nurse Kate'].map((person, index) => (
                        <motion.div
                          key={person}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <Badge variant="outline" className="bg-terrii-green/20">
                            {person}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Card className="shadow-terrii">
                  <CardHeader>
                    <CardTitle className="text-sm">Quick Update</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      <Input placeholder="Margaret had a wonderful day..." className="bg-white" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                      className="flex items-center justify-between"
                    >
                      <Button variant="outline" size="sm">
                        <Camera className="h-4 w-4 mr-2" />
                        Add Photo
                      </Button>
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.5, type: "spring" }}
                      >
                        <Button size="sm" className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary">
                          <Send className="h-4 w-4 mr-2" />
                          Send Update
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        );

      case 'messaging':
        return (
          <div className="h-full bg-terrii-blue/10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 border-b bg-white"
            >
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" />
                </Avatar>
                <div>
                  <h2 className="font-semibold text-terrii-text-primary">Margaret Thompson</h2>
                  <p className="text-sm text-terrii-text-secondary">Dr. Smith, Susan, Care Team</p>
                </div>
              </div>
            </motion.div>
            
            <div className="flex-1 p-4 space-y-4">
              {[
                { 
                  content: 'How did Margaret do with her morning activities?',
                  sender: 'Dr. Smith',
                  isOwn: false,
                  delay: 0.5
                },
                { 
                  content: 'She participated well in music therapy and sang along to her favorite songs!',
                  sender: 'You',
                  isOwn: true,
                  delay: 1.5
                },
              ].map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: message.delay }}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.isOwn 
                      ? 'bg-terrii-green text-terrii-text-primary' 
                      : 'bg-white border border-border'
                  }`}>
                    {!message.isOwn && (
                      <p className="text-xs font-medium mb-1 text-terrii-text-primary">{message.sender}</p>
                    )}
                    <p className="text-sm">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
                className="flex items-center space-x-2 bg-white border-t p-3"
              >
                <Input placeholder="Type a message..." className="flex-1" />
                <Button size="sm" className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary">
                  <Send className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        );

      case 'moments':
        return (
          <div className="h-full bg-terrii-blue/10 p-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <h2 className="text-2xl font-semibold text-terrii-text-primary">Shared Moments</h2>
            </motion.div>
            
            <div className="space-y-4">
              {[
                {
                  title: '🎨 Art Time!',
                  content: 'Margaret created a beautiful watercolor painting today. She was so focused and proud of her work!',
                  author: 'Sarah J.',
                  resident: 'Margaret Thompson',
                  likes: 12,
                  delay: 0.3
                },
                {
                  title: '🌳 Garden Walk',
                  content: 'James enjoyed a peaceful walk in the garden. He spent time by the roses and shared memories of his own garden.',
                  author: 'Maria R.',
                  resident: 'James Mitchell',
                  likes: 8,
                  delay: 0.8
                },
              ].map((moment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: moment.delay }}
                >
                  <Card className="shadow-terrii hover:shadow-terrii-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3 mb-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-terrii-blue text-terrii-text-primary text-xs">
                            {moment.author}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium text-terrii-text-primary text-sm">{moment.author}</p>
                          <p className="text-xs text-terrii-text-light">2 hours ago • {moment.resident}</p>
                        </div>
                      </div>
                      
                      <h3 className="font-medium text-terrii-text-primary mb-2">{moment.title}</h3>
                      <p className="text-sm text-terrii-text-secondary mb-3">{moment.content}</p>
                      
                      <div className="flex items-center justify-between">
                        <Button variant="ghost" size="sm" className="text-terrii-text-light">
                          <Heart className="h-4 w-4 mr-1" />
                          <span className="text-sm">{moment.likes}</span>
                        </Button>
                        <Badge variant="outline" className="bg-terrii-green/20 text-xs">
                          Shared with family
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
                className="text-center"
              >
                <Button className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary">
                  <Camera className="h-4 w-4 mr-2" />
                  Create New Moment
                </Button>
              </motion.div>
            </div>
          </div>
        );

      case 'community':
        return (
          <div className="h-full bg-terrii-blue/10 p-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold text-terrii-text-primary">Community</h2>
                <Badge variant="outline" className="bg-terrii-success/20 text-terrii-success border-terrii-success/30">
                  Two-Way Community (Moderated)
                </Badge>
              </div>
              <p className="text-terrii-text-secondary">Peaceful Place Families</p>
            </motion.div>
            
            <div className="space-y-3">
              {[
                {
                  title: 'Welcome to Our Community',
                  author: 'Sarah Johnson',
                  role: 'Care Manager',
                  content: 'We\'re excited to launch this space for families to connect and support each other.',
                  isPinned: true,
                  replies: 0,
                  likes: 12,
                  delay: 0.3
                },
                {
                  title: 'Holiday Activities Schedule',
                  author: 'Maria Rodriguez',
                  role: 'Activities Coordinator',
                  content: 'Here\'s our festive December calendar with carol singing and cookie decorating!',
                  isPinned: false,
                  replies: 3,
                  likes: 8,
                  delay: 0.6
                },
                {
                  title: 'Gratitude for the Care Team',
                  author: 'Lisa Chen',
                  role: 'Family Member',
                  content: 'I wanted to share how grateful our family is for the incredible care.',
                  isPinned: false,
                  replies: 5,
                  likes: 15,
                  delay: 0.9
                },
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: post.delay }}
                >
                  <Card className="shadow-terrii hover:shadow-terrii-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-terrii-green text-terrii-text-primary">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-medium text-terrii-text-primary">{post.author}</h3>
                            {post.role !== 'Family Member' && (
                              <Badge variant="outline" className="bg-terrii-blue/20 text-terrii-blue-dark text-xs">
                                Staff
                              </Badge>
                            )}
                            {post.isPinned && (
                              <Badge variant="outline" className="bg-terrii-warning/20 text-terrii-warning text-xs">
                                Pinned
                              </Badge>
                            )}
                          </div>
                          <h4 className="font-semibold text-terrii-text-primary mb-2">{post.title}</h4>
                          <p className="text-sm text-terrii-text-secondary mb-3">{post.content}</p>
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center text-sm text-terrii-text-light">
                              <Heart className="h-4 w-4 mr-1" />
                              {post.likes}
                            </span>
                            <span className="flex items-center text-sm text-terrii-text-light">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              {post.replies}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {post.role === 'Family Member' ? 'Family' : 'Staff'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-4 text-center"
            >
              <Button className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary">
                <MessageCircle className="h-4 w-4 mr-2" />
                Start New Conversation
              </Button>
            </motion.div>
          </div>
        );

      case 'angela':
        return (
          <div className="h-full bg-terrii-blue/10 p-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <h2 className="text-2xl font-semibold text-terrii-text-primary">ANGii Sync</h2>
              <p className="text-terrii-text-secondary">Family concerns from the ANGii app</p>
            </motion.div>
            
            <div className="space-y-3">
              {[
                {
                  title: 'Medication Questions',
                  family: 'Susan Thompson (Daughter)',
                  resident: 'Margaret Thompson',
                  urgency: 'high',
                  content: 'Family has questions about Margaret\'s new medication schedule.',
                  action: 'Consult with physician and provide medication education',
                  delay: 0.5
                },
                {
                  title: 'Social Interaction Concerns',
                  family: 'Mary Mitchell (Wife)',
                  resident: 'James Mitchell',
                  urgency: 'medium',
                  content: 'Family noticed James seems less social during video calls.',
                  action: 'Arrange social activities and provide friendship updates',
                  delay: 1
                },
              ].map((concern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: concern.delay }}
                >
                  <Card className="shadow-terrii hover:shadow-terrii-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-medium text-terrii-text-primary">{concern.title}</h3>
                            <Badge variant="outline" className={
                              concern.urgency === 'high' 
                                ? 'bg-terrii-error/20 text-terrii-error border-terrii-error/30'
                                : 'bg-terrii-warning/20 text-terrii-warning border-terrii-warning/30'
                            }>
                              {concern.urgency}
                            </Badge>
                          </div>
                          <p className="text-sm text-terrii-text-primary mb-1">{concern.resident}</p>
                          <p className="text-sm text-terrii-text-secondary mb-2">{concern.content}</p>
                          <p className="text-xs text-terrii-text-light">From: {concern.family}</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-terrii-green/20 rounded-lg mb-3">
                        <p className="text-sm text-terrii-text-primary">
                          <strong>Suggested Action:</strong> {concern.action}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Message Family
                        </Button>
                        <Button size="sm" className="bg-terrii-success hover:bg-terrii-success/80 text-white">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Mark Resolved
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'insights':
        return (
          <div className="h-full bg-terrii-blue/10 p-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-terrii-text-primary">Insights</h2>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[
                { label: 'Residents Updated', value: '85%', icon: Users, color: 'text-terrii-success' },
                { label: 'Avg Response Time', value: '2.4h', icon: Clock, color: 'text-terrii-info' },
                { label: 'Moments Shared', value: '142', icon: Camera, color: 'text-terrii-warning' },
                { label: 'Family Engagement', value: '78%', icon: MessageSquare, color: 'text-terrii-success' },
              ].map((kpi, index) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="shadow-terrii">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-terrii-text-secondary">{kpi.label}</p>
                          <p className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
                        </div>
                        <kpi.icon className="h-8 w-8 text-terrii-green-dark" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Card className="shadow-terrii">
                <CardHeader>
                  <CardTitle className="text-lg">Weekly Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={[
                      { day: 'Mon', updates: 12 },
                      { day: 'Tue', updates: 15 },
                      { day: 'Wed', updates: 8 },
                      { day: 'Thu', updates: 18 },
                      { day: 'Fri', updates: 16 },
                      { day: 'Sat', updates: 14 },
                      { day: 'Sun', updates: 10 },
                    ]}>
                      <XAxis dataKey="day" />
                      <YAxis hide />
                      <Bar dataKey="updates" fill="#C1E8C5" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        );

      case 'closing':
        return (
          <motion.div 
            className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-gradient-to-br from-terrii-green to-terrii-blue p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-terrii-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              <span className="text-3xl font-bold text-terrii-text-primary">T</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h1 className="text-2xl font-bold text-terrii-text-primary mb-2">
                TERRii
              </h1>
              <p className="text-lg text-terrii-text-secondary">
                Strengthening Care Through Connection
              </p>
              <p className="text-sm text-terrii-text-light mt-4">
                Ready to transform your care communication?
              </p>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Demo Controls */}
      <div className="bg-white border-b border-border p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRestart}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleVoiceover}
              className={voiceoverEnabled ? 'text-terrii-green-dark' : 'text-terrii-text-light'}
            >
              {voiceoverEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowVoiceSettings(!showVoiceSettings)}
            >
              <Settings className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-terrii-text-secondary">
                {currentStep.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
              {isSpeaking && (
                <div className="w-2 h-2 bg-terrii-success rounded-full animate-pulse"></div>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-terrii-text-secondary">
              {formatTime((progress / 100) * totalDuration)} / {formatTime(totalDuration)}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={onExit}
            >
              Exit Demo
            </Button>
          </div>
        </div>
        
        {showVoiceSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-2 p-3 bg-terrii-blue/10 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Label htmlFor="voiceover-toggle" className="text-sm">
                  Voiceover
                </Label>
                <Switch
                  id="voiceover-toggle"
                  checked={voiceoverEnabled}
                  onCheckedChange={toggleVoiceover}
                />
              </div>
              
              {voiceoverEnabled && (
                <div className="flex items-center space-x-2">
                  <Label htmlFor="voice-select" className="text-sm">
                    Voice
                  </Label>
                  <Select value={selectedVoice} onValueChange={handleVoiceChange}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select voice" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableVoices.map((voice) => (
                        <SelectItem key={voice.name} value={voice.name}>
                          {voice.name} ({voice.lang})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </motion.div>
        )}
        
        <Progress value={progress} className="h-2" />
      </div>

      {/* Demo Content */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait" custom={1}>
          <motion.div
            key={currentStep}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="h-full"
          >
            {renderCurrentStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}