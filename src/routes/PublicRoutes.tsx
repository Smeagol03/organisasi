/**
 * PublicRoutes - Route publik (tanpa auth)
 * 
 * Note: This file is kept for reference but routes are now
 * managed centrally in AppRoutes.tsx
 */

export const publicRoutes = [
  { path: '/', element: 'HomePage' },
  { path: '/about', element: 'AboutPage' },
  { path: '/programs', element: 'ProgramsPage' },
  { path: '/news', element: 'NewsPage' },
  { path: '/news/:slug', element: 'NewsDetailPage' },
  { path: '/members', element: 'MembersPage' },
  { path: '/gallery', element: 'GalleryPage' },
  { path: '/contact', element: 'ContactPage' },
  { path: '/sign-in', element: 'SignInPage' },
  { path: '/sign-up', element: 'SignUpPage' },
]
