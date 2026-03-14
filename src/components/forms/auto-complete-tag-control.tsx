'use client'

import {
  type ComponentPropsWithRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useFormContext } from 'react-hook-form'
import {
  classNamesSelect,
  componentsSelect,
  stylesSelect,
  themeSelect,
} from '@/styles/styles-config'
import Select, {
  type MultiValue,
  type OnChangeValue,
  type SingleValue,
} from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { Input } from '../ui/input'

export type OptionValue = string | number | boolean

export interface Option {
  id: OptionValue
  name: string
  value?: OptionValue
}

interface SelectOption {
  value: OptionValue
  label: string
}

const convertToSelectOption = (option: Option): SelectOption => ({
  value: option.id,
  label: option.name,
})

type SelectProps = ComponentPropsWithRef<typeof Select<SelectOption, boolean>>

type Props = Omit<SelectProps, 'options' | 'value' | 'onChange'> & {
  value: OptionValue | OptionValue[] | null | undefined
  onChange: (value: OptionValue | OptionValue[] | undefined) => void

  options?: Option[]
  onSearch?: (keyword: string) => Promise<Option[]>

  onCreateOption?: (
    inputValue: string
  ) => Promise<Option[] | Option> | Option[] | Option
}

const AutoCompleteTagControl = ({
  onChange,
  value,
  name,
  options = [],
  onSearch,
  onCreateOption,
  isMulti = false,
  isLoading = false,
  ref,
  ...props
}: Props) => {
  const form = useFormContext()

  const [inputValue, setInputValue] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  const [remoteOptions, setRemoteOptions] = useState<SelectOption[]>([])
  const [searchLoading, setSearchLoading] = useState(false)

  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  /*
     --------------------------------
     Backend search
     --------------------------------
    */

  const handleSearch = useCallback(
    (keyword: string) => {
      if (!onSearch) return

      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }

      debounceRef.current = setTimeout(async () => {
        try {
          setSearchLoading(true)

          const data = await onSearch(keyword)

          setRemoteOptions(data.map(convertToSelectOption))
        } finally {
          setSearchLoading(false)
        }
      }, 400)
    },
    [onSearch]
  )

  /*
     --------------------------------
     Static filter (fallback mode)
     --------------------------------
    */

  const filteredOptions = useMemo(() => {
    if (!inputValue) {
      return options.slice(0, 20).map(convertToSelectOption)
    }

    const lowerInput = inputValue.toLowerCase()

    return options
      .filter((option) => option.name.toLowerCase().includes(lowerInput))
      .slice(0, 20)
      .map(convertToSelectOption)
  }, [options, inputValue])

  /*
     --------------------------------
     Selected value mapping
     --------------------------------
    */

  const selectedValue = useMemo(() => {
    if (value == null) {
      return isMulti ? [] : null
    }

    const source = onSearch ? remoteOptions : options.map(convertToSelectOption)

    if (isMulti) {
      const values = Array.isArray(value) ? value : [value]

      return source.filter((option) => values.includes(option.value))
    }

    return source.find((option) => option.value === value) ?? null
  }, [value, isMulti, options, remoteOptions, onSearch])

  /*
     --------------------------------
     Change handler
     --------------------------------
    */

  const handleOnChange = useCallback(
    (v: OnChangeValue<SelectOption, boolean>) => {
      if (v == null) {
        if (name) {
          form.resetField(name, {
            defaultValue: isMulti ? [] : null,
          })
        }

        onChange(isMulti ? [] : undefined)
        return
      }

      const newValue = Array.isArray(v)
        ? (v as MultiValue<SelectOption>).map((o) => o.value)
        : ((v as SingleValue<SelectOption>)?.value ?? undefined)

      onChange(newValue)
    },
    [form, name, onChange, isMulti]
  )

  /*
     --------------------------------
     Create option
     --------------------------------
    */

  const handleCreateOption = useCallback(
    async (input: string) => {
      if (!onCreateOption) return

      try {
        setIsCreating(true)

        const result = await onCreateOption(input)

        const newOptions = Array.isArray(result) ? result : [result]

        const mapped = newOptions.map(convertToSelectOption)

        if (isMulti) {
          const current = Array.isArray(selectedValue) ? selectedValue : []

          handleOnChange([...current, ...mapped])
        } else {
          handleOnChange(mapped[0] ?? null)
        }
      } finally {
        setIsCreating(false)
      }
    },
    [onCreateOption, selectedValue, isMulti, handleOnChange]
  )

  /*
     --------------------------------
     Options source
     --------------------------------
    */

  const selectOptions = onSearch ? remoteOptions : filteredOptions

  /*
     --------------------------------
     Common props
     --------------------------------
    */

  const commonProps = {
    ref,
    value: selectedValue,
    onChange: handleOnChange,
    options: selectOptions,
    isMulti,

    isSearchable: true,
    isClearable: true,

    isLoading: isLoading || isCreating || searchLoading,

    styles: stylesSelect as object,
    theme: themeSelect,
    classNames: classNamesSelect,
    components: componentsSelect,

    filterOption: onSearch ? () => true : undefined,

    onInputChange: (val: string) => {
      setInputValue(val)

      if (onSearch) {
        handleSearch(val)
      }
    },

    noOptionsMessage: ({ inputValue }: { inputValue: string }) =>
      inputValue.trim() === '' ? 'Type to search' : 'No results found',

    ...props,
  }

  /*
     --------------------------------
     Loading fallback
     --------------------------------
    */

  if (isLoading) {
    return (
      <Input disabled placeholder='Loading data, please wait a moment...' />
    )
  }

  /*
     --------------------------------
     Creatable mode
     --------------------------------
    */

  if (onCreateOption) {
    return (
      <CreatableSelect<SelectOption, boolean>
        {...commonProps}
        onCreateOption={(val) => void handleCreateOption(val)}
        formatCreateLabel={(val) => `Add "${val}"`}
        isValidNewOption={(input) =>
          input.trim().length > 0 &&
          !options.some((o) => o.name.toLowerCase() === input.toLowerCase())
        }
      />
    )
  }

  /*
     --------------------------------
     Normal select
     --------------------------------
    */

  return <Select<SelectOption, boolean> {...commonProps} />
}

export default AutoCompleteTagControl
