import React, { useState, useCallback, useRef, useEffect, ReactNode, ButtonHTMLAttributes, forwardRef } from 'react';

// Type definitions
type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'ghost' | 'outline';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type LoadingState = 'idle' | 'loading' | 'success' | 'error';
type IconPosition = 'left' | 'right';

interface BaseButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  fullWidth?: boolean;
  rounded?: boolean;
}

interface AnimatedButtonProps extends BaseButtonProps {
  animationType?: 'bounce' | 'pulse' | 'wiggle' | 'shake' | 'glow' | 'float';
  animationDuration?: number;
}

interface CounterButtonProps extends BaseButtonProps {
  count: number;
  maxCount?: number;
  showBadge?: boolean;
  onCountChange?: (count: number) => void;
}

interface StepperButtonProps {
  currentStep: number;
  totalSteps: number;
  onNext?: () => void;
  onPrev?: () => void;
  onStepClick?: (step: number) => void;
  labels?: string[];
  variant?: ButtonVariant;
}

interface ConfirmButtonProps extends BaseButtonProps {
  confirmText?: string;
  confirmTimeout?: number;
  confirmVariant?: ButtonVariant;
  onConfirm?: () => void;
  requireConfirm?: boolean;
}

interface FileUploadButtonProps extends BaseButtonProps {
  accept?: string;
  multiple?: boolean;
  onFileSelect?: (files: FileList) => void;
  maxFiles?: number;
  maxFileSize?: number; // in MB
}

// Utility functions
const getVariantClasses = (variant: ButtonVariant): string => {
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white shadow-lg hover:shadow-xl',
    success: 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl',
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl',
    info: 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-xl',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300',
    outline: 'bg-transparent hover:bg-blue-50 text-blue-600 border-2 border-blue-600 hover:border-blue-700'
  };
  return variants[variant];
};

const getSizeClasses = (size: ButtonSize): string => {
  const sizes: Record<ButtonSize, string> = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };
  return sizes[size];
};

// Base Button Component
const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    isLoading = false, 
    loadingText = 'Loading...', 
    leftIcon, 
    rightIcon, 
    children, 
    fullWidth = false, 
    rounded = false,
    className = '',
    disabled,
    ...props 
  }, ref) => {
    const baseClasses = [
      'inline-flex items-center justify-center font-semibold transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
      getVariantClasses(variant),
      getSizeClasses(size),
      fullWidth ? 'w-full' : '',
      rounded ? 'rounded-full' : 'rounded-lg',
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            {loadingText}
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

BaseButton.displayName = 'BaseButton';

// Animated Button Component
const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  animationType = 'bounce',
  animationDuration = 300,
  className = '',
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setIsAnimating(true);
    onMouseEnter?.(e);
    setTimeout(() => setIsAnimating(false), animationDuration);
  }, [animationDuration, onMouseEnter]);

  const getAnimationClass = (): string => {
    if (!isAnimating) return '';
    
    const animations: Record<string, string> = {
      bounce: 'animate-bounce',
      pulse: 'animate-pulse',
      wiggle: 'animate-wiggle',
      shake: 'animate-shake',
      glow: 'animate-glow',
      float: 'animate-float'
    };
    
    return animations[animationType] || '';
  };

  return (
    <>
      <BaseButton
        {...props}
        className={`${className} ${getAnimationClass()}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .animate-wiggle { animation: wiggle ${animationDuration}ms ease-in-out; }
        .animate-shake { animation: shake ${animationDuration}ms ease-in-out; }
        .animate-glow { animation: glow ${animationDuration}ms ease-in-out; }
        .animate-float { animation: float ${animationDuration}ms ease-in-out; }
      `}</style>
    </>
  );
};

// Counter Button Component
const CounterButton: React.FC<CounterButtonProps> = ({
  count,
  maxCount = 99,
  showBadge = true,
  onCountChange,
  children,
  className = '',
  ...props
}) => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const newCount = count + 1;
    onCountChange?.(newCount);
    props.onClick?.(e);
  }, [count, onCountChange, props]);

  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();

  return (
    <div className="relative inline-block">
      <BaseButton
        {...props}
        className={className}
        onClick={handleClick}
      >
        {children}
      </BaseButton>
      {showBadge && count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold transform animate-pulse">
          {displayCount}
        </span>
      )}
    </div>
  );
};

