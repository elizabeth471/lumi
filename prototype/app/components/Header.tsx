import React from 'react'

interface HeaderProps {
  title: string
  subtitle?: string
  showIcon?: boolean
}

export function Header({ title, subtitle, showIcon = true }: HeaderProps) {
  return (
    <div className="bg-primary text-white py-xl px-lg border-b-4 border-accent text-center">
      <h1 className="font-serif text-3xl mb-sm font-normal">{title}</h1>
      {subtitle && (
        <p className="text-sm opacity-95 tracking-wide">{subtitle}</p>
      )}
    </div>
  )
}
