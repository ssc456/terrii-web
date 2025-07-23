import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { BottomNav } from './BottomNav';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

export function MainAppLayout({ children }: MainAppLayoutProps) {
  const location = useLocation();
  
  // Define paths that should NOT show the header/bottom nav
  const noLayoutPaths = [
    '/login',
    '/select-care-home',
    '/admin',
    '/admin/care-homes', 
    '/admin/users',
    '/admin/settings'
  ];
  
  // Check if current path should show the layout
  const showLayout = !noLayoutPaths.some(path => location.pathname === path || 
    (path === '/admin' && location.pathname.startsWith('/admin')));
  
  if (!showLayout) {
    return <>{children}</>;
  }
  
  return (
    <div className="min-h-screen bg-terrii-blue/10 flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-20">
        {children}
      </main>
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
