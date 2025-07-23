import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Settings } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
    setShowSearch(false);
    // You can implement search functionality later
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
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
            onClick={handleSettingsClick}
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
  );
}
