'use client'

import React from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'

export function ParentWelcome() {
  const { navigateToScreen } = useApp()

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="lighttroupekids"
        subtitle="Screen time that brings families closer"
      />

      <div className="flex-1 max-w-2xl mx-auto px-lg py-xl w-full">
        <div className="text-center space-y-xl">
          <div className="text-8xl">🌱</div>
          <div>
            <h2 className="font-serif text-4xl text-primary mb-md font-normal">
              Welcome, Parent
            </h2>
            <p className="text-lg text-gray-600 mb-lg leading-relaxed">
              We're reimagining screen time for families. No apps. No endless scrolling.
              Just meaningful moments together.
            </p>
          </div>

          <div className="space-y-md max-w-md mx-auto">
            <Button
              variant="primary"
              size="lg"
              block
              onClick={() => navigateToScreen('parent-setup')}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              block
              onClick={() => navigateToScreen('parent-help')}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="mt-2xl pt-xl border-t border-border text-center text-sm text-gray-500">
          <p>This is a working prototype. No data is saved.</p>
        </div>
      </div>
    </div>
  )
}
