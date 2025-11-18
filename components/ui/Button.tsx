import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Button Component — Haeka Interactive
 * Premium button with multiple variants and sizes
 * Supports animations, loading states, and full accessibility
 */

const buttonVariants = cva(
  // Base styles
  'btn-base inline-flex items-center justify-center gap-2 font-display font-bold transition-all duration-fast focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  {
    variants: {
      variant: {
        // Primary: Solar Gold background
        primary: 'bg-gold text-obsidian hover:bg-gold/90 hover:shadow-glow-gold focus-visible:outline-gold active:scale-95',

        // Secondary: Transparent with gold border
        secondary: 'bg-transparent border-2 border-gold text-gold hover:bg-gold/10 hover:shadow-glow-gold focus-visible:outline-gold active:scale-95',

        // Tertiary: Text link style
        tertiary: 'bg-transparent text-blue-electric hover:text-blue-electric/80 hover:underline focus-visible:outline-blue-electric px-0',

        // Ghost: Minimal hover effect
        ghost: 'bg-transparent hover:bg-indigo/50 text-gray-100 focus-visible:outline-gray-300',

        // Danger: Crimson for destructive actions
        danger: 'bg-crimson text-white hover:bg-crimson/90 hover:shadow-glow-crimson focus-visible:outline-crimson active:scale-95',

        // Success: Green for confirmations
        success: 'bg-success text-white hover:bg-success/90 focus-visible:outline-success active:scale-95',
      },
      size: {
        sm: 'text-sm px-4 py-2 rounded-lg',
        md: 'text-base px-6 py-3 rounded-xl',
        lg: 'text-lg px-8 py-4 rounded-xl',
        xl: 'text-xl px-10 py-5 rounded-2xl',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      fullWidth,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${buttonVariants({ variant, size, fullWidth })} ${className}`}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {!isLoading && leftIcon && <span>{leftIcon}</span>}

        <span>{children}</span>

        {!isLoading && rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

// CVA helper (install with: npm install class-variance-authority)
// If not installed, use simplified version below:

/*
// Simplified Button without CVA dependency:
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-gold text-obsidian hover:bg-gold/90 hover:shadow-glow-gold',
    secondary: 'bg-transparent border-2 border-gold text-gold hover:bg-gold/10',
    tertiary: 'bg-transparent text-blue-electric hover:underline',
    ghost: 'bg-transparent hover:bg-indigo/50 text-gray-100',
    danger: 'bg-crimson text-white hover:bg-crimson/90',
    success: 'bg-success text-white hover:bg-success/90',
  };

  const sizeStyles = {
    sm: 'text-sm px-4 py-2 rounded-lg',
    md: 'text-base px-6 py-3 rounded-xl',
    lg: 'text-lg px-8 py-4 rounded-xl',
    xl: 'text-xl px-10 py-5 rounded-2xl',
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`btn-base ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {isLoading && <span className="loading-spinner" />}
      {!isLoading && leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}
*/
