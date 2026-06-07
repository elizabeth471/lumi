import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  interactive?: boolean
}

export function Card({ children, className = '', onClick, interactive = false }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl p-lg border border-border shadow-sm
        ${interactive ? 'cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
