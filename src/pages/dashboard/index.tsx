import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ActivityIcon, ShieldCheckIcon, UsersIcon } from 'lucide-react'
import { useNavigate } from 'react-router'
import { useSocket } from '@/context/socket-context'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

type OnlinePresence = {
  id: string
  type: 'admin' | 'user'
  sessionId?: string
  email: string
  fullName?: string
  avatar?: string
  socketCount: number
  connectedAt: string
  lastSeenAt: string
}

type PresenceSnapshot = {
  admins: OnlinePresence[]
  users: OnlinePresence[]
  counts: {
    admins: number
    users: number
    total: number
  }
}

const emptySnapshot: PresenceSnapshot = {
  admins: [],
  users: [],
  counts: {
    admins: 0,
    users: 0,
    total: 0,
  },
}

export function Dashboard() {
  const socket = useSocket()
  const navigate = useNavigate()
  const [snapshot, setSnapshot] = useState<PresenceSnapshot>(emptySnapshot)

  useEffect(() => {
    if (!socket) {
      queueMicrotask(() => setSnapshot(emptySnapshot))
      return
    }

    const handleSnapshot = (data: PresenceSnapshot) => {
      setSnapshot(data)
    }

    const handleCounts = (counts: PresenceSnapshot['counts']) => {
      setSnapshot((current) => ({ ...current, counts }))
    }

    socket.on('presence:snapshot', handleSnapshot)
    socket.on('presence:counts', handleCounts)
    socket.emit('presence:get')

    return () => {
      socket.off('presence:snapshot', handleSnapshot)
      socket.off('presence:counts', handleCounts)
    }
  }, [socket])

  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <div className='ms-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main ===== */}
      <Main className='flex flex-1 flex-col gap-6'>
        <div>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            Dashboard
          </h1>
          <p className='text-muted-foreground'>
            Monitor who is currently active in the admin portal and user app.
          </p>
        </div>

        <div className='grid gap-4 md:grid-cols-3'>
          <PresenceMetricCard
            title='Online admins'
            value={snapshot.counts.admins}
            description='Authenticated admin accounts connected now'
            icon={<ShieldCheckIcon className='size-5' />}
          />
          <PresenceMetricCard
            title='Online users'
            value={snapshot.counts.users}
            description='Authenticated user accounts connected now'
            icon={<UsersIcon className='size-5' />}
          />
          <PresenceMetricCard
            title='Total online'
            value={snapshot.counts.total}
            description='Unique accounts across all active sockets'
            icon={<ActivityIcon className='size-5' />}
          />
        </div>

        <div className='grid gap-4 xl:grid-cols-2'>
          <OnlinePresenceList
            title='Admins online'
            description='Click an admin to open their detail page.'
            emptyText='No admins online.'
            items={snapshot.admins}
            onSelect={(item) => navigate(`/admins/${item.id}/show`)}
          />
          <OnlinePresenceList
            title='Users online'
            description='Click a user to open their detail page.'
            emptyText='No users online.'
            items={snapshot.users}
            onSelect={(item) => navigate(`/users/${item.id}/show`)}
          />
        </div>
      </Main>
    </>
  )
}

function PresenceMetricCard({
  title,
  value,
  description,
  icon,
}: {
  title: string
  value: number
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card>
      <CardContent className='flex items-center justify-between gap-4'>
        <div className='space-y-1'>
          <p className='text-muted-foreground text-sm font-medium'>{title}</p>
          <p className='text-3xl font-bold'>{value}</p>
          <p className='text-muted-foreground text-xs'>{description}</p>
        </div>
        <div className='bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-md'>
          {icon}
        </div>
      </CardContent>
    </Card>
  )
}

function OnlinePresenceList({
  title,
  description,
  emptyText,
  items,
  onSelect,
}: {
  title: string
  description: string
  emptyText: string
  items: OnlinePresence[]
  onSelect: (item: OnlinePresence) => void
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        {items.length === 0 ? (
          <div className='text-muted-foreground rounded-md border border-dashed p-6 text-center text-sm'>
            {emptyText}
          </div>
        ) : (
          items.map((item) => (
            <button
              key={`${item.type}:${item.id}`}
              type='button'
              onClick={() => onSelect(item)}
              className='hover:bg-muted/60 focus-visible:ring-ring flex w-full items-center gap-3 rounded-md border p-3 text-left transition-colors focus-visible:ring-2 focus-visible:outline-none'
            >
              <Avatar className='size-10'>
                <AvatarImage src={item.avatar} alt={item.fullName} />
                <AvatarFallback>{getInitials(item)}</AvatarFallback>
              </Avatar>
              <div className='min-w-0 flex-1'>
                <div className='flex flex-wrap items-center gap-2'>
                  <p className='truncate font-medium'>
                    {item.fullName || item.email}
                  </p>
                  <Badge variant='secondary' className='gap-1'>
                    <span className='size-1.5 rounded-full bg-emerald-500' />
                    Online
                  </Badge>
                </div>
                <p className='text-muted-foreground truncate text-sm'>
                  {item.email}
                </p>
              </div>
              <div className='text-muted-foreground hidden text-right text-xs sm:block'>
                <p>
                  {item.socketCount} socket{item.socketCount > 1 ? 's' : ''}
                </p>
                <p>
                  Seen{' '}
                  {formatDistanceToNow(new Date(item.lastSeenAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </button>
          ))
        )}
      </CardContent>
    </Card>
  )
}

function getInitials(item: OnlinePresence) {
  const source = item.fullName || item.email

  return source
    .split(/\s|@/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}
