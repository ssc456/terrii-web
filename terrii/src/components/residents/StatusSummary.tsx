import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface StatusSummaryProps {
  statusCounts: {
    stable: number;
    check: number;
    urgent: number;
  };
  onFilterByStatus: (status: string) => void;
}

export function StatusSummary({ statusCounts, onFilterByStatus }: StatusSummaryProps) {
  // Map our status values to reference values
  const mappedCounts = {
    updated: statusCounts.stable,
    'needs-update': statusCounts.check,
    overdue: statusCounts.urgent
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div 
        className="bg-white p-3 rounded-lg shadow-terrii hover:shadow-terrii-lg transition-shadow cursor-pointer"
        onClick={() => onFilterByStatus('stable')}
      >
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle className="h-6 w-6 text-terrii-success/80" />
          </div>
          <div className="text-2xl font-bold text-terrii-success/80">{mappedCounts.updated}</div>
          <div className="text-sm text-terrii-text-secondary">Up to date</div>
        </div>
      </div>
      
      <div 
        className="bg-white p-3 rounded-lg shadow-terrii hover:shadow-terrii-lg transition-shadow cursor-pointer"
        onClick={() => onFilterByStatus('check')}
      >
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Clock className="h-6 w-6 text-terrii-warning/80" />
          </div>
          <div className="text-2xl font-bold text-terrii-warning/80">{mappedCounts['needs-update']}</div>
          <div className="text-sm text-terrii-text-secondary">Needs update</div>
        </div>
      </div>
      
      <div 
        className="bg-white p-3 rounded-lg shadow-terrii hover:shadow-terrii-lg transition-shadow cursor-pointer"
        onClick={() => onFilterByStatus('urgent')}
      >
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <AlertCircle className="h-6 w-6 text-terrii-error/80" />
          </div>
          <div className="text-2xl font-bold text-terrii-error/80">{mappedCounts.overdue}</div>
          <div className="text-sm text-terrii-text-secondary">Overdue</div>
        </div>
      </div>
    </div>
  );
}