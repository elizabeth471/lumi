'use client'

import React, { useState } from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'
import { Card } from '../Card'

const ACTIVITIES = [
  { id: '1', icon: '🎬', name: 'Forest Secrets', type: 'Video', duration: '8 min', age: '6+' },
  { id: '2', icon: '🌊', name: 'Ocean Life', type: 'Video', duration: '12 min', age: '6+' },
  { id: '3', icon: '🧩', name: 'Pattern Match', type: 'Game', duration: '5 min', age: '6+' },
  { id: '4', icon: '🌻', name: 'Plant Growth', type: 'Learning', duration: '6 min', age: '6+' },
  { id: '5', icon: '🎨', name: 'Color Lab', type: 'Game', duration: '10 min', age: '8+' },
  { id: '6', icon: '🐝', name: 'Pollination', type: 'Video', duration: '7 min', age: '6+' },
  { id: '7', icon: '🌙', name: 'Night Sky', type: 'Learning', duration: '8 min', age: '8+' },
  { id: '8', icon: '🌿', name: 'Seed Scatter', type: 'Game', duration: '4 min', age: '6+' },
]

export function ParentLibrary() {
  const { navigateToScreen } = useApp()
  const [filter, setFilter] = useState('all')

  const filteredActivities = filter === 'all'
    ? ACTIVITIES
    : ACTIVITIES.filter(a => a.type.toLowerCase() === filter)

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="Activity Library"
        subtitle="Curated for growth & engagement"
      />

      <div className="flex-1 max-w-4xl mx-auto px-lg py-xl w-full">
        {/* Filters */}
        <div className="flex flex-wrap gap-sm mb-xl">
          {['all', 'videos', 'games', 'learning'].map(f => (
            <Button
              key={f}
              variant={filter === f ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
          {filteredActivities.map(activity => (
            <Card
              key={activity.id}
              interactive
              onClick={() => navigateToScreen('parent-activity-detail')}
            >
              <div className="text-5xl mb-md text-center bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                {activity.icon}
              </div>
              <h4 className="font-semibold text-center mb-sm text-dark-text">{activity.name}</h4>
              <p className="text-xs text-gray-500 text-center">
                {activity.type} • {activity.duration}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
