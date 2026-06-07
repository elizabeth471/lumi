'use client'

import React from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'
import { Card } from '../Card'

export function ParentSettings() {
  const { parentEmail, navigateToScreen, setUserRole } = useApp()

  const handleSignOut = () => {
    setUserRole('none')
    navigateToScreen('welcome')
  }

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="Settings"
        subtitle="Account & preferences"
      />

      <div className="flex-1 max-w-2xl mx-auto px-lg py-xl w-full space-y-lg">
        {/* Account */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg">Account</h3>
          <div className="space-y-md">
            <div
              className="flex justify-between items-center p-md bg-light-bg rounded-lg cursor-pointer hover:bg-opacity-50 transition"
              onClick={() => alert('Edit email')}
            >
              <div>
                <div className="font-semibold text-sm">Email Address</div>
                <p className="text-xs text-gray-600 mt-sm">{parentEmail || 'parent@example.com'}</p>
              </div>
              <span className="text-xl text-accent">›</span>
            </div>
            <div
              className="flex justify-between items-center p-md bg-light-bg rounded-lg cursor-pointer hover:bg-opacity-50 transition"
              onClick={() => alert('Change password')}
            >
              <div>
                <div className="font-semibold text-sm">Password</div>
                <p className="text-xs text-gray-600 mt-sm">Last changed 3 months ago</p>
              </div>
              <span className="text-xl text-accent">›</span>
            </div>
          </div>
        </Card>

        {/* Notifications */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg">Notifications</h3>
          <div className="space-y-md">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Weekly digest emails</span>
              <button
                className="w-12 h-7 bg-success rounded-full"
                role="switch"
                aria-checked="true"
              >
                <div className="w-6 h-6 bg-white rounded-full translate-x-5" />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Activity reminders</span>
              <button
                className="w-12 h-7 bg-success rounded-full"
                role="switch"
                aria-checked="true"
              >
                <div className="w-6 h-6 bg-white rounded-full translate-x-5" />
              </button>
            </div>
          </div>
        </Card>

        {/* Privacy */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg">Privacy</h3>
          <div className="space-y-md">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Share anonymized usage data</span>
              <button
                className="w-12 h-7 bg-success rounded-full"
                role="switch"
                aria-checked="true"
              >
                <div className="w-6 h-6 bg-white rounded-full translate-x-5" />
              </button>
            </div>
          </div>
        </Card>

        {/* About */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg">About</h3>
          <p className="text-xs text-gray-600 mb-lg">
            <strong>Version:</strong> 1.0.0-beta<br />
            <strong>Status:</strong> Prototype<br />
            <strong>Last Updated:</strong> June 2026
          </p>
          <div className="space-y-sm">
            <Button variant="outline" block size="sm" onClick={() => alert('Privacy Policy')}>
              Privacy Policy
            </Button>
            <Button variant="outline" block size="sm" onClick={() => alert('Terms of Service')}>
              Terms of Service
            </Button>
            <Button
              variant="outline"
              block
              size="sm"
              onClick={handleSignOut}
              className="text-gray-400 border-gray-300"
            >
              Sign Out
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
