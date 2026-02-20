/**
 * PageWrapper Component
 * Wrapper for public pages with Navbar and Footer
 */

import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export const PageWrapper = ({ children, className = '' }: PageWrapperProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
