/**
 * AdminLayout - Shell layout admin (sidebar + topbar)
 */

import { Outlet } from 'react-router-dom'
import { AdminSidebar } from './AdminSidebar'
import { AdminTopbar } from './AdminTopbar'

export const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content area - with margin for desktop sidebar */}
      <div className="flex flex-1 flex-col md:ml-64">
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
