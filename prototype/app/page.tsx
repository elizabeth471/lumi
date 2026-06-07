'use client'

import React from 'react'
import { AppProvider, useApp } from '@/app/context/AppContext'
import { RoleSelector } from '@/app/components/RoleSelector'

// Parent screens
import { ParentWelcome } from '@/app/components/parent/ParentWelcome'
import { ParentSetup } from '@/app/components/parent/ParentSetup'
import { ParentDashboard } from '@/app/components/parent/ParentDashboard'
import { ParentLibrary } from '@/app/components/parent/ParentLibrary'
import { ParentControls } from '@/app/components/parent/ParentControls'
import { ParentProgress } from '@/app/components/parent/ParentProgress'
import { ParentSettings } from '@/app/components/parent/ParentSettings'
import { ParentActivityDetail } from '@/app/components/parent/ParentActivityDetail'
import { ParentSchedule } from '@/app/components/parent/ParentSchedule'
import { ParentHelp } from '@/app/components/parent/ParentHelp'

// Child screens
import { ChildLogin } from '@/app/components/child/ChildLogin'
import { ChildLibrary } from '@/app/components/child/ChildLibrary'
import { ChildVideoIntro } from '@/app/components/child/ChildVideoIntro'
import { ChildVideoPlay } from '@/app/components/child/ChildVideoPlay'
import { ChildReflection } from '@/app/components/child/ChildReflection'
import { ChildGameIntro } from '@/app/components/child/ChildGameIntro'
import { ChildGamePlay } from '@/app/components/child/ChildGamePlay'
import { ChildCelebration } from '@/app/components/child/ChildCelebration'
import { ChildLearningIntro } from '@/app/components/child/ChildLearningIntro'
import { ChildLearningPlay } from '@/app/components/child/ChildLearningPlay'

function AppContent() {
  const { currentScreen } = useApp()

  // Screen routing
  const screenMap: { [key: string]: React.ReactNode } = {
    'welcome': <RoleSelector />,

    // Parent screens
    'parent-welcome': <ParentWelcome />,
    'parent-setup': <ParentSetup />,
    'parent-dashboard': <ParentDashboard />,
    'parent-library': <ParentLibrary />,
    'parent-controls': <ParentControls />,
    'parent-progress': <ParentProgress />,
    'parent-settings': <ParentSettings />,
    'parent-activity-detail': <ParentActivityDetail />,
    'parent-schedule': <ParentSchedule />,
    'parent-help': <ParentHelp />,

    // Child screens
    'child-login': <ChildLogin />,
    'child-library': <ChildLibrary />,
    'child-video-intro': <ChildVideoIntro />,
    'child-video-play': <ChildVideoPlay />,
    'child-reflection': <ChildReflection />,
    'child-game-intro': <ChildGameIntro />,
    'child-game-play': <ChildGamePlay />,
    'child-celebration': <ChildCelebration />,
    'child-learning-intro': <ChildLearningIntro />,
    'child-learning-play': <ChildLearningPlay />,
  }

  return screenMap[currentScreen] || screenMap['welcome']
}

export default function Home() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
