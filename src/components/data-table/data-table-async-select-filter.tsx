'use client'

import * as React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import type { Column } from '@tanstack/react-table'
import type { PaginateQueryParams } from '@/global'
import type { Option } from '@/types/data-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import { Check, Loader2, PlusCircle, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

export interface AsyncSelectResponse {
  data: Option[]
  meta?: {
    totalItems?: number
  }
}

interface DataTableAsyncSelectFilterProps<TData, TValue> {
  column?: Column<TData, TValue>
  title?: string
  multiple?: boolean
  limit?: number
  fetchOptions?: (params: PaginateQueryParams) => Promise<AsyncSelectResponse>
}

export function DataTableAsyncSelectFilter<TData, TValue>({
  column,
  title,
  multiple,
  fetchOptions = async () => ({ data: [] }),
  limit = 20,
}: DataTableAsyncSelectFilterProps<TData, TValue>) {
  const [open, setOpen] = React.useState(false)

  const [search, setSearch] = React.useState('')
  const [debouncedSearch, setDebouncedSearch] = React.useState('')

  const parentRef = React.useRef<HTMLDivElement>(null)

  const columnFilterValue = column?.getFilterValue()

  const selectedValues = new Set(
    Array.isArray(columnFilterValue) ? columnFilterValue : []
  )

  const searchKey =
    (column?.columnDef.meta as any)?.searchKey ?? column?.columnDef.id

  /*
  debounce search
  */

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500)

    return () => clearTimeout(timer)
  }, [search])

  /*
  query
  */

  const query = useInfiniteQuery({
    queryKey: [
      'datatable-async-filter',
      column?.id,
      debouncedSearch,
      limit,
      searchKey,
    ],

    enabled: open,

    refetchOnMount: 'always',

    initialPageParam: 0,

    queryFn: async ({ pageParam }) => {
      const params: PaginateQueryParams = {
        limit,
        offset: pageParam,
        [searchKey]: debouncedSearch,
      }

      return fetchOptions(params)
    },

    getNextPageParam: (lastPage, pages) => {
      const loaded = pages.flatMap((p) => p.data).length
      const total = lastPage.meta?.totalItems

      if (total === undefined) return loaded + limit

      return loaded < total ? loaded : undefined
    },

    staleTime: 60_000,
    refetchOnWindowFocus: false,
  })

  const options = React.useMemo(() => {
    return query.data?.pages.flatMap((p) => p.data) ?? []
  }, [query.data?.pages])

  /*
  virtualization
  */

  const rowVirtualizer = useVirtualizer({
    count: options.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
    overscan: 10,
  })

  React.useLayoutEffect(() => {
    if (!open) return

    requestAnimationFrame(() => {
      rowVirtualizer.measure()
    })
  }, [open, rowVirtualizer])

  React.useEffect(() => {
    if (!open) {
      query.refetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const virtualItems = rowVirtualizer.getVirtualItems()

  React.useEffect(() => {
    if (!virtualItems.length) return

    const last = virtualItems[virtualItems.length - 1]

    if (
      last.index >= options.length - 5 &&
      query.hasNextPage &&
      !query.isFetchingNextPage &&
      !query.isFetching
    ) {
      query.fetchNextPage()
    }
    // eslint-disable-next-line @tanstack/query/no-unstable-deps
  }, [virtualItems, options.length, query])

  /*
  select
  */

  const onItemSelect = (option: Option, isSelected: boolean) => {
    if (!column) return

    if (multiple) {
      const newValues = new Set(selectedValues)

      if (isSelected) newValues.delete(option.value)
      else newValues.add(option.value)

      const values = Array.from(newValues)

      column.setFilterValue(values.length ? values : undefined)
    } else {
      column.setFilterValue(isSelected ? undefined : [option.value])
      setOpen(false)
    }
  }

  const onReset = () => {
    column?.setFilterValue(undefined)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' size='sm' className='border-dashed'>
          {selectedValues.size ? (
            <div
              role='button'
              tabIndex={0}
              className='flex items-center'
              onPointerDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onReset()
              }}
            >
              <XCircle className='h-4 w-4' />
            </div>
          ) : (
            <PlusCircle className='h-4 w-4' />
          )}

          {title}

          {selectedValues.size > 0 && (
            <>
              <Separator orientation='vertical' className='mx-1 h-4' />
              <Badge variant='secondary'>{selectedValues.size}</Badge>
            </>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-64 p-0' align='start'>
        <Command shouldFilter={false}>
          <CommandInput
            placeholder={title}
            value={search}
            onValueChange={setSearch}
          />

          {/* SCROLL CONTAINER */}
          <CommandList ref={parentRef} className='max-h-72 overflow-auto'>
            <CommandEmpty>
              {query.isLoading ? (
                <div className='flex items-center gap-2 p-2 text-sm'>
                  <Loader2 className='h-4 w-4 animate-spin' />
                  Searching...
                </div>
              ) : (
                'No results'
              )}
            </CommandEmpty>

            <CommandGroup>
              <div
                style={{
                  height: rowVirtualizer.getTotalSize(),
                  position: 'relative',
                }}
              >
                {virtualItems.map((virtualRow) => {
                  const option = options[virtualRow.index]

                  if (!option) return null

                  const isSelected = selectedValues.has(option.value)

                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => onItemSelect(option, isSelected)}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                    >
                      <div
                        className={cn(
                          'border-primary flex size-4 items-center justify-center rounded-sm border',
                          isSelected
                            ? 'bg-primary'
                            : 'opacity-50 [&_svg]:invisible'
                        )}
                      >
                        <Check className='h-3 w-3 text-white' />
                      </div>

                      {option.icon && <option.icon />}

                      <span className='truncate'>{option.label}</span>
                    </CommandItem>
                  )
                })}
              </div>

              {query.isFetchingNextPage && (
                <div className='flex items-center justify-center p-2'>
                  <Loader2 className='h-4 w-4 animate-spin' />
                </div>
              )}
            </CommandGroup>

            {selectedValues.size > 0 && (
              <>
                <Separator />
                <CommandItem onSelect={onReset} className='justify-center'>
                  Clear filters
                </CommandItem>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
