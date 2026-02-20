/**
 * Navigation Configuration
 * Centralized configuration for navigation menus
 */

import { Home, Info, Calendar, Newspaper, Users, Image, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  title: string
  href: string
  icon?: LucideIcon
  disabled?: boolean
  external?: boolean
}

export interface MainNavItem extends NavItem {
  items?: NavItem[]
}

// Main navigation (public)
export const mainNav: MainNavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },
  {
    title: 'About',
    href: '/about',
    icon: Info,
  },
  {
    title: 'Programs',
    href: '/programs',
    icon: Calendar,
  },
  {
    title: 'News',
    href: '/news',
    icon: Newspaper,
  },
  {
    title: 'Members',
    href: '/members',
    icon: Users,
  },
  {
    title: 'Gallery',
    href: '/gallery',
    icon: Image,
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: Mail,
  },
]

// Admin sidebar navigation
export const adminNav: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: Home,
  },
  {
    title: 'News',
    href: '/admin/news',
    icon: Newspaper,
  },
  {
    title: 'Programs',
    href: '/admin/programs',
    icon: Calendar,
  },
  {
    title: 'Members',
    href: '/admin/members',
    icon: Users,
  },
  {
    title: 'Gallery',
    href: '/admin/gallery',
    icon: Image,
  },
  {
    title: 'Messages',
    href: '/admin/messages',
    icon: Mail,
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Info,
  },
]

// Footer links
export const footerNav = {
  main: [
    { title: 'About', href: '/about' },
    { title: 'Programs', href: '/programs' },
    { title: 'News', href: '/news' },
    { title: 'Contact', href: '/contact' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
  ],
}
