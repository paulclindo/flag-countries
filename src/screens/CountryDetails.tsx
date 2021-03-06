/** @jsx jsx */
import {jsx} from '@emotion/react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router'
import {getCountryDetail} from '../domains/countries/api/countries'
import {CountryBigCard} from '../domains/countries/components/CountryCard'
import {md} from '../domains/app/styles/breakpoints'
import {Link} from 'react-router-dom'

export default function CountryDetails() {
  const {code} = useParams<{code: string}>()

  const {isLoading, isError, isSuccess, data, error} = useQuery(
    ['country-detail', code],
    () => getCountryDetail(code),
    {
      enabled: !!code,
    }
  )

  const country = data?.[0]
  const languages: string[] = Object.values(country?.languages || {})
  const domains = Object.values(country?.tld || {}).join(', ')
  const currencies = Object.values(country?.currencies || {})
    // @ts-ignore
    .map((c) => c.name)
    .join(', ')

  return (
    <div css={{maxWidth: 1200, padding: '50px 30px 0', margin: '0 auto'}}>
      <div css={{marginBottom: 40, [md]: {marginBottom: 80}}}>
        <Link
          to="/"
          css={{
            textDecoration: 'none',
            display: 'block',
            textAlign: 'center',
            boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.06)',
            width: 135,
            padding: 10,
            fontWeight: 300,
            fontSize: '1rem',
            background: 'var(--element-color)',
            color: 'var(--text-color)',
          }}
        >
          Back
        </Link>
      </div>
      {isError ? <p>Error: {error}</p> : null}
      {isLoading ? (
        <CountryBigCard
          name="Loading..."
          population="Loading..."
          region="Loading..."
          capitalCity="Loading..."
          nativeName="Loading..."
          subRegion="Loading..."
          domain="Loading..."
          currencies="Loading..."
          languages={['Loading...']}
          imgUrl="https://cdn-ember.fatsoma.com/assets/components/page/event/card/placeholder-2b4e76c34bea2cea68ac87f7479cb5ce.svg"
        />
      ) : isSuccess ? (
        <CountryBigCard
          name={country.name.common}
          population={country.population}
          region={country.region}
          subRegion={country.subregion}
          capitalCity={country.capital}
          imgUrl={country.flags.png}
          nativeName={country.name.common}
          domain={domains}
          currencies={currencies}
          languages={languages}
        />
      ) : null}
    </div>
  )
}
