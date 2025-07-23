import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Users, MessageSquare, Camera, RefreshCw, BarChart3 } from 'lucide-react';

export function HomeScreen() {
  const { logout } = useAuth();
  
  const menuItems = [
    { id: 'residents', path: '/residents', icon: Users, label: 'Residents', description: 'View and manage resident profiles, send updates to families' },
    { id: 'messages', path: '/messages', icon: MessageSquare, label: 'Messages', description: 'Communicate with families and team members' },
    { id: 'moments', path: '/moments', icon: Camera, label: 'Shared Moments', description: 'Share photos and updates with family members' },
    { id: 'angela', path: '/angela', icon: RefreshCw, label: 'Angela Sync', description: 'View and respond to family concerns from ANGii' },
    { id: 'insights', path: '/insights', icon: BarChart3, label: 'Insights', description: 'View analytics and reports on resident care' },
  ];
  
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-terrii-text-primary mb-2">Welcome to TERRii</h1>
      <p className="text-terrii-text-secondary text-sm mb-6">Care staff platform</p>
      
      {/* Menu Items */}
      <div className="space-y-4">
        {menuItems.map((item) => (
          <Link key={item.id} to={item.path}>
            <div className="bg-white rounded-lg shadow-terrii p-4 hover:shadow-terrii-lg transition-shadow">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-full ${
                  item.id === 'residents' ? 'bg-terrii-green/30' : 
                  item.id === 'messages' ? 'bg-terrii-blue/30' :
                  item.id === 'moments' ? 'bg-terrii-success/20' :
                  item.id === 'angela' ? 'bg-terrii-info/20' : 'bg-terrii-warning/20'
                }`}>
                  <item.icon className="h-6 w-6 text-terrii-text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-medium text-terrii-text-primary">{item.label}</h2>
                  <p className="text-terrii-text-secondary text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
        
        <Button onClick={logout} variant="secondary" className="w-full mt-4">
          Log Out
        </Button>
      </div>
    </div>
  );
}