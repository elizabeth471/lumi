'use client'

import React, { useState } from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'
import { Card } from '../Card'

export function ParentSetup() {
  const { navigateToScreen, setParentEmail, addChild } = useApp()
  const [email, setEmail] = useState('')
  const [childName, setChildName] = useState('')
  const [childAge, setChildAge] = useState('9')
  const [interests, setInterests] = useState<string[]>([])

  const interestOptions = ['Science', 'Art', 'Nature', 'Music', 'Sports', 'Reading']

  const toggleInterest = (interest: string) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  const handleCreateAccount = () => {
    if (email && childName && interests.length > 0) {
      setParentEmail(email)
      addChild({
        id: Math.random().toString(),
        name: childName,
        age: parseInt(childAge),
        interests,
      })
      navigateToScreen('parent-dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="Create Your Account"
        subtitle="Let's set up your family"
      />

      <div className="flex-1 max-w-2xl mx-auto px-lg py-xl w-full">
        <Card>
          <h2 className="text-2xl text-primary mb-lg font-semibold">Parent Information</h2>

          <div className="space-y-lg">
            <div>
              <label className="block mb-sm font-semibold text-sm">Your Email</label>
              <input
                type="email"
                placeholder="parent@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-md py-md border-2 border-border rounded-lg focus:border-primary focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-sm font-semibold text-sm">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-md py-md border-2 border-border rounded-lg focus:border-primary focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-sm font-semibold text-sm">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-md py-md border-2 border-border rounded-lg focus:border-primary focus:outline-none transition"
              />
            </div>
          </div>
        </Card>

        <Card className="mt-lg">
          <h2 className="text-2xl text-primary mb-lg font-semibold">Add Your First Child</h2>

          <div className="space-y-lg">
            <div>
              <label className="block mb-sm font-semibold text-sm">Child&apos;s Name</label>
              <input
                type="text"
                placeholder="e.g., Sarah"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                className="w-full px-md py-md border-2 border-border rounded-lg focus:border-primary focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-sm font-semibold text-sm">Age</label>
              <select
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                className="w-full px-md py-md border-2 border-border rounded-lg focus:border-primary focus:outline-none transition"
              >
                {[6, 7, 8, 9, 10, 11, 12].map(age => (
                  <option key={age} value={age}>{age}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-sm font-semibold text-sm">Interests (select at least 2)</label>
              <div className="grid grid-cols-2 gap-sm">
                {interestOptions.map(interest => (
                  <label key={interest} className="flex items-center gap-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={interests.includes(interest)}
                      onChange={() => toggleInterest(interest)}
                      className="w-sm h-sm cursor-pointer"
                    />
                    <span className="text-sm font-medium">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              block
              onClick={handleCreateAccount}
              disabled={!email || !childName || interests.length < 2}
            >
              Create Account
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
