import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import logoImage from '@/assets/images/logo.png'
import { useAuthStore } from '@/stores/auth-store'

type AuthLayoutProps = {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { isAuthenticated } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className='container grid h-svh max-w-none items-center justify-center'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-120 sm:p-8'>
        <div className='mb-4 flex flex-col items-center justify-center'>
          <img
            src={logoImage}
            alt='Logo'
            className='h-auto w-36 rounded-full'
          />
        </div>
        {children}
      </div>
    </div>
  )
}
