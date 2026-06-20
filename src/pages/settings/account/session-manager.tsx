import { formatDistanceToNow } from 'date-fns'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  KeyRoundIcon,
  Loader2Icon,
  MonitorIcon,
  Trash2Icon,
} from 'lucide-react'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/auth-store'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  apiGetSessions,
  apiRevokeAllSessions,
  apiRevokeSession,
} from '@/pages/auth/queries'

export function SessionManager() {
  const queryClient = useQueryClient()
  const logout = useAuthStore((state) => state.logout)
  const { data: sessions = [], isFetching } = useQuery({
    queryKey: ['auth_sessions'],
    queryFn: apiGetSessions,
  })

  const revokeSessionMutation = useMutation({
    mutationFn: apiRevokeSession,
    onSuccess: () => {
      toast.success('Session revoked successfully')
      queryClient.invalidateQueries({ queryKey: ['auth_sessions'] })
    },
    onError: () => toast.error('Failed to revoke session'),
  })

  const revokeAllMutation = useMutation({
    mutationFn: apiRevokeAllSessions,
    onSuccess: () => {
      toast.success('All sessions revoked')
      logout()
      window.location.href = '/sign-in'
    },
    onError: () => toast.error('Failed to revoke sessions'),
  })

  return (
    <Card>
      <CardHeader className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='space-y-1.5'>
          <CardTitle className='flex items-center gap-2'>
            <KeyRoundIcon className='size-5' />
            Active sessions
          </CardTitle>
          <CardDescription>
            Review signed-in devices and revoke access immediately.
          </CardDescription>
        </div>
        <Button
          variant='destructive'
          onClick={() => revokeAllMutation.mutate()}
          disabled={sessions.length === 0 || revokeAllMutation.isPending}
        >
          {revokeAllMutation.isPending && (
            <Loader2Icon className='size-4 animate-spin' />
          )}
          Revoke all
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Device</TableHead>
              <TableHead>IP address</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className='text-right'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isFetching ? (
              <TableRow>
                <TableCell colSpan={4} className='text-muted-foreground py-8'>
                  Loading sessions...
                </TableCell>
              </TableRow>
            ) : sessions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className='text-muted-foreground py-8'>
                  No active sessions found.
                </TableCell>
              </TableRow>
            ) : (
              sessions.map((session) => (
                <TableRow key={session.id}>
                  <TableCell className='max-w-[420px]'>
                    <div className='flex items-start gap-3'>
                      <div className='bg-muted flex size-9 shrink-0 items-center justify-center rounded-md'>
                        <MonitorIcon className='size-4' />
                      </div>
                      <div className='min-w-0'>
                        <p className='font-medium'>Session #{session.id}</p>
                        <p className='text-muted-foreground truncate text-xs'>
                          {session.userAgent || 'Unknown device'}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{session.ipAddress || '-'}</TableCell>
                  <TableCell>
                    {formatDistanceToNow(new Date(session.createdAt), {
                      addSuffix: true,
                    })}
                  </TableCell>
                  <TableCell className='text-right'>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() => revokeSessionMutation.mutate(session.id)}
                      disabled={revokeSessionMutation.isPending}
                    >
                      <Trash2Icon className='size-4' />
                      Revoke
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
