/** @jsx jsx */
import {jsx} from '@emotion/react'

type CountryCardProps = {
  name: string
  population: string
  region: string
  capitalCity: string
  imgUrl: string
}

const CountryCard = ({
  name,
  population,
  region,
  capitalCity,
  imgUrl,
}: CountryCardProps) => {
  return (
    <div
      css={{
        borderRadius: '6px',
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.06)',
        overflow: 'hidden',
      }}
    >
      <div
        css={{
          paddingBottom: '56.25%',
          height: 0,
          position: 'relative',
          '& img': {
            position: 'absolute',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        }}
      >
        <img src={imgUrl} alt={`${name} flag`} loading="lazy" />
      </div>
      <div
        css={{
          padding: '20px',
          paddingBottom: '32px',
          h3: {
            margin: 0,
            marginBottom: 12,
          },
          p: {
            margin: 0,
            fontSize: '1rem',
            '& + p': {
              marginTop: '6px',
            },
          },
        }}
      >
        <h3 css={{marginBottom: '16px', fontWeight: 800}}>{name}</h3>
        <p css={{fontWeight: 600}}>
          Population: <span css={{fontWeight: 300}}>{population}</span>
        </p>
        <p css={{fontWeight: 600}}>
          Region: <span css={{fontWeight: 300}}>{region}</span>
        </p>
        <p css={{fontWeight: 600}}>
          Capital: <span css={{fontWeight: 300}}>{capitalCity}</span>
        </p>
      </div>
    </div>
  )
}

export default CountryCard
