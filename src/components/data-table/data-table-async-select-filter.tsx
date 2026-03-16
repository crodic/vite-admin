'use client'

import * as React from 'react'
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

  const [options, setOptions] = React.useState<Option[]>([])
  const [loading, setLoading] = React.useState(false)

  const [search, setSearch] = React.useState('')
  const [debouncedSearch, setDebouncedSearch] = React.useState('')

  const [offset, setOffset] = React.useState(0)
  const [totalItems, setTotalItems] = React.useState<number>()

  const requestIdRef = React.useRef(0)
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
      setOffset(0)
    }, 300)

    return () => clearTimeout(timer)
  }, [search])

  /*
  fetch data
  */

  const fetchData = React.useCallback(
    async (append = false) => {
      const requestId = ++requestIdRef.current

      setLoading(true)

      try {
        const params: PaginateQueryParams = {
          limit,
          offset,
          [searchKey]: debouncedSearch,
        }

        const res = await fetchOptions(params)

        if (requestId !== requestIdRef.current) return

        setOptions((prev) => (append ? [...prev, ...res.data] : res.data))

        setTotalItems(res.meta?.totalItems)
      } finally {
        if (requestId === requestIdRef.current) {
          setLoading(false)
        }
      }
    },
    [fetchOptions, limit, offset, debouncedSearch, searchKey]
  )

  React.useEffect(() => {
    if (!open) return
    fetchData(offset !== 0)
  }, [offset, debouncedSearch, open, fetchData])

  /*
  infinite scroll
  */

  const hasNextPage =
    totalItems === undefined || offset + options.length < totalItems

  const loadMore = React.useCallback(() => {
    if (!hasNextPage || loading) return
    setOffset((prev) => prev + limit)
  }, [hasNextPage, loading, limit])

  /*
  virtualization
  */

  const rowVirtualizer = useVirtualizer({
    count: options.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 32,
    overscan: 8,
  })

  const virtualItems = rowVirtualizer.getVirtualItems()

  React.useEffect(() => {
    if (!virtualItems.length) return

    const lastItem = virtualItems[virtualItems.length - 1]

    if (lastItem.index >= options.length - 5) {
      loadMore()
    }
  }, [virtualItems, options.length, loadMore])

  /*
  select option
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
        <Command>
          <CommandInput
            placeholder={title}
            value={search}
            onValueChange={setSearch}
          />

          <CommandList>
            <CommandEmpty>
              {loading && options.length === 0 ? (
                <div className='flex items-center gap-2 p-2 text-sm'>
                  <Loader2 className='h-4 w-4 animate-spin' />
                  Searching...
                </div>
              ) : (
                'No results'
              )}
            </CommandEmpty>

            <CommandGroup>
              <div ref={parentRef} className='max-h-72 overflow-auto'>
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

                {loading && options.length > 0 && (
                  <div className='flex items-center justify-center p-2'>
                    <Loader2 className='h-4 w-4 animate-spin' />
                  </div>
                )}
              </div>
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
