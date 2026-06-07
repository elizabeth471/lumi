'use client'

import React, { useState } from 'react'
import { useApp } from '@/app/context/AppContext'
import { Header } from '../Header'
import { Button } from '../Button'
import { Card } from '../Card'

export function ParentHelp() {
  const { navigateToScreen } = useApp()
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  const faqs = [
    {
      id: '1',
      question: 'How do I create an activity schedule?',
      answer: 'Go to the Activity Library, select an activity, and click "Assign to Child." You can set specific days and times when the activity will be available.',
    },
    {
      id: '2',
      question: 'What happens when the daily limit is reached?',
      answer: 'The activity will pause and your child will see a friendly message. As a parent, you receive a notification and can adjust the limit from your dashboard.',
    },
    {
      id: '3',
      question: 'Is lighttroupekids safe for my child?',
      answer: 'Yes. Every activity is personally reviewed. We comply with COPPA, never track personal data, and parents control all settings. See our Safety page for details.',
    },
    {
      id: '4',
      question: 'Can I see what my child is doing?',
      answer: 'Yes. You get weekly summaries, reflections from your child, and detailed progress reports. You control all visibility and notification settings.',
    },
  ]

  return (
    <div className="min-h-screen bg-light-bg flex flex-col">
      <Header
        title="Help & Support"
        subtitle="We're here to help"
      />

      <div className="flex-1 max-w-2xl mx-auto px-lg py-xl w-full space-y-lg">
        {/* Contact Card */}
        <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-xl p-lg text-center">
          <h3 className="font-serif text-2xl mb-md font-normal">Questions?</h3>
          <p className="text-sm mb-lg opacity-95">
            Email us any time. We reply within 24 hours.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => alert('Email: hello@lighttroupekids.com')}
            className="bg-white text-primary hover:bg-opacity-90"
          >
            Contact Support
          </Button>
        </div>

        {/* FAQs */}
        <div>
          <h3 className="text-xl text-primary font-semibold mb-lg">Frequently Asked Questions</h3>
          <div className="space-y-sm">
            {faqs.map(faq => (
              <Card
                key={faq.id}
                interactive
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <span className="font-semibold text-dark-text text-sm">{faq.question}</span>
                  <span className="text-xl text-accent">{expandedFaq === faq.id ? '−' : '+'}</span>
                </div>
                {expandedFaq === faq.id && (
                  <p className="text-sm text-gray-600 mt-md leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <Card>
          <h3 className="text-lg text-primary font-semibold mb-lg">Resources</h3>
          <div className="space-y-sm">
            {[
              { icon: '🔒', label: 'Privacy & COPPA Compliance' },
              { icon: '📖', label: 'Getting Started Guide' },
              { icon: '⚙️', label: 'Parental Control Tips' },
              { icon: '👨‍👩‍👧‍👦', label: 'Screen Time & Child Development' },
            ].map((resource, idx) => (
              <a
                key={idx}
                href="#"
                className="block p-md border border-border rounded-lg text-primary font-semibold text-sm no-underline hover:bg-light-bg transition"
              >
                {resource.icon} {resource.label}
              </a>
            ))}
          </div>
        </Card>

        <Button
          variant="outline"
          block
          onClick={() => navigateToScreen('parent-dashboard')}
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  )
}
