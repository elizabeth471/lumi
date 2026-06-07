'use client'

import React, { useState } from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'
import { Card } from '../Card'

export function ParentSchedule() {
  const { navigateToScreen } = useApp()
  const [days, setDays] = useState({
    Mon: true,
    Tue: true,
    Wed: true,
    Thu: true,
    Fri: true,
    Sat: false,
    Sun: false,
  })

  const toggleDay = (day: keyof typeof days) => {
    setDays(prev => ({ ...prev, [day]: !prev[day] }))
  }

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="Schedule Activity"
        subtitle="Forest Secrets → Sarah"
      />

      <div className="flex-1 max-w-2xl mx-auto px-lg py-xl w-full space-y-lg">
        {/* Schedule Section */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg">When Should This Be Available?</h3>

          <div className="space-y-lg">
            <div>
              <label className="block mb-sm font-semibold text-sm">Start Date</label>
              <input type="date" className="w-full px-md py-md border-2 border-border rounded-lg" />
            </div>

            <div>
              <label className="block mb-sm font-semibold text-sm">End Date (optional)</label>
              <input type="date" className="w-full px-md py-md border-2 border-border rounded-lg" />
            </div>

            <div>
              <label className="block mb-sm font-semibold text-sm">Available Days</label>
              <div className="grid grid-cols-2 gap-md">
                {Object.entries(days).map(([day, checked]) => (
                  <label key={day} className="flex items-center gap-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleDay(day as keyof typeof days)}
                      className="w-sm h-sm cursor-pointer"
                    />
                    <span className="text-sm font-medium">{day}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Preferences */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg">Schedule Preferences</h3>

          <div className="space-y-md mb-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Send reminder before activity</span>
              <button className="w-12 h-7 bg-success rounded-full">
                <div className="w-6 h-6 bg-white rounded-full translate-x-5" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Require parental approval to start</span>
              <button className="w-12 h-7 bg-border rounded-full">
                <div className="w-6 h-6 bg-white rounded-full translate-x-0" />
              </button>
            </div>
          </div>

          <div>
            <label className="block mb-sm font-semibold text-sm">Special Instructions</label>
            <textarea
              placeholder="e.g., Only after homework is done"
              className="w-full px-md py-md border-2 border-border rounded-lg resize-none"
              rows={3}
            />
          </div>
        </Card>

        <Button
          variant="primary"
          size="lg"
          block
          onClick={() => navigateToScreen('parent-dashboard')}
        >
          Schedule Activity
        </Button>
      </div>
    </div>
  )
}
