'use client'

import React from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'

export function ChildCelebration() {
  const { navigateToScreen } = useApp()

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="lighttroupekids"
        subtitle="You Won! 🏆"
      />

      <div className="flex-1 flex items-center justify-center px-lg w-full">
        <div className="max-w-md w-full text-center space-y-lg">
          <div className="text-7xl animate-bounce">🎉</div>

          <div>
            <h2 className="font-serif text-4xl text-primary mb-sm font-normal">
              Perfect Match!
            </h2>
            <p className="text-lg text-gray-600 mb-md">
              You found all the pairs!<br />
              <strong>Time: 4:23</strong>
            </p>
          </div>

          <div className="bg-light-bg p-lg rounded-lg">
            <p className="text-sm font-semibold text-success">
              ⭐ Great pattern recognition!
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            block
            onClick={() => navigateToScreen('child-library')}
          >
            Play Again or Explore More
          </Button>
        </div>
      </div>
    </div>
  )
}
