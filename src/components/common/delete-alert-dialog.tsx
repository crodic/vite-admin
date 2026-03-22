import { useTranslation } from 'react-i18next'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

interface DeleteAlertDialogProps {
  handleDelete: () => void
  isLoading: boolean
  title?: string
  description?: string
  confirmText?: string
  cancelText?: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DeleteAlertDialog({
  handleDelete,
  isLoading,
  //   title = 'Are you sure?',
  //   description = 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
  //   confirmText = 'button.delete',
  //   cancelText = 'button.cancel',
  open,
  onOpenChange,
}: DeleteAlertDialogProps) {
  const { t } = useTranslation()

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {t('pages.adminOverview.popupDelete.title')}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {t('pages.adminOverview.popupDelete.description')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>
            {t('buttons.cancel')}
          </AlertDialogCancel>
          <AlertDialogAction
            variant='destructive'
            onClick={handleDelete}
            disabled={isLoading}
          >
            {t('buttons.delete')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
