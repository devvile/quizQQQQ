import React, { ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const AuthButton: React.FC<ButtonProps> = ({ 
  type = 'button',
  variant = 'primary',
  disabled = false,
  onClick,
  children,
  fullWidth = false,
  className = ''
}) => {
  const baseStyles = "flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50";
  
  const variantStyles = {
    primary: "border-transparent text-stone-100 bg-indigo-600 hover:bg-indigo-700",
    secondary: "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
  };

  const widthStyles = fullWidth ? "w-full" : "";
  
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default AuthButton;