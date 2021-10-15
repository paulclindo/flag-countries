/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as React from 'react'

interface CountryCardProps {
  name: string
  population: string
  region: string
  capitalCity: string
  imgUrl: string
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  population,
  region,
  capitalCity,
  imgUrl,
}) => {
  return (
    <div
      css={{
        maxWidth: '280px',
        borderRadius: '6px',
        bgcolor: 'background.card',
        boxShadow:
          '0px 20px 25px -5px rgba(0,0,0,0.1) , 0px 10px 10px -5px rgba(0,0,0,0.04)',
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
          padding: '16px',
          paddingBottom: '24px',
        }}
      >
        <h3 css={{ marginBottom: '8px', fontWeight: 700 }}>
          {name}
        </h3>
        <p css={{ fontWeight: 700 }}>
          Population:{' '}
          <span css={{ fontWeight: 400 }}>
            {population}
          </span>
        </p>
        <p css={{ fontWeight: 700 }}>
          Region:{' '}
          <span css={{ fontWeight: 400 }}>
            {region}
          </span>
        </p>
        <p css={{ fontWeight: 700 }}>
          Capital:{' '}
          <span css={{ fontWeight: 400 }}>
            {capitalCity}
          </span>
        </p>
      </div>
    </div>
  )
}

export default CountryCard
