import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'default',
  size = 'md',
  isLoading = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors";
  
  // Size styles
  const sizeStyles = {
    sm: "text-xs px-2.5 py-1",
    md: "text-sm px-3.5 py-2",
    lg: "text-base px-5 py-2.5"
  };
  
  // Variant styles
  const variantStyles = {
    default: "bg-terrii-blue text-terrii-text-primary hover:bg-terrii-blue-dark",
    primary: "bg-terrii-green-dark text-terrii-text-primary hover:bg-terrii-green",
    secondary: "bg-terrii-green text-terrii-text-primary hover:bg-terrii-green-dark",
    outline: "bg-white text-terrii-text-primary hover:bg-terrii-blue/10",
    ghost: "bg-transparent hover:bg-terrii-blue/10 text-terrii-text-primary",
    text: "bg-transparent hover:bg-transparent text-terrii-text-secondary hover:text-terrii-text-primary underline"
  };
  
  const styles = [
    baseStyles, 
    sizeStyles[size],
    variantStyles[variant],
    className
  ].join(' ');
  
  return (
    <button
      className={styles}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}