import { useEffect } from 'react'
import { AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getAdminPermissions } from '@/lib/admin-roles'
import { useAuthStore } from '@/stores/auth-store'
import { apiGetMe } from '@/pages/auth/queries'

export function usePermissionLoader() {
  const { permissionStatus, setPermissions, setAbilityFromPermissions } =
    useAuthStore()

  const authUserQuery = useQuery({
    enabled: permissionStatus == 'loading',
    queryKey: ['authenticated_user'],
    queryFn: apiGetMe,
    retry: (count, error) => {
      if (
        !(error instanceof AxiosError) ||
        count >= 2 ||
        error.response?.status === 401
      ) {
        return false
      }

      return true
    },
    throwOnError: (error) => {
      if (!(error instanceof AxiosError)) {
        return false
      }

      return error.response?.status !== 401 // Only throw unauthenticated error
    },
  })

  useEffect(() => {
    if (!authUserQuery.isFetched) {
      return
    }

    if (authUserQuery.data) {
      const permissions = getAdminPermissions(authUserQuery.data)
      setAbilityFromPermissions(permissions)
      setPermissions(permissions)
    }
  }, [
    authUserQuery.data,
    authUserQuery.isFetched,
    setAbilityFromPermissions,
    setPermissions,
  ])

  return {
    permissionStatus,
  }
}
