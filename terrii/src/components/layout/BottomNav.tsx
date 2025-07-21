import { Users, MessageSquare, Camera, RefreshCw, BarChart3, HeartHandshake } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { id: 'residents', path: '/residents', icon: Users, label: 'Residents' },
    { id: 'messages', path: '/messages', icon: MessageSquare, label: 'Messages' },
    { id: 'moments', path: '/moments', icon: Camera, label: 'Moments' },
    { id: 'community', path: '/community', icon: HeartHandshake, label: 'Community' },
    { id: 'angela', path: '/angela', icon: RefreshCw, label: 'Angela' },
    { id: 'insights', path: '/insights', icon: BarChart3, label: 'Insights' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 px-1 py-2 z-50">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath.startsWith(item.path) || 
                         (item.path === '/residents' && currentPath === '/');
          
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center px-3 py-2 rounded-md ${
                isActive 
                  ? 'text-terrii-text-primary bg-terrii-green' 
                  : 'text-terrii-text-light hover:text-terrii-text-primary'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}