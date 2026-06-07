'use client'

import React from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'
import { Card } from '../Card'

export function ParentDashboard() {
  const { navigateToScreen, children, selectChild } = useApp()

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="Dashboard"
        subtitle="This week's overview"
      />

      <div className="flex-1 max-w-4xl mx-auto px-lg py-xl w-full space-y-lg">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <Card>
            <div className="text-xs uppercase font-semibold text-gray-600 mb-sm tracking-wide">
              Time This Week
            </div>
            <div className="text-4xl font-bold text-primary mb-sm">2h 45m</div>
            <div className="text-sm text-gray-600 mb-md">vs 3h 20m last week ↓</div>
            <div className="w-full h-2 bg-border rounded-full overflow-hidden">
              <div className="h-full bg-success" style={{ width: '55%' }}></div>
            </div>
          </Card>

          <Card>
            <div className="text-xs uppercase font-semibold text-gray-600 mb-sm tracking-wide">
              Activities Completed
            </div>
            <div className="text-4xl font-bold text-primary mb-sm">7</div>
            <div className="text-sm text-gray-600 mb-md">Across {children.length} child{children.length !== 1 ? 'ren' : ''}</div>
            <div className="flex gap-sm flex-wrap">
              <span className="px-md py-sm bg-success text-white text-xs rounded-full font-semibold">3 Video</span>
              <span className="px-md py-sm bg-accent text-white text-xs rounded-full font-semibold">4 Game</span>
            </div>
          </Card>

          <Card>
            <div className="text-xs uppercase font-semibold text-gray-600 mb-sm tracking-wide">
              Family Engagement
            </div>
            <div className="text-4xl font-bold text-primary mb-sm">6/7</div>
            <div className="text-sm text-gray-600 mb-md">Days with reflection shared</div>
            <div className="w-full h-2 bg-border rounded-full overflow-hidden">
              <div className="h-full bg-success" style={{ width: '86%' }}></div>
            </div>
          </Card>
        </div>

        {/* Children Cards */}
        <Card>
          <h3 className="text-xl text-primary mb-lg font-semibold">Your Children</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {children.map(child => (
              <div
                key={child.id}
                className="border border-border rounded-xl p-lg cursor-pointer hover:shadow-lg transition"
                onClick={() => {
                  selectChild(child)
                  navigateToScreen('parent-progress')
                }}
              >
                <div className="text-4xl mb-sm">👧</div>
                <h4 className="text-lg text-primary font-semibold mb-sm">{child.name} ({child.age})</h4>
                <p className="text-sm text-gray-600 mb-md">Last active: 2 hours ago</p>
                <div className="w-full h-2 bg-border rounded-full overflow-hidden mb-sm">
                  <div className="h-full bg-success" style={{ width: '65%' }}></div>
                </div>
                <p className="text-xs text-gray-600">Weekly time: 1h 30m</p>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            block
            className="mt-lg"
            onClick={() => navigateToScreen('parent-setup')}
          >
            + Add Another Child
          </Button>
        </Card>

        {/* Quick Actions */}
        <Card>
          <h3 className="text-xl text-primary mb-lg font-semibold">Quick Actions</h3>
          <div className="space-y-md">
            <Button
              variant="secondary"
              size="lg"
              block
              onClick={() => navigateToScreen('parent-library')}
            >
              Browse Activities
            </Button>
            <Button
              variant="outline"
              size="lg"
              block
              onClick={() => navigateToScreen('parent-controls')}
            >
              Parental Controls
            </Button>
            <Button
              variant="outline"
              size="lg"
              block
              onClick={() => navigateToScreen('parent-settings')}
            >
              View Settings
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
