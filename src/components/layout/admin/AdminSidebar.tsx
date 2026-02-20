/**
 * AdminSidebar - Navigasi sidebar admin
 */

import { NavLink } from 'react-router-dom'
import { useAppStore } from '@/store/useAppStore'
import { adminNav } from '@/config/navigation'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'

export const AdminSidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useAppStore()

  const SidebarContent = () => (
    <div className="flex h-full flex-col gap-2 py-4">
      {/* Logo/Title */}
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto px-2">
        <nav className="flex flex-col gap-1">
          {adminNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
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
      {/* Desktop sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background transition-transform duration-300 md:translate-x-0',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0 md:hidden">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}
