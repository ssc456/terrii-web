import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'destructive';
  className?: string;
  onClick?: () => void;
}

export function Badge({
  children,
  variant = 'default',
  className = '',
  onClick
}: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-colors";
  
  const variantStyles = {
    default: "bg-terrii-green text-terrii-text-primary hover:bg-terrii-green/80",
    outline: "border border-gray-300 text-terrii-text-secondary hover:bg-gray-50",
    secondary: "bg-terrii-blue text-terrii-text-primary hover:bg-terrii-blue/80",
    destructive: "bg-terrii-error text-white hover:bg-terrii-error/80",
  };
  
  const styles = [baseStyles, variantStyles[variant], className].join(' ');
  
  return (
    <span 
      className={styles}
      onClick={onClick}
    >
      {children}
    </span>
  );
}