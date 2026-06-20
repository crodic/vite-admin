import { useTranslation } from 'react-i18next'
import { ContentSection } from '../components/content-section'
import WebsiteForm from './website-form'

export function SettingsWebsite() {
  const { t } = useTranslation()

  return (
    <ContentSection
      title={t('pages.settings.website.title')}
      desc={t('pages.settings.website.description')}
    >
      <WebsiteForm />
    </ContentSection>
  )
}
