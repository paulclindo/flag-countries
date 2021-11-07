/** @jsx jsx */
import {jsx} from '@emotion/react'
import {md} from '../styles/breakpoints'
import {Country, CountryPreview} from '../types'
import {Link} from 'react-router-dom'

function Description({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div css={{display: 'flex', marginBottom: 6}}>
      <dt css={{fontWeight: 600}}>{title}:</dt>
      <dd css={{marginLeft: 10, fontWeight: 300}}>{description}</dd>
    </div>
  )
}

const CountrySmallCard = ({
  name,
  population,
  region,
  capitalCity,
  imgUrl,
  code,
}: CountryPreview) => {
  return (
    <article
      css={{
        borderRadius: '6px',
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        background: 'var(--element-color)',
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
        <Link
          to={`/detail/${code}`}
          css={{marginBottom: '16px', color: 'inherit', textDecoration: 'none'}}
        >
          <h3 css={{fontWeight: 800}}>{name}</h3>
        </Link>
        <dl css={{margin: 0}}>
          <Description title="Population" description={population} />
          <Description title="Region" description={region} />
          <Description title="Capital" description={capitalCity} />
        </dl>
      </div>
    </article>
  )
}

function CountryBigCard({
  name,
  nativeName,
  subRegion,
  domain,
  currencies,
  languages,
  population,
  region,
  capitalCity,
  imgUrl,
}: Country) {
  return (
    <article
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: 400,
        flexWrap: 'wrap',
      }}
    >
      <div
        css={{
          flex: '1 1 100%',
          maxWidth: '100%',
          [md]: {
            flex: '1 1 45%',
            maxWidth: '45%',
          },
        }}
      >
        <div
          css={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
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
      </div>
      <dl
        css={{
          margin: 0,
          flex: '1 1 100%',
          maxWidth: '100%',
          [md]: {
            flex: '1 1 45%',
            maxWidth: '45%',
          },
        }}
      >
        <h2>{name}</h2>
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            '& p': {margin: 0, '& + p': {marginTop: 14}},
          }}
        >
          <div
            css={{
              flex: '1 1 100%',
              maxWidth: '100%',
              [md]: {
                flex: '1 1 45%',
                maxWidth: '45%',
              },
            }}
          >
            <Description title="Native Name" description={nativeName} />
            <Description title="Population" description={population} />
            <Description title="Region" description={region} />
            <Description title="Sub Region" description={subRegion} />
          </div>
          <div
            css={{
              flex: '1 1 100%',
              maxWidth: '100%',
              [md]: {
                flex: '1 1 45%',
                maxWidth: '45%',
              },
            }}
          >
            <Description title="Capital" description={capitalCity} />
            <Description title="Top Level Domain" description={domain} />
            <Description title="Currencies" description={currencies} />
          </div>
        </div>
        <div css={{display: 'flex', marginTop: 50}}>
          <dt css={{fontWeight: 600, margin: 0, marginRight: 12}}>
            Languages:
          </dt>
          <div css={{display: 'flex'}}>
            {languages?.map((lang) => (
              <dd
                key={lang}
                css={{
                  marginLeft: 0,
                  boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.06)',
                  minWidth: 80,
                  padding: '2px 6px',
                  marginRight: 10,
                  textAlign: 'center',
                  background: 'var(--element-color)',
                  color: 'var(--text-color)',
                }}
              >
                {lang}
              </dd>
            ))}
          </div>
        </div>
      </dl>
    </article>
  )
}

export {CountrySmallCard, CountryBigCard}
