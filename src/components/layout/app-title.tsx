// import { Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'
import Logo from '@/assets/images/logo.png'
import { useTheme } from '@/context/theme-provider'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  apiGetWebsiteSettings,
  getCachedWebsiteSettings,
  WEBSITE_SETTINGS_QUERY_KEY,
} from '@/pages/settings/queries'

export function AppTitle() {
  const { setOpenMobile } = useSidebar()
  const { resolvedTheme } = useTheme()
  const { data: websiteSettings, isFetched } = useQuery({
    queryKey: WEBSITE_SETTINGS_QUERY_KEY,
    queryFn: apiGetWebsiteSettings,
    initialData: getCachedWebsiteSettings,
    staleTime: 5 * 60 * 1000,
  })

  const configuredLogoSrc =
    resolvedTheme === 'dark'
      ? websiteSettings?.site_dark_logo || websiteSettings?.site_logo
      : websiteSettings?.site_logo
  const hasWebsiteSettings = Boolean(websiteSettings)
  const logoSrc =
    configuredLogoSrc || (hasWebsiteSettings || isFetched ? Logo : null)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size='lg'
          className='h-auto gap-0 py-0 hover:bg-transparent active:bg-transparent'
          asChild
        >
          <div>
            <Link
              to='/'
              onClick={() => setOpenMobile(false)}
              className='grid flex-1 text-start text-sm leading-tight'
            >
              {logoSrc ? (
                <img
                  className='mx-auto max-h-18 w-auto object-cover'
                  src={logoSrc}
                  alt={websiteSettings?.site_brand || 'Logo'}
                />
              ) : (
                <div className='mx-auto h-18 w-28' aria-hidden='true' />
              )}
            </Link>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
