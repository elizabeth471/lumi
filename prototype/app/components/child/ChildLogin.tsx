'use client'

import React from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'

export function ChildLogin() {
  const { navigateToScreen, children, selectChild } = useApp()

  const handleSelectChild = (childName: string) => {
    const child = children.find(c => c.name === childName)
    if (child) {
      selectChild(child)
      navigateToScreen('child-library')
    }
  }

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="lighttroupekids"
        subtitle="Hi there! 👋"
      />

      <div className="flex-1 flex items-center justify-center px-lg w-full">
        <div className="max-w-md w-full">
          <div className="text-center mb-xl">
            <div className="text-6xl mb-lg">🌱</div>
            <h2 className="font-serif text-3xl text-primary mb-md font-normal">Who are you?</h2>
            <p className="text-gray-600 text-sm mb-lg">Pick your name to get started</p>
          </div>

          <div className="space-y-md">
            {children.length > 0 ? (
              children.map(child => (
                <Button
                  key={child.id}
                  variant="primary"
                  size="lg"
                  block
                  onClick={() => handleSelectChild(child.name)}
                >
                  {child.name} ({child.age})
                </Button>
              ))
            ) : (
              <p className="text-center text-gray-600">
                No children found. Set up a child profile first.
              </p>
            )}

            {children.length > 0 && (
              <p className="text-center text-xs text-gray-500 mt-lg">
                Ask your parent if you don't see your name
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
