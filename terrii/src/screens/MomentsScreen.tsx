import { BottomNav } from '../components/layout/BottomNav';

export function MomentsScreen() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-bold text-terrii-text-primary">Shared Moments</h1>
        <p className="text-terrii-text-secondary text-sm">Share updates with families</p>
      </header>
      
      <main className="flex-1 overflow-auto bg-terrii-blue/10 p-4">
        <div className="bg-white rounded-lg shadow-terrii p-8 text-center">
          <p className="text-terrii-text-secondary mb-4">Shared Moments feature coming soon</p>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}