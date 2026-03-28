import { format } from 'date-fns'
import type { ColumnDef } from '@tanstack/react-table'
import i18n from '@/i18n'
import { Text, TextIcon } from 'lucide-react'
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header'
import { ColumnKey, type ActivityLogSchema } from './schema'

export function getActivitiesTableColumns({
  actions = [],
}: {
  actions: string[]
}): ColumnDef<ActivityLogSchema>[] {
  return [
    {
      id: ColumnKey.id,
      accessorFn: (row) => row.id,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} label='ID' />
      ),
      cell: ({ row }) => (
        <p className='truncate overflow-hidden'>{row.original.id}</p>
      ),
      enableColumnFilter: false,
    },
    {
      id: ColumnKey.entityId,
      accessorFn: (row) => row.entityId,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          label={i18n.t('pages.activityLogs.overview.tableColumns.resourceId')}
        />
      ),
      meta: {
        variant: 'text',
        placeholder: i18n.t(
          'pages.activityLogs.overview.tableColumns.resourceId'
        ),
        label: i18n.t('pages.activityLogs.overview.tableColumns.resourceId'),
        icon: Text,
      },
      cell: ({ row }) => (
        <p className='truncate overflow-hidden'>{row.original.entityId}</p>
      ),
      enableColumnFilter: true,
    },
    {
      id: ColumnKey.entity,
      accessorFn: (row) => row.entity,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          label={i18n.t('pages.activityLogs.overview.tableColumns.entity')}
        />
      ),
      cell: ({ row }) => (
        <p className='truncate overflow-hidden'>{row.original.entity}</p>
      ),
      meta: {
        variant: 'text',
        placeholder: i18n.t('pages.activityLogs.overview.tableColumns.entity'),
        label: i18n.t('pages.activityLogs.overview.tableColumns.entity'),
        icon: TextIcon,
      },
      enableHiding: false,
      enableSorting: false,
      enableColumnFilter: true,
    },
    {
      id: ColumnKey.action,
      accessorFn: (row) => row.action,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          label={i18n.t('pages.activityLogs.overview.tableColumns.action')}
        />
      ),
      meta: {
        variant: 'multiSelect',
        label: i18n.t('pages.activityLogs.overview.tableColumns.action'),
        options: actions.map((action) => ({ value: action, label: action })),
      },
      cell: ({ row }) => <p>{row.original.action}</p>,
      enableColumnFilter: true,
      enableHiding: false,
      enableSorting: false,
    },
    {
      id: ColumnKey.userId,
      accessorFn: (row) => row.userId,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          label={i18n.t('pages.activityLogs.overview.tableColumns.actor')}
        />
      ),
      cell: ({ row }) => (
        <p className='truncate overflow-hidden'>
          {row.original.user ? (
            <span>
              [ID: {row.original.user?.id}] {row.original.user?.fullName} (
              {row.original.user?.email})
            </span>
          ) : (
            <span>{row.original.userId}</span>
          )}
        </p>
      ),
      meta: {
        variant: 'text',
        placeholder: i18n.t('pages.activityLogs.overview.tableColumns.actor'),
        label: i18n.t('pages.activityLogs.overview.tableColumns.actor'),
        icon: TextIcon,
      },
      enableHiding: false,
      enableSorting: false,
      enableColumnFilter: true,
    },
    {
      id: ColumnKey.createdAt,
      accessorFn: (row) => row.createdAt,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          label={i18n.t('pages.activityLogs.overview.tableColumns.timestamp')}
        />
      ),
      cell: ({ row }) => (
        <p className='truncate overflow-hidden'>
          {format(row.original.createdAt, 'dd/MM/yyyy HH:mm aa')}
        </p>
      ),
      enableColumnFilter: false,
      enableSorting: true,
    },
  ]
}
