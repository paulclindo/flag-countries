/** @jsx jsx */
import {jsx} from '@emotion/react'
import React from 'react'
import {useQuery} from 'react-query'
import {Link} from 'react-router-dom'
import {getCountries} from '../api/countries'
import {ReactComponent as SearchIcon} from '../assets/icons/search.svg'
import {CountrySmallCard} from '../components/CountryCard'
import {md} from '../styles/breakpoints'

export default function Home() {
  const [countryName, setCountryName] = React.useState<string>('')
  const [countryRegion, setCountryRegion] = React.useState<string>('all')

  const {
    data: countries,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery(['countries', countryName, countryRegion], () =>
    getCountries({countryName, countryRegion})
  )

  return (
    <div css={{maxWidth: 1200, padding: '0 30px', margin: '0 auto'}}>
      <div
        css={{
          display: 'flex',
          marginTop: 40,
          marginBottom: 40,
          flexDirection: 'column',
          [md]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        }}
      >
        <div css={{position: 'relative'}}>
          <SearchIcon css={{position: 'absolute', left: 26, top: 20}} />
          <input
            css={{
              background: 'white',
              border: 0,
              padding: 20,
              paddingLeft: 60,
              boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05) ',
              fontSize: '0.875rem',
              width: '100%',
              marginBottom: 10,
              [md]: {
                marginBottom: 0,
                width: 400,
              },
            }}
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => setCountryName(e.target.value)}
            value={countryName}
          />
        </div>
        <select
          name="region"
          id="region"
          css={{
            border: 0,
            background: 'white',
            padding: '15px 23px',
            boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05) ',
            alignSelf: 'end',
            width: '100%',
            [md]: {
              width: 190,
            },
          }}
          value={countryRegion}
          onChange={(e) => setCountryRegion(e.target.value)}
        >
          <option disabled value="all">
            Filter by Region
          </option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
          gridGap: '60px 40px',
        }}
      >
        {isError ? <p>Error: {error}</p> : null}
        {isLoading ? (
          Array.from({length: 8}).map((_, idx) => (
            <CountrySmallCard
              key={idx}
              name="Loading..."
              population="Loading..."
              region="Loading..."
              capitalCity="Loading..."
              imgUrl="https://cdn-ember.fatsoma.com/assets/components/page/event/card/placeholder-2b4e76c34bea2cea68ac87f7479cb5ce.svg"
            />
          ))
        ) : isSuccess && countries.length ? (
          countries.map(
            (country: {
              name: {common: string}
              cca2: string
              population: string
              region: string
              capital: string
              flags: {png: string}
            }) => (
              <Link
                key={country.cca2}
                to={`/detail/${country.cca2}`}
                css={{color: 'inherit', textDecoration: 'none'}}
              >
                <CountrySmallCard
                  key={country.name.common}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capitalCity={country.capital}
                  imgUrl={country.flags.png}
                />
              </Link>
            )
          )
        ) : isSuccess && !countries.length ? (
          <p>
            Couldn&apos;t find any countries that matches your search &rdquo;
            <span css={{fontWeight: 600}}>{countryName}</span>&rdquo;
          </p>
        ) : null}
      </div>
    </div>
  )
}
