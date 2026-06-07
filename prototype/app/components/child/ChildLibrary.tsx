'use client'

import React from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'
import { Card } from '../Card'

const CHILD_ACTIVITIES = [
  { id: '1', icon: '🎬', name: 'Forest Secrets', category: 'Video' },
  { id: '2', icon: '🌊', name: 'Ocean Life', category: 'Video' },
  { id: '3', icon: '🧩', name: 'Pattern Match', category: 'Game' },
  { id: '4', icon: '🌻', name: 'Plant Growth', category: 'Learning' },
]

export function ChildLibrary() {
  const { navigateToScreen, selectedChild } = useApp()

  if (!selectedChild) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="lighttroupekids"
        subtitle="Your activities await"
      />

      <div className="flex-1 max-w-md mx-auto px-lg py-xl w-full">
        <div className="space-y-lg">
          {/* Greeting */}
          <div className="text-center">
            <h2 className="font-serif text-3xl text-primary mb-md font-normal">
              Hello, {selectedChild.name}! 👋
            </h2>
            <p className="text-gray-600 text-sm mb-lg">
              Pick something fun to explore
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-2 gap-md">
            {CHILD_ACTIVITIES.map(activity => (
              <Card
                key={activity.id}
                interactive
                onClick={() => {
                  if (activity.category === 'Video') {
                    navigateToScreen('child-video-intro')
                  } else if (activity.category === 'Game') {
                    navigateToScreen('child-game-intro')
                  } else {
                    navigateToScreen('child-learning-intro')
                  }
                }}
              >
                <div className="text-4xl mb-md text-center">{activity.icon}</div>
                <p className="text-xs font-semibold text-center text-dark-text">{activity.name}</p>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-md mt-xl pt-lg border-t border-border text-center text-xs text-gray-500">
            <p>Home • Activities • Learning • Help</p>
          </div>

          <Button
            variant="outline"
            block
            onClick={() => {
              import('@/app/context/AppContext').then(({ useApp }) => {
                const { setUserRole } = useApp()
                setUserRole('none')
              })
              navigateToScreen('welcome')
            }}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  )
}
