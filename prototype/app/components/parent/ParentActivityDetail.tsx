'use client'

import React from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'
import { Card } from '../Card'

export function ParentActivityDetail() {
  const { navigateToScreen } = useApp()

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="Forest Secrets"
        subtitle="Nature • Video • 8 minutes"
      />

      <div className="flex-1 max-w-2xl mx-auto px-lg py-xl w-full space-y-lg">
        {/* Video Player Mockup */}
        <div className="w-full aspect-video bg-black rounded-lg flex items-center justify-center text-white text-4xl">
          🎬
        </div>

        {/* About */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-md">About This Activity</h3>
          <p className="text-sm text-gray-600 mb-lg leading-relaxed">
            A beautifully filmed exploration of forest ecosystems. Children discover the hidden relationships between plants, animals, and seasons while building scientific curiosity.
          </p>

          <div className="bg-light-bg p-md rounded-lg mb-lg">
            <p className="text-xs font-semibold text-primary mb-sm">Learning Goals</p>
            <ul className="text-sm text-gray-600 space-y-sm">
              <li>• Understand forest layers and biodiversity</li>
              <li>• Observe seasonal changes in nature</li>
              <li>• Build scientific thinking skills</li>
            </ul>
          </div>

          <p className="text-xs font-semibold text-primary mb-sm">Best For</p>
          <div className="flex flex-wrap gap-sm mb-lg">
            <span className="px-md py-sm bg-accent text-white text-xs rounded-full font-semibold">Ages 6+</span>
            <span className="px-md py-sm bg-accent text-white text-xs rounded-full font-semibold">Science</span>
            <span className="px-md py-sm bg-accent text-white text-xs rounded-full font-semibold">Nature</span>
          </div>

          <p className="text-xs font-semibold text-primary mb-sm">What You'll See</p>
          <p className="text-sm text-gray-600 mb-lg">
            Gorgeous cinematography of forests, animals, insects, and plants. No fast cuts. No scary moments. Narration is calm and clear.
          </p>

          <div className="space-y-sm">
            <Button variant="primary" size="lg" block onClick={() => navigateToScreen('parent-schedule')}>
              Assign to Child
            </Button>
            <Button variant="outline" size="lg" block onClick={() => alert('Preview')}>
              Preview on Child Device
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