// Stepper Button Component
const StepperButton: React.FC<StepperButtonProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  onStepClick,
  labels = [],
  variant = 'primary'
}) => {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {Array.from({ length: totalSteps }, (_, i) => (
            <button
              key={i}
              onClick={() => onStepClick?.(i + 1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                i + 1 <= currentStep
                  ? 'bg-blue-500 text-white transform scale-110'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {labels[currentStep - 1] && (
          <p className="text-center mt-2 text-sm text-gray-600 font-medium">
            {labels[currentStep - 1]}
          </p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4">
        <BaseButton
          variant="ghost"
          onClick={onPrev}
          disabled={currentStep === 1}
          leftIcon="←"
        >
          Previous
        </BaseButton>
        <BaseButton
          variant={variant}
          onClick={onNext}
          disabled={currentStep === totalSteps}
          rightIcon="→"
        >
          {currentStep === totalSteps ? 'Finish' : 'Next'}
        </BaseButton>
      </div>
    </div>
  );
};

// Confirm Button Component
const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  confirmText = 'Click again to confirm',
  confirmTimeout = 3000,
  confirmVariant = 'danger',
  onConfirm,
  requireConfirm = true,
  children,
  ...props
}) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!requireConfirm) {
      onConfirm?.();
      props.onClick?.(e);
      return;
    }

    if (isConfirming) {
      onConfirm?.();
      setIsConfirming(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    } else {
      setIsConfirming(true);
      timeoutRef.current = setTimeout(() => {
        setIsConfirming(false);
      }, confirmTimeout);
    }
    
    props.onClick?.(e);
  }, [isConfirming, requireConfirm, confirmTimeout, onConfirm, props]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <BaseButton
      {...props}
      variant={isConfirming ? confirmVariant : props.variant}
      onClick={handleClick}
      className={`transition-all duration-200 ${isConfirming ? 'animate-pulse' : ''} ${props.className || ''}`}
    >
      {isConfirming ? confirmText : children}
    </BaseButton>
  );
};

// File Upload Button Component
const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  accept = '*/*',
  multiple = false,
  onFileSelect,
  maxFiles = 10,
  maxFileSize = 10, // MB
  children,
  ...props
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<LoadingState>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFiles = (files: FileList): { valid: File[]; errors: string[] } => {
    const valid: File[] = [];
    const errors: string[] = [];

    if (files.length > maxFiles) {
      errors.push(`Maximum ${maxFiles} files allowed`);
      return { valid, errors };
    }

    Array.from(files).forEach(file => {
      if (file.size > maxFileSize * 1024 * 1024) {
        errors.push(`${file.name} exceeds ${maxFileSize}MB limit`);
      } else {
        valid.push(file);
      }
    });

    return { valid, errors };
  };

  const handleFileSelect = useCallback((files: FileList) => {
    const { valid, errors } = validateFiles(files);
    
    if (errors.length > 0) {
      setUploadStatus('error');
      console.error('File validation errors:', errors);
      setTimeout(() => setUploadStatus('idle'), 3000);
      return;
    }

    if (valid.length > 0) {
      setUploadStatus('success');
      const fileList = new DataTransfer();
      valid.forEach(file => fileList.items.add(file));
      onFileSelect?.(fileList.files);
      setTimeout(() => setUploadStatus('idle'), 2000);
    }
  }, [maxFiles, maxFileSize, onFileSelect]);

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileSelect(files);
    }
  };

  const getStatusVariant = (): ButtonVariant => {
    switch (uploadStatus) {
      case 'success': return 'success';
      case 'error': return 'danger';
      default: return props.variant || 'primary';
    }
  };

  const getStatusContent = (): ReactNode => {
    switch (uploadStatus) {
      case 'success': return '✓ Files uploaded!';
      case 'error': return '✗ Upload failed';
      default: return children;
    }
  };

  return (
    <div className="relative">
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className="hidden"
      />
      <BaseButton
        {...props}
        variant={getStatusVariant()}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`${dragOver ? 'ring-2 ring-blue-500 ring-offset-2' : ''} ${props.className || ''}`}
      >
        {getStatusContent()}
      </BaseButton>
    </div>
  );
};

