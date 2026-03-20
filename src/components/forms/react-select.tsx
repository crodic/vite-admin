import { useState, type ReactElement } from 'react'
import type { GroupBase } from 'react-select'
import { withAsyncPaginate } from 'react-select-async-paginate'
import type {
  UseAsyncPaginateParams,
  ComponentProps,
} from 'react-select-async-paginate'
import Creatable from 'react-select/creatable'
import type { CreatableProps } from 'react-select/creatable'

type AsyncPaginateCreatableProps<
  OptionType,
  Group extends GroupBase<OptionType>,
  Additional,
  IsMulti extends boolean,
> = CreatableProps<OptionType, IsMulti, Group> &
  UseAsyncPaginateParams<OptionType, Group, Additional> &
  ComponentProps<OptionType, Group, IsMulti>

type AsyncPaginateCreatableType = <
  OptionType,
  Group extends GroupBase<OptionType>,
  Additional,
  IsMulti extends boolean = false,
>(
  props: AsyncPaginateCreatableProps<OptionType, Group, Additional, IsMulti>
) => ReactElement

const AsyncPaginateCreatable = withAsyncPaginate(
  Creatable
) as AsyncPaginateCreatableType

export default AsyncPaginateCreatable

type Option = {
  value: string
  label: string
}

export const TestComponent = () => {
  const [value, setValue] = useState<Option[]>([])
  return (
    <AsyncPaginateCreatable<Option, any, { page: number }, true>
      isMulti
      value={value}
      onChange={(val) => {
        setValue(val as Option[])
      }}
      loadOptions={async (search, _loadedOptions, { page }) => {
        if (!search) {
          return {
            options: [],
            hasMore: false,
            additional: { page: 1 },
          }
        }

        const res = await fetch(
          `https://api.github.com/search/users?q=${search}&page=${page}&per_page=10`
        ).then((r) => r.json())

        const options = res.items.map((user: any) => ({
          value: user.login,
          label: user.login,
        }))

        return {
          options,
          hasMore: res.items.length === 10,
          additional: {
            page: page + 1,
          },
        }
      }}
      // ================= CREATE =================
      onCreateOption={(inputValue) => {
        const newOption = {
          value: inputValue,
          label: inputValue,
        }

        setValue((prev) => [...prev, newOption])
      }}
      additional={{ page: 1 }}
      debounceTimeout={300}
      isClearable
      placeholder='Search GitHub users...'
    />
  )
}
