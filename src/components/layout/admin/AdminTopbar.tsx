/**
 * AdminTopbar - Header admin (user info, logout)
 */

import { Menu } from 'lucide-react'
import { UserButton } from '@clerk/react-router'
import { useAppStore } from '@/store/useAppStore'
import { Button } from '@/components/ui/button'

export const AdminTopbar = () => {
  const { setIsSidebarOpen } = useAppStore()

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4">
      {/* Sidebar trigger button - only visible on mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="shrink-0 md:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>

      {/* Page title */}
      <div className="flex-1">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      {/* User button */}
      <UserButton
        showName
        appearance={{
          elements: {
            rootBox: 'cursor-pointer',
            avatarBox: 'w-8 h-8',
            userButtonPopoverCard: 'shadow-lg',
          },
        }}
        afterSignOutUrl="/"
      />
    </header>
  )
}
