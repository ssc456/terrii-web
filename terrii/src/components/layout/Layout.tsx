import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showHeader?: boolean;
}

export function Layout({ children, className = '', showHeader = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-terrii-blue/10 flex flex-col">
      {/* Header - conditionally rendered */}
      {showHeader && <Header />}
      
      {/* Main Content - with padding bottom for BottomNav */}
      <main className={`flex-1 overflow-auto pb-20 ${className}`}>
        {children}
      </main>
    </div>
  );
}
