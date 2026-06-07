'use client'

import React, { useState } from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'

export function ChildVideoPlay() {
  const { navigateToScreen } = useApp()
  const [playing, setPlaying] = useState(true)

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="lighttroupekids"
        subtitle="Watch & Learn"
      />

      <div className="flex-1 flex items-center justify-center px-lg w-full">
        <div className="max-w-md w-full">
          <div className="space-y-lg">
            {/* Video Player */}
            <div className="w-full aspect-video bg-black rounded-lg flex items-center justify-center text-white text-5xl">
              🎬
            </div>

            {/* Progress */}
            <div>
              <div className="w-full h-2 bg-border rounded-full overflow-hidden mb-sm">
                <div className="h-full bg-success" style={{ width: '45%' }}></div>
              </div>
              <p className="text-xs text-gray-500 text-center">3:35 / 8:00</p>
            </div>

            {/* Controls */}
            <div className="flex justify-center">
              <button
                className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl hover:bg-opacity-90 transition"
                onClick={() => setPlaying(!playing)}
              >
                {playing ? '⏸' : '▶'}
              </button>
            </div>

            <p className="text-sm text-gray-600 text-center">
              💡 You're learning about forest ecosystems!
            </p>

            <Button
              variant="primary"
              block
              onClick={() => navigateToScreen('child-reflection')}
            >
              Video finished? Tell us what you think!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
