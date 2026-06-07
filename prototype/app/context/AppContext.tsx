'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

export type UserRole = 'none' | 'parent' | 'child'

interface Child {
  id: string
  name: string
  age: number
  interests: string[]
}

interface AppContextType {
  // Navigation & user state
  userRole: UserRole
  setUserRole: (role: UserRole) => void
  currentScreen: string
  navigateToScreen: (screen: string) => void

  // Parent state
  parentEmail?: string
  setParentEmail: (email: string) => void
  children: Child[]
  addChild: (child: Child) => void
  selectedChild?: Child
  selectChild: (child: Child) => void

  // Settings
  parentDailyLimit?: number
  setParentDailyLimit: (minutes: number) => void
  parentActiveHours?: { start: string; end: string }
  setParentActiveHours: (hours: { start: string; end: string }) => void

  // Activity state
  currentActivity?: string
  setCurrentActivity: (activity: string) => void
  activityStartTime?: number
  setActivityStartTime: (time: number) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  // Navigation
  const [userRole, setUserRole] = useState<UserRole>('none')
  const [currentScreen, setCurrentScreen] = useState('welcome')

  // Parent data
  const [parentEmail, setParentEmail] = useState<string>()
  const [childList, setChildList] = useState<Child[]>([])
  const [selectedChild, setSelectedChild] = useState<Child>()
  const [parentDailyLimit, setParentDailyLimit] = useState(60)
  const [parentActiveHours, setParentActiveHours] = useState({ start: '08:00', end: '20:00' })

  // Activity state
  const [currentActivity, setCurrentActivity] = useState<string>()
  const [activityStartTime, setActivityStartTime] = useState<number>()

  const navigateToScreen = (screen: string) => {
    setCurrentScreen(screen)
    // Smooth scroll to top
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const addChild = (child: Child) => {
    setChildList([...childList, child])
  }

  const selectChild = (child: Child) => {
    setSelectedChild(child)
  }

  const value: AppContextType = {
    userRole,
    setUserRole,
    currentScreen,
    navigateToScreen,
    parentEmail,
    setParentEmail,
    children: childList,
    addChild,
    selectedChild,
    selectChild,
    parentDailyLimit,
    setParentDailyLimit,
    parentActiveHours,
    setParentActiveHours,
    currentActivity,
    setCurrentActivity,
    activityStartTime,
    setActivityStartTime,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
