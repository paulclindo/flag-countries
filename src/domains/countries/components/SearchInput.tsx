/** @jsx jsx */
import {jsx} from '@emotion/react'
import React from 'react'
import {md} from '../../app/styles/breakpoints'
import {ReactComponent as SearchIcon} from '../assets/icons/search.svg'
import {ReactComponent as Loader} from '../assets/icons/loader.svg'

type SearchInputProps = {
  onChange: (value: string) => void
  isLoading: boolean
}

export default function SearchInput({isLoading, onChange}: SearchInputProps) {
  return (
    <div css={{position: 'relative'}}>
      <SearchIcon css={{position: 'absolute', left: 26, top: 20}} />
      <label htmlFor="search" className="visually-hidden">
        Search for a country
      </label>
      <input
        css={{
          background: 'var(--element-color)',
          color: 'var(--text-color)',
          border: 0,
          borderRadius: 8,
          padding: 20,
          paddingLeft: 60,
          boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05) ',
          fontSize: '0.875rem',
          width: '100%',
          marginBottom: 10,
          '::placeholder': {
            color: 'var(--text-color)',
          },
          [md]: {
            marginBottom: 0,
            width: 440,
          },
        }}
        id="search"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => onChange(e.target.value)}
      />
      {isLoading ? (
        <Loader css={{position: 'absolute', right: 20, top: 20}} />
      ) : null}
    </div>
  )
}
