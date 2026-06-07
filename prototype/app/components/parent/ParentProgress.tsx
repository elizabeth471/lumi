'use client'

import React from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Card } from '../Card'

export function ParentProgress() {
  const { selectedChild } = useApp()

  if (!selectedChild) {
    return <div>No child selected</div>
  }

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title={`${selectedChild.name}'s Progress`}
        subtitle={`Age ${selectedChild.age} • Last active 2 hours ago`}
      />

      <div className="flex-1 max-w-4xl mx-auto px-lg py-xl w-full space-y-lg">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <Card>
            <div className="text-xs uppercase font-semibold text-gray-600 mb-sm">This Week</div>
            <div className="text-4xl font-bold text-primary mb-sm">1h 30m</div>
            <div className="text-sm text-gray-600">Total time engaged</div>
          </Card>

          <Card>
            <div className="text-xs uppercase font-semibold text-gray-600 mb-sm">Activities Completed</div>
            <div className="text-4xl font-bold text-primary mb-sm">4</div>
            <div className="text-sm text-gray-600">This week</div>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg">Recent Activities</h3>
          <div className="space-y-md">
            {[
              { name: '🎬 Forest Secrets', status: 'Completed' },
              { name: '🧩 Pattern Match', status: '85% Done' },
              { name: '🌻 Plant Growth', status: 'Completed' },
              { name: '🌊 Ocean Life', status: 'Completed' },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center pb-md border-b border-border last:border-0 last:pb-0">
                <span className="font-medium text-dark-text">{item.name}</span>
                <span className="text-sm font-bold text-success">{item.status}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Learning Insights */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg">Learning Insights</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {selectedChild.name} is showing strong engagement with science and nature content. They asked thoughtful questions during the forest video reflection. Consider assigning more exploration-focused activities.
          </p>
        </Card>

        {/* Recent Reflections */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg">Recent Reflections Shared</h3>
          <div className="space-y-md">
            <Card className="border-2 border-accent">
              <p className="text-xs text-gray-500 mb-sm">After Forest Secrets</p>
              <p className="italic text-dark-text">"I liked learning about how the forest changes. I want to know more about insects."</p>
            </Card>
            <Card className="border-2 border-accent">
              <p className="text-xs text-gray-500 mb-sm">After Plant Growth</p>
              <p className="italic text-dark-text">"It was fun to see how plants drink water. Can we grow something at home?"</p>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  )
}
