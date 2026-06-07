'use client'

import React, { useState } from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'
import { Card } from '../Card'

export function ChildReflection() {
  const { navigateToScreen } = useApp()
  const [selected, setSelected] = useState<string | null>(null)

  const reflections = [
    { id: 'loved', emoji: '😍', text: 'I loved it!' },
    { id: 'good', emoji: '👍', text: 'It was good' },
    { id: 'okay', emoji: '🤔', text: 'It was okay' },
  ]

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="lighttroupekids"
        subtitle="You Did It! 🎉"
      />

      <div className="flex-1 flex items-center justify-center px-lg w-full">
        <div className="max-w-md w-full">
          <div className="space-y-lg text-center">
            <div className="text-6xl">✨</div>

            <div>
              <h2 className="font-serif text-2xl text-primary mb-md font-normal">
                Great job watching Forest Secrets!
              </h2>
              <p className="text-sm text-gray-600">What did you think?</p>
            </div>

            <div className="space-y-sm">
              {reflections.map(reflection => (
                <Card
                  key={reflection.id}
                  interactive
                  onClick={() => setSelected(reflection.id)}
                  className={`cursor-pointer transition ${
                    selected === reflection.id
                      ? 'border-2 border-primary bg-opacity-100'
                      : ''
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-sm">{reflection.emoji}</div>
                    <p className="font-semibold text-dark-text">{reflection.text}</p>
                  </div>
                </Card>
              ))}
            </div>

            <Button
              variant="primary"
              size="lg"
              block
              onClick={() => navigateToScreen('child-library')}
              disabled={!selected}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
