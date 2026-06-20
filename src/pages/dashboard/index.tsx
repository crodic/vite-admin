import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {
  ActivityIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  DatabaseIcon,
  RefreshCwIcon,
  ServerIcon,
  ShieldCheckIcon,
  UsersIcon,
  XCircleIcon,
} from 'lucide-react'
import { useNavigate } from 'react-router'
import { useSocket } from '@/context/socket-context'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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

type HealthIndicator = {
  status?: string
  [key: string]: unknown
}

type HealthCheckResponse = {
  status: 'ok' | 'error' | 'shutting_down' | string
  info?: Record<string, HealthIndicator>
  error?: Record<string, HealthIndicator>
  details?: Record<string, HealthIndicator>
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

const HEALTH_QUERY_KEY = ['system_health'] as const

async function apiGetSystemHealth(): Promise<HealthCheckResponse> {
  const apiUrl = new URL(import.meta.env.VITE_API_URL, window.location.origin)
  const healthUrl = `${apiUrl.origin}/health`
  const response = await axios.get<HealthCheckResponse>(healthUrl, {
    timeout: 10000,
    withCredentials: true,
  })

  return response.data
}

export function Dashboard() {
  const socket = useSocket()
  const navigate = useNavigate()
  const [snapshot, setSnapshot] = useState<PresenceSnapshot>(emptySnapshot)
  const healthQuery = useQuery({
    queryKey: HEALTH_QUERY_KEY,
    queryFn: apiGetSystemHealth,
    refetchInterval: 60_000,
    retry: 1,
  })

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

        <SystemHealthSection
          health={healthQuery.data}
          isLoading={healthQuery.isFetching}
          isError={healthQuery.isError}
          updatedAt={healthQuery.dataUpdatedAt}
          onRefresh={() => healthQuery.refetch()}
        />

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

function SystemHealthSection({
  health,
  isLoading,
  isError,
  updatedAt,
  onRefresh,
}: {
  health?: HealthCheckResponse
  isLoading: boolean
  isError: boolean
  updatedAt: number
  onRefresh: () => void
}) {
  const overall = getHealthOverall(health, isError)
  const indicators = getHealthIndicators(health)

  return (
    <Card>
      <CardHeader className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='space-y-1.5'>
          <CardTitle className='flex items-center gap-2'>
            <ServerIcon className='text-primary size-5' />
            System health
          </CardTitle>
          <CardDescription>
            Live service checks from the backend health endpoint.
          </CardDescription>
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          <Badge variant={overall.variant} className={overall.className}>
            <overall.icon className='size-3.5' />
            {overall.label}
          </Badge>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={onRefresh}
            disabled={isLoading}
          >
            <RefreshCwIcon
              className={isLoading ? 'size-4 animate-spin' : 'size-4'}
            />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='grid gap-3 md:grid-cols-3'>
          <HealthSummaryItem
            label='Overall status'
            value={overall.label}
            tone={overall.tone}
          />
          <HealthSummaryItem
            label='Indicators'
            value={String(indicators.length)}
            tone='neutral'
          />
          <HealthSummaryItem
            label='Last checked'
            value={
              updatedAt
                ? formatDistanceToNow(new Date(updatedAt), { addSuffix: true })
                : 'Not checked yet'
            }
            tone='neutral'
          />
        </div>

        {isError ? (
          <div className='border-destructive/30 bg-destructive/5 text-destructive rounded-md border p-4 text-sm'>
            Health endpoint is unreachable. Check the API process, network, or
            reverse proxy configuration.
          </div>
        ) : indicators.length === 0 ? (
          <div className='text-muted-foreground rounded-md border border-dashed p-4 text-sm'>
            {isLoading ? 'Checking system health...' : 'No health details found.'}
          </div>
        ) : (
          <div className='grid gap-3 md:grid-cols-2 xl:grid-cols-3'>
            {indicators.map((indicator) => (
              <HealthIndicatorCard key={indicator.name} indicator={indicator} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function HealthSummaryItem({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone: 'healthy' | 'warning' | 'critical' | 'neutral'
}) {
  return (
    <div className='rounded-md border p-3'>
      <p className='text-muted-foreground text-xs font-medium'>{label}</p>
      <p className={getHealthToneClass(tone)}>{value}</p>
    </div>
  )
}

function HealthIndicatorCard({
  indicator,
}: {
  indicator: { name: string; status: string; detail: HealthIndicator }
}) {
  const healthy = indicator.status === 'up'

  return (
    <div className='flex items-start gap-3 rounded-md border p-3'>
      <div
        className={
          healthy
            ? 'bg-emerald-500/10 text-emerald-600 flex size-9 shrink-0 items-center justify-center rounded-md'
            : 'bg-destructive/10 text-destructive flex size-9 shrink-0 items-center justify-center rounded-md'
        }
      >
        {indicator.name === 'database' ? (
          <DatabaseIcon className='size-4' />
        ) : healthy ? (
          <CheckCircle2Icon className='size-4' />
        ) : (
          <XCircleIcon className='size-4' />
        )}
      </div>
      <div className='min-w-0 flex-1'>
        <div className='flex flex-wrap items-center gap-2'>
          <p className='font-medium capitalize'>{formatIndicatorName(indicator.name)}</p>
          <Badge variant={healthy ? 'secondary' : 'destructive'}>
            {indicator.status}
          </Badge>
        </div>
        <p className='text-muted-foreground mt-1 truncate text-xs'>
          {formatIndicatorDetail(indicator.detail)}
        </p>
      </div>
    </div>
  )
}

function getHealthOverall(health: HealthCheckResponse | undefined, isError: boolean) {
  if (isError) {
    return {
      label: 'Unreachable',
      tone: 'critical' as const,
      variant: 'destructive' as const,
      className: '',
      icon: XCircleIcon,
    }
  }

  if (!health) {
    return {
      label: 'Checking',
      tone: 'neutral' as const,
      variant: 'outline' as const,
      className: '',
      icon: RefreshCwIcon,
    }
  }

  if (health.status === 'ok') {
    return {
      label: 'Operational',
      tone: 'healthy' as const,
      variant: 'secondary' as const,
      className: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
      icon: CheckCircle2Icon,
    }
  }

  if (health.status === 'shutting_down') {
    return {
      label: 'Shutting down',
      tone: 'warning' as const,
      variant: 'outline' as const,
      className: 'border-amber-500/40 text-amber-700 dark:text-amber-400',
      icon: AlertTriangleIcon,
    }
  }

  return {
    label: 'Degraded',
    tone: 'critical' as const,
    variant: 'destructive' as const,
    className: '',
    icon: XCircleIcon,
  }
}

function getHealthIndicators(health?: HealthCheckResponse) {
  const details = health?.details ?? {}

  return Object.entries(details).map(([name, detail]) => ({
    name,
    status: detail.status ?? 'unknown',
    detail,
  }))
}

function getHealthToneClass(tone: 'healthy' | 'warning' | 'critical' | 'neutral') {
  const base = 'mt-1 text-lg font-semibold'

  if (tone === 'healthy') return `${base} text-emerald-600`
  if (tone === 'warning') return `${base} text-amber-600`
  if (tone === 'critical') return `${base} text-destructive`

  return base
}

function formatIndicatorName(name: string) {
  return name.replace(/-/g, ' ')
}

function formatIndicatorDetail(detail: HealthIndicator) {
  const entries = Object.entries(detail).filter(([key]) => key !== 'status')

  if (entries.length === 0) {
    return 'No additional details'
  }

  return entries
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join(' · ')
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
