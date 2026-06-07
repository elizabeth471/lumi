import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  block?: boolean
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-opacity-90 focus-visible:outline-primary disabled:opacity-50',
    secondary: 'bg-accent text-white hover:bg-opacity-90 focus-visible:outline-accent disabled:opacity-50',
    outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus-visible:outline-primary disabled:opacity-50',
  }

  const sizeClasses = {
    sm: 'px-md py-sm text-sm',
    md: 'px-lg py-md text-base',
    lg: 'px-xl py-lg text-lg min-h-[48px]',
  }

  const blockClass = block ? 'w-full' : 'inline-block'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${blockClass}
        ${className}
      `}
    >
      {children}
    </button>
  )
}
