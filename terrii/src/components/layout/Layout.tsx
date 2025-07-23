import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className="min-h-screen bg-terrii-blue/10 flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className={`flex-1 overflow-auto pb-16 ${className}`}>
        {children}
      </main>
    </div>
  );
}
