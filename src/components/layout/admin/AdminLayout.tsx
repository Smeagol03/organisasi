/**
 * AdminLayout - Shell layout admin (sidebar + topbar)
 */

import { Outlet } from 'react-router-dom'
import { AdminSidebar } from './AdminSidebar'
import { AdminTopbar } from './AdminTopbar'
import { useAppStore } from '@/store/useAppStore'
import { cn } from '@/lib/utils'

export const AdminLayout = () => {
  const { isSidebarOpen } = useAppStore()

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content area */}
      <div 
        className={cn(
          'flex flex-1 flex-col transition-all duration-300',
          isSidebarOpen ? 'md:ml-64' : 'ml-0'
        )}
      >
        {/* Topbar */}
        <AdminTopbar />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-muted/40 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
