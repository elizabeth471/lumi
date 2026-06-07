'use client'

import React from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from './Header'
import { Button } from './Button'

export function RoleSelector() {
  const { setUserRole, navigateToScreen } = useApp()

  const handleParentRole = () => {
    setUserRole('parent')
    navigateToScreen('parent-welcome')
  }

  const handleChildRole = () => {
    setUserRole('child')
    navigateToScreen('child-login')
  }

  return (
    <div className="min-h-screen bg-light-bg">
      <Header title="lighttroupekids" subtitle="Hi there! 👋" />

      <div className="max-w-2xl mx-auto px-lg py-xl">
        <div className="text-center mb-xl">
          <div className="text-6xl mb-lg">🌱</div>
          <h2 className="font-serif text-3xl text-primary mb-md font-normal">Who are you?</h2>
          <p className="text-gray-600 mb-xl">Choose your experience</p>
        </div>

        <div className="space-y-lg max-w-md mx-auto">
          <Button
            variant="primary"
            size="lg"
            block
            onClick={handleParentRole}
          >
            I&apos;m a Parent
          </Button>
          <Button
            variant="secondary"
            size="lg"
            block
            onClick={handleChildRole}
          >
            I&apos;m a Child
          </Button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-xl">
          This is a prototype. All data is local.
        </p>
      </div>
    </div>
  )
}
