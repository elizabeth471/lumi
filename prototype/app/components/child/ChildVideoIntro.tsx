'use client'

import React from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'
import { Card } from '../Card'

export function ChildVideoIntro() {
  const { navigateToScreen } = useApp()

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="lighttroupekids"
        subtitle="Get ready"
      />

      <div className="flex-1 flex items-center justify-center px-lg w-full">
        <div className="max-w-md w-full">
          <div className="text-center space-y-lg">
            <div className="text-6xl">🎬</div>

            <div>
              <h2 className="font-serif text-3xl text-primary mb-sm font-normal">
                Forest Secrets
              </h2>
              <p className="text-gray-600 text-sm mb-lg leading-relaxed">
                Explore the hidden life of forests
              </p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Watch beautiful videos of trees, animals, and plants. Then tell us what you learned!
            </p>

            <div className="bg-light-bg p-md rounded-lg mb-lg">
              <p className="text-sm font-semibold text-primary">
                ⏱️ About 8 minutes
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              block
              onClick={() => navigateToScreen('child-video-play')}
            >
              ▶ Start Watching
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
