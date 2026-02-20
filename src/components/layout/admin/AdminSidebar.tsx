/**
 * AdminSidebar - Navigasi sidebar admin
 */

import { NavLink } from 'react-router-dom'
import { useAppStore } from '@/store/useAppStore'
import { adminNav } from '@/config/navigation'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '@/components/ui/sheet'

export const AdminSidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useAppStore()

  const SidebarContent = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <div className="flex h-full flex-col gap-2 py-4">
      {/* Logo/Title */}
      <div className="px-4 py-2">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto px-2">
        <nav className="flex flex-col gap-1">
          {adminNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={onLinkClick}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )
              }
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar - always visible */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r bg-background md:block">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar - toggle with state */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0 md:hidden" showCloseButton={false}>
          <SheetTitle className="sr-only">Admin Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">Navigate to different admin pages</SheetDescription>
          <SidebarContent onLinkClick={() => setIsSidebarOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  )
}
