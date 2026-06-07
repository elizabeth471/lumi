'use client'

import React from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'

export function ChildGameIntro() {
  const { navigateToScreen } = useApp()

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="lighttroupekids"
        subtitle="Let's Play"
      />

      <div className="flex-1 flex items-center justify-center px-lg w-full">
        <div className="max-w-md w-full">
          <div className="text-center space-y-lg">
            <div className="text-6xl">🧩</div>

            <div>
              <h2 className="font-serif text-3xl text-primary mb-sm font-normal">
                Pattern Match
              </h2>
              <p className="text-gray-600 text-sm mb-lg leading-relaxed">
                Find matching pairs
              </p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Flip tiles to find patterns. Quick thinking helps! No timer—go at your own pace.
            </p>

            <Button
              variant="primary"
              size="lg"
              block
              onClick={() => navigateToScreen('child-game-play')}
            >
              ▶ Play Game
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
