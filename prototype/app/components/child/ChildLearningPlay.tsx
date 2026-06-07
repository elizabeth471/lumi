'use client'

import React, { useState } from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'
import { Card } from '../Card'

export function ChildLearningPlay() {
  const { navigateToScreen } = useApp()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="lighttroupekids"
        subtitle="Learning Activity"
      />

      <div className="flex-1 flex items-center justify-center px-lg w-full">
        <div className="max-w-md w-full">
          <div className="text-center mb-lg">
            <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
              Question 1 of 3
            </p>
          </div>

          <Card>
            <h3 className="text-lg font-semibold text-dark-text mb-lg text-center">
              🌱 What does a seed need to grow?
            </h3>

            <div className="space-y-sm">
              {[
                'Water & Sunlight',
                'Just Water',
                'Just Sunlight',
                'Soil & Music',
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`
                    w-full p-md rounded-lg font-semibold transition text-sm
                    ${selected === option
                      ? 'bg-success text-white border-2 border-success'
                      : 'bg-white border-2 border-border hover:border-primary'
                    }
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
          </Card>

          <Button
            variant="primary"
            size="lg"
            block
            className="mt-lg"
            onClick={() => navigateToScreen('child-library')}
            disabled={!selected}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
