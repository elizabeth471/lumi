'use client'

import React, { useState } from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'
import { Card } from '../Card'

export function ParentControls() {
  const { navigateToScreen, parentDailyLimit, setParentDailyLimit, parentActiveHours, setParentActiveHours } = useApp()
  const [dailyLimit, setDailyLimit] = useState(parentDailyLimit || 60)
  const [startTime, setStartTime] = useState(parentActiveHours?.start || '08:00')
  const [endTime, setEndTime] = useState(parentActiveHours?.end || '20:00')
  const [toggles, setToggles] = useState({
    ageAppropriate: true,
    learningOnly: false,
    requireReview: true,
    weeklyEmails: true,
    limitNotifications: true,
    requireApproval: false,
  })

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSave = () => {
    setParentDailyLimit(dailyLimit)
    setParentActiveHours({ start: startTime, end: endTime })
    navigateToScreen('parent-dashboard')
  }

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="Parental Controls"
        subtitle="Your safety settings"
      />

      <div className="flex-1 max-w-2xl mx-auto px-lg py-xl w-full space-y-lg">
        {/* Time Limits */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg flex items-center gap-md">
            <span>⏰</span> Time Limits
          </h3>

          <div className="space-y-lg">
            <div>
              <label className="block mb-sm font-semibold text-sm">Daily Limit</label>
              <select
                value={dailyLimit}
                onChange={(e) => setDailyLimit(parseInt(e.target.value))}
                className="w-full px-md py-md border-2 border-border rounded-lg"
              >
                <option value={15}>15 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>1 hour</option>
                <option value={90}>90 minutes</option>
              </select>
            </div>

            <div>
              <label className="block mb-sm font-semibold text-sm">Allowed Hours</label>
              <p className="text-xs text-gray-600 mb-md">Activities available between:</p>
              <div className="grid grid-cols-2 gap-md">
                <div>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full px-md py-md border-2 border-border rounded-lg"
                  />
                  <p className="text-xs text-gray-600 mt-sm">Start time</p>
                </div>
                <div>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full px-md py-md border-2 border-border rounded-lg"
                  />
                  <p className="text-xs text-gray-600 mt-sm">End time</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Content Filtering */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg flex items-center gap-md">
            <span>🎯</span> Content Filtering
          </h3>

          <div className="space-y-md">
            {[
              { key: 'ageAppropriate', label: 'Restrict to age-appropriate content' },
              { key: 'learningOnly', label: 'Include learning activities only' },
              { key: 'requireReview', label: 'Require parental review of reflections' },
            ].map(({ key, label }) => (
              <div
                key={key}
                className="flex items-center justify-between"
              >
                <span className="text-sm font-medium">{label}</span>
                <button
                  className={`w-12 h-7 rounded-full transition-colors ${
                    toggles[key as keyof typeof toggles]
                      ? 'bg-success'
                      : 'bg-border'
                  }`}
                  onClick={() => handleToggle(key as keyof typeof toggles)}
                  role="switch"
                  aria-checked={toggles[key as keyof typeof toggles]}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full transition-transform ${
                      toggles[key as keyof typeof toggles]
                        ? 'translate-x-5'
                        : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Notifications */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg flex items-center gap-md">
            <span>📢</span> Notifications
          </h3>

          <div className="space-y-md">
            {[
              { key: 'weeklyEmails', label: 'Email me weekly summaries' },
              { key: 'limitNotifications', label: 'Notify when daily limit reached' },
              { key: 'requireApproval', label: 'Ask for permission before new activity' },
            ].map(({ key, label }) => (
              <div
                key={key}
                className="flex items-center justify-between"
              >
                <span className="text-sm font-medium">{label}</span>
                <button
                  className={`w-12 h-7 rounded-full transition-colors ${
                    toggles[key as keyof typeof toggles]
                      ? 'bg-success'
                      : 'bg-border'
                  }`}
                  onClick={() => handleToggle(key as keyof typeof toggles)}
                  role="switch"
                  aria-checked={toggles[key as keyof typeof toggles]}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full transition-transform ${
                      toggles[key as keyof typeof toggles]
                        ? 'translate-x-5'
                        : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </Card>

        <Button
          variant="primary"
          size="lg"
          block
          onClick={handleSave}
        >
          Save Settings
        </Button>
      </div>
    </div>
  )
}
