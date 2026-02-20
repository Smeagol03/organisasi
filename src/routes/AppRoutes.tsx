/**
 * AppRoutes - Root router configuration
 * Combines public and admin routes
 */

import { Routes, Route, Navigate } from 'react-router-dom'

// Public pages
import HomePage from '@/pages/public/HomePage'
import AboutPage from '@/pages/public/AboutPage'
import ProgramsPage from '@/pages/public/ProgramsPage'
import NewsPage from '@/pages/public/NewsPage'
import NewsDetailPage from '@/pages/public/NewsDetailPage'
import MembersPage from '@/pages/public/MembersPage'
import GalleryPage from '@/pages/public/GalleryPage'
import ContactPage from '@/pages/public/ContactPage'
import NotFoundPage from '@/pages/public/NotFoundPage'
import SignInPage from '@/pages/public/SignInPage'
import SignUpPage from '@/pages/public/SignUpPage'

// Admin pages
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage'
import AdminNewsPage from '@/pages/admin/AdminNewsPage'
import AdminNewsFormPage from '@/pages/admin/AdminNewsFormPage'
import AdminProgramsPage from '@/pages/admin/AdminProgramsPage'
import AdminProgramFormPage from '@/pages/admin/AdminProgramFormPage'
import AdminMembersPage from '@/pages/admin/AdminMembersPage'
import AdminMemberFormPage from '@/pages/admin/AdminMemberFormPage'
import AdminGalleryPage from '@/pages/admin/AdminGalleryPage'
import AdminMessagesPage from '@/pages/admin/AdminMessagesPage'
import AdminSettingsPage from '@/pages/admin/AdminSettingsPage'

// Admin layout and protection
import { ProtectedRoute } from '@/components/layout/admin/ProtectedRoute'
import { AdminLayout } from '@/components/layout/admin/AdminLayout'

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:slug" element={<NewsDetailPage />} />
      <Route path="/members" element={<MembersPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/sign-in/*" element={<SignInPage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />

      {/* Admin Routes - Protected */}
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="news" element={<AdminNewsPage />} />
          <Route path="news/create" element={<AdminNewsFormPage />} />
          <Route path="news/edit/:id" element={<AdminNewsFormPage />} />
          <Route path="programs" element={<AdminProgramsPage />} />
          <Route path="programs/create" element={<AdminProgramFormPage />} />
          <Route path="programs/edit/:id" element={<AdminProgramFormPage />} />
          <Route path="members" element={<AdminMembersPage />} />
          <Route path="members/create" element={<AdminMemberFormPage />} />
          <Route path="members/edit/:id" element={<AdminMemberFormPage />} />
          <Route path="gallery" element={<AdminGalleryPage />} />
          <Route path="messages" element={<AdminMessagesPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
