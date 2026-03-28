import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Navigate } from 'react-router'
import DataLoader from '@/components/layout/data-loader'
import { apiGetMe } from '@/pages/auth/queries'
import { ContentSection } from '../components/content-section'
import { AccountForm } from './account-form'
import DeleteAccount from './delete-account'

export function SettingsAccount() {
  const { t } = useTranslation()
  const { data: currentUser, isFetching } = useQuery({
    queryKey: ['authenticated_user'],
    queryFn: apiGetMe,
  })

  if (isFetching) return <DataLoader />

  if (!currentUser) return <Navigate to='/errors/not-found' />

  return (
    <ContentSection
      title={t('pages.settings.account.title')}
      desc={t('pages.settings.account.description')}
    >
      <div className='space-y-8'>
        <AccountForm user={currentUser} />
        <DeleteAccount />
      </div>
    </ContentSection>
  )
}
