/**
 * AdminRoutes - Route admin (wrapped ProtectedRoute)
 * 
 * Note: This file is kept for reference but routes are now
 * managed centrally in AppRoutes.tsx
 */

export const adminRoutes = [
  { path: '/admin/dashboard', element: 'AdminDashboardPage' },
  { path: '/admin/news', element: 'AdminNewsPage' },
  { path: '/admin/news/create', element: 'AdminNewsFormPage' },
  { path: '/admin/news/edit/:id', element: 'AdminNewsFormPage' },
  { path: '/admin/programs', element: 'AdminProgramsPage' },
  { path: '/admin/programs/create', element: 'AdminProgramFormPage' },
  { path: '/admin/programs/edit/:id', element: 'AdminProgramFormPage' },
  { path: '/admin/members', element: 'AdminMembersPage' },
  { path: '/admin/members/create', element: 'AdminMemberFormPage' },
  { path: '/admin/members/edit/:id', element: 'AdminMemberFormPage' },
  { path: '/admin/gallery', element: 'AdminGalleryPage' },
  { path: '/admin/messages', element: 'AdminMessagesPage' },
  { path: '/admin/settings', element: 'AdminSettingsPage' },
]
