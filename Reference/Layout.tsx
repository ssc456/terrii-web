import { useState } from 'react';
import { Users, MessageSquare, Camera, RefreshCw, BarChart3, Settings, Search, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface LayoutProps {
  children: React.ReactNode;
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export function Layout({ children, currentTab, onTabChange }: LayoutProps) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'residents', label: 'Residents', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'moments', label: 'Moments', icon: Camera },
    { id: 'community', label: 'Community', icon: MessageCircle },
    { id: 'angela', label: 'ANGii', icon: RefreshCw },
    { id: 'insights', label: 'Insights', icon: BarChart3 },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
    setShowSearch(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-terrii-green rounded-full flex items-center justify-center">
              <span className="text-terrii-text-primary font-semibold">T</span>
            </div>
            <h1 className="text-xl font-semibold text-terrii-text-primary">TERRii</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onTabChange('settings')}
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Search Bar */}
        {showSearch && (
          <div className="mt-3">
            <form onSubmit={handleSearch}>
              <Input
                placeholder="Search residents, messages, or moments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
                autoFocus
              />
            </form>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {children}
      </main>

      {/* Bottom Navigation - Updated for 6 items */}
      <nav className="sticky bottom-0 bg-white border-t border-border px-1 py-2">
        <div className="flex justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={`flex-1 flex flex-col items-center gap-1 py-2 h-auto max-w-[80px] ${
                  isActive 
                    ? 'text-terrii-green-dark bg-terrii-green/20' 
                    : 'text-terrii-text-light'
                }`}
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="h-4 w-4" />
                <span className="text-xs font-medium leading-tight">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}