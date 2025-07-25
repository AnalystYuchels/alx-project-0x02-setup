'use client';

import React from 'react';
import { type ButtonProps } from '@/interfaces';

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-5 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  shape = 'rounded-md',
  children,
  className = '',
  ...rest
}) => {
  const baseStyle = 'bg-blue-600 text-white hover:bg-blue-700 transition duration-200';
  const combined = `${baseStyle} ${sizeClasses[size]} ${shape} ${className}`;

  return (
    <button className={combined} {...rest}>
      {children}
    </button>
  );
};

export default Button;
