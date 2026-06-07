import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'lighttroupekids — Screen time that brings families closer',
  description: 'A digital space designed around family connection, not distraction.',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-light-bg text-dark-text">
        {children}
      </body>
    </html>
  )
}
