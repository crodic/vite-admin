import {
  LayoutDashboard,
  HelpCircle,
  Palette,
  Settings,
  Wrench,
  UserCog,
  UserCog2,
  Group,
  UserLock,
  FileClock,
  ShieldCheck,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarLink: SidebarData = {
  navGroups: [
    {
      title: 'navigation.general.title',
      items: [
        {
          title: 'navigation.general.items.dashboard',
          url: '/',
          icon: LayoutDashboard,
          permission: 'USER',
        },
        {
          title: 'navigation.general.items.activityLogs',
          url: '/logs',
          icon: FileClock,
        },
      ],
    },
    {
      title: 'navigation.management.title',
      items: [
        {
          title: 'navigation.management.items.admins',
          url: '/admins',
          icon: UserCog2,
          permission: 'ADMIN',
        },
        {
          title: 'navigation.management.items.roles',
          icon: Group,
          url: '/roles',
          permission: 'ROLE',
        },
        {
          title: 'navigation.management.items.permissions',
          icon: ShieldCheck,
          url: '/permissions',
          permission: 'ROLE',
        },
        {
          title: 'navigation.management.items.users',
          url: '/users',
          icon: UserLock,
          permission: 'USER',
        },
      ],
    },
    {
      title: 'navigation.other.title',
      items: [
        {
          title: 'navigation.other.items.settings',
          icon: Settings,
          items: [
            {
              title: 'navigation.other.items.profiles',
              url: '/settings',
              icon: UserCog,
            },
            {
              title: 'navigation.other.items.account',
              url: '/settings/account',
              icon: Wrench,
            },
            {
              title: 'navigation.other.items.appearance',
              url: '/settings/appearance',
              icon: Palette,
            },
          ],
        },
        {
          title: 'navigation.other.items.helpCenter',
          url: '/help-center',
          icon: HelpCircle,
        },
      ],
    },
  ],
}
