'use client'

import React, { useState } from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'

const EMOJIS = ['🌳', '🌳', '🌻', '🌻', '🌿', '🌿', '🌱', '🌱']

export function ChildGamePlay() {
  const { navigateToScreen } = useApp()
  const [matched, setMatched] = useState([0, 1, 7])
  const [totalMatches] = useState(8)

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="lighttroupekids"
        subtitle="Playing Pattern Match"
      />

      <div className="flex-1 flex items-center justify-center px-lg w-full">
        <div className="max-w-md w-full">
          <div className="space-y-lg">
            {/* Score */}
            <p className="text-center text-sm text-gray-600">
              Matches found: <strong>{matched.length} of {totalMatches}</strong>
            </p>

            {/* Game Grid */}
            <div className="grid grid-cols-3 gap-md">
              {EMOJIS.map((emoji, idx) => (
                <button
                  key={idx}
                  className={`
                    aspect-square text-3xl font-bold rounded-lg transition
                    ${matched.includes(idx)
                      ? 'bg-success opacity-50 text-white'
                      : 'bg-white border-2 border-primary text-2xl hover:border-success'
                    }
                  `}
                  onClick={() => {
                    if (!matched.includes(idx) && matched.length < totalMatches) {
                      setMatched([...matched, idx])
                    }
                  }}
                  disabled={matched.includes(idx)}
                >
                  {matched.includes(idx) ? emoji : '❓'}
                </button>
              ))}
            </div>

            <p className="text-center text-xs text-gray-500">
              Tap tiles to flip them
            </p>

            {matched.length === totalMatches && (
              <Button
                variant="primary"
                block
                onClick={() => navigateToScreen('child-celebration')}
              >
                See Results
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
