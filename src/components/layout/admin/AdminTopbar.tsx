/**
 * AdminTopbar - Header admin (user info, logout)
 */

import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/react-router'
import { useAppStore } from '@/store/useAppStore'

export const AdminTopbar = () => {
  const { setIsSidebarOpen } = useAppStore()

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4">
      {/* Sidebar trigger */}
      <button
        type="button"
        className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        onClick={() => setIsSidebarOpen(true)}
      >
        <SidebarTrigger className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </button>

      {/* Breadcrumb or page title could go here */}
      <div className="flex-1" />

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