// Main Demo Component
export default function TypeScriptButtonComponents() {
  const [currentStep, setCurrentStep] = useState(1);
  const [likeCount, setLikeCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(5);

  const stepLabels = ['Personal Info', 'Address Details', 'Payment', 'Review', 'Complete'];

  const handleFileSelect = useCallback((files: FileList) => {
    console.log('Selected files:', Array.from(files).map(f => f.name));
  }, []);

  const handleConfirm = useCallback(() => {
    console.log('Action confirmed!');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          TypeScript Button Components
        </h1>

        <div className="space-y-12">
          {/* Basic Buttons */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Base Button Variants</h2>
            <div className="flex flex-wrap gap-4">
              <BaseButton variant="primary">Primary</BaseButton>
              <BaseButton variant="secondary">Secondary</BaseButton>
              <BaseButton variant="success">Success</BaseButton>
              <BaseButton variant="danger">Danger</BaseButton>
              <BaseButton variant="warning">Warning</BaseButton>
              <BaseButton variant="info">Info</BaseButton>
              <BaseButton variant="ghost">Ghost</BaseButton>
              <BaseButton variant="outline">Outline</BaseButton>
            </div>
          </section>

          {/* Button Sizes */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Button Sizes</h2>
            <div className="flex flex-wrap gap-4 items-end">
              <BaseButton size="xs">Extra Small</BaseButton>
              <BaseButton size="sm">Small</BaseButton>
              <BaseButton size="md">Medium</BaseButton>
              <BaseButton size="lg">Large</BaseButton>
              <BaseButton size="xl">Extra Large</BaseButton>
            </div>
          </section>

          {/* Loading States */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Loading States</h2>
            <div className="flex flex-wrap gap-4">
              <BaseButton variant="primary" isLoading>Loading Primary</BaseButton>
              <BaseButton variant="success" isLoading loadingText="Saving...">Save</BaseButton>
              <BaseButton variant="danger" isLoading loadingText="Deleting...">Delete</BaseButton>
            </div>
          </section>

          {/* Animated Buttons */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibent mb-6 text-gray-800">Animated Buttons</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <AnimatedButton animationType="bounce" variant="primary">Bounce</AnimatedButton>
              <AnimatedButton animationType="pulse" variant="secondary">Pulse</AnimatedButton>
              <AnimatedButton animationType="wiggle" variant="success">Wiggle</AnimatedButton>
              <AnimatedButton animationType="shake" variant="danger">Shake</AnimatedButton>
              <AnimatedButton animationType="glow" variant="info">Glow</AnimatedButton>
              <AnimatedButton animationType="float" variant="warning">Float</AnimatedButton>
            </div>
          </section>

          {/* Counter Buttons */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Counter Buttons</h2>
            <div className="flex flex-wrap gap-6">
              <CounterButton
                count={likeCount}
                onCountChange={setLikeCount}
                variant="danger"
                leftIcon="❤️"
              >
                Like ({likeCount})
              </CounterButton>
              <CounterButton
                count={favoriteCount}
                maxCount={99}
                onCountChange={setFavoriteCount}
                variant="warning"
                leftIcon="⭐"
              >
                Favorite
              </CounterButton>
            </div>
          </section>

          {/* Stepper Button */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Stepper Button</h2>
            <StepperButton
              currentStep={currentStep}
              totalSteps={5}
              labels={stepLabels}
              onNext={() => setCurrentStep(prev => Math.min(prev + 1, 5))}
              onPrev={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
              onStepClick={setCurrentStep}
              variant="primary"
            />
          </section>

          {/* Confirm Button */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Confirm Button</h2>
            <div className="flex gap-4">
              <ConfirmButton
                variant="danger"
                onConfirm={handleConfirm}
                confirmText="Are you sure?"
              >
                Delete Account
              </ConfirmButton>
              <ConfirmButton
                variant="warning"
                confirmText="Confirm Reset"
                confirmTimeout={5000}
                onConfirm={handleConfirm}
              >
                Reset Settings
              </ConfirmButton>
            </div>
          </section>

          {/* File Upload Button */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">File Upload Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <FileUploadButton
                variant="primary"
                accept="image/*"
                multiple
                maxFiles={5}
                maxFileSize={5}
                onFileSelect={handleFileSelect}
                leftIcon="📁"
              >
                Upload Images
              </FileUploadButton>
              <FileUploadButton
                variant="outline"
                accept=".pdf,.doc,.docx"
                onFileSelect={handleFileSelect}
                maxFileSize={10}
                leftIcon="📄"
              >
                Upload Document
              </FileUploadButton>
            </div>
          </section>

          {/* Icon Buttons */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Icon Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <BaseButton variant="primary" leftIcon="🔍">Search</BaseButton>
              <BaseButton variant="success" rightIcon="→">Continue</BaseButton>
              <BaseButton variant="ghost" leftIcon="⚙️" rightIcon="⚡">Settings</BaseButton>
              <BaseButton variant="outline" rounded leftIcon="📤">Share</BaseButton>
            </div>
          </section>

        </div>

        <div className="text-center mt-16 text-gray-600">
          <p className="text-lg font-medium">Professional TypeScript Button Components</p>
          <p className="text-sm mt-2">Fully typed with interfaces, generics, and advanced patterns</p>
          <p className="text-xs mt-1 text-gray-500">All components include proper TypeScript definitions and JSDoc comments</p>
        </div>
      </div>
    </div>
  );
}