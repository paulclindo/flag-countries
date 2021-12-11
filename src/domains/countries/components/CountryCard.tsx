/** @jsx jsx */
import {jsx} from '@emotion/react'
import {md} from '../../app/styles/breakpoints'
import {Country, CountryPreview} from '../types'
import {Link} from 'react-router-dom'

type isLoadingState = {isLoading: boolean}

function Description({
  title,
  description,
  isLoading,
}: {
  title: string
  description: string
} & isLoadingState) {
  return (
    <div css={{display: 'flex', marginBottom: 6}}>
      <dt css={{fontWeight: 600}}>{title}:</dt>
      <dd css={{marginLeft: 10, fontWeight: 300}}>
        {isLoading ? 'Loading...' : description}
      </dd>
    </div>
  )
}

const CountrySmallCard = ({
  isLoading,
  name,
  population,
  region,
  capitalCity,
  imgUrl,
  code,
}: isLoadingState & CountryPreview) => {
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
        }}
      >
        <img
          css={{
            position: 'absolute',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          src={
            isLoading
              ? 'https://cdn-ember.fatsoma.com/assets/components/page/event/card/placeholder-2b4e76c34bea2cea68ac87f7479cb5ce.svg'
              : imgUrl
          }
          alt={`${name} flag`}
          loading="lazy"
        />
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
          <h3 css={{fontWeight: 800}}>{isLoading ? 'Loading...' : name}</h3>
        </Link>
        <dl css={{margin: 0}}>
          <Description
            isLoading={isLoading}
            title="Population"
            description={population}
          />
          <Description
            isLoading={isLoading}
            title="Region"
            description={region}
          />
          <Description
            isLoading={isLoading}
            title="Capital"
            description={capitalCity}
          />
        </dl>
      </div>
    </article>
  )
}

function CountryBigCard({
  isLoading,
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
}: isLoadingState & Country) {
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
          }}
        >
          <img
            css={{
              position: 'absolute',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            src={
              isLoading
                ? 'https://cdn-ember.fatsoma.com/assets/components/page/event/card/placeholder-2b4e76c34bea2cea68ac87f7479cb5ce.svg'
                : imgUrl
            }
            alt={`${name} flag`}
            loading="lazy"
          />
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
        <h2>{isLoading ? 'Loading...' : name}</h2>
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
            <Description
              isLoading={isLoading}
              title="Native Name"
              description={nativeName}
            />
            <Description
              isLoading={isLoading}
              title="Population"
              description={population}
            />
            <Description
              isLoading={isLoading}
              title="Region"
              description={region}
            />
            <Description
              isLoading={isLoading}
              title="Sub Region"
              description={subRegion}
            />
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
            <Description
              isLoading={isLoading}
              title="Capital"
              description={capitalCity}
            />
            <Description
              isLoading={isLoading}
              title="Top Level Domain"
              description={domain}
            />
            <Description
              isLoading={isLoading}
              title="Currencies"
              description={currencies}
            />
          </div>
        </div>
        <div css={{display: 'flex', marginTop: 50}}>
          <dt css={{fontWeight: 600, margin: 0, marginRight: 12}}>
            Languages:
          </dt>
          <div css={{display: 'flex'}}>
            {isLoading
              ? 'Loading'
              : languages?.map((lang) => (
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
