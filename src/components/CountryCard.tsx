/** @jsx jsx */
import {jsx} from '@emotion/react'
import {Country, CountryPreview} from '../types'

function LabelRow({label, value}: {label: string; value: string}) {
  return (
    <p css={{fontWeight: 600}}>
      {label} <span css={{fontWeight: 300}}>{value}</span>
    </p>
  )
}

const CountrySmallCard = ({
  name,
  population,
  region,
  capitalCity,
  imgUrl,
}: CountryPreview) => {
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
        <LabelRow label="Population" value={population} />
        <LabelRow label="Region" value={region} />
        <LabelRow label="Capital" value={capitalCity} />
      </div>
    </div>
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
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: 400,
        flexWrap: 'wrap',
      }}
    >
      <div css={{flex: '1 1 45%', maxWidth: '45%'}}>
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
      <div css={{flex: '1 1 45%', maxWidth: '45%'}}>
        <h2>{name}</h2>
        <div
          css={{display: 'flex', '& p': {margin: 0, '& + p': {marginTop: 14}}}}
        >
          <div>
            <LabelRow label="Native Name" value={nativeName} />
            <LabelRow label="Population" value={population} />
            <LabelRow label="Region" value={region} />
            <LabelRow label="Sub Region" value={subRegion} />
          </div>
          <div>
            <LabelRow label="Capital" value={capitalCity} />
            <LabelRow label="Top Level Domain" value={domain} />
            <LabelRow label="Currencies" value={currencies} />
          </div>
        </div>
        <div css={{display: 'flex', marginTop: 14}}>
          <p css={{fontWeight: 600, margin: 0, marginRight: 12}}>Languages:</p>
          <div css={{display: 'flex', '& div': {marginLeft: 10}}}>
            {languages?.map((lang) => (
              <div
                key={lang}
                css={{
                  boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.06)',
                  minWidth: 80,
                  textAlign: 'center',
                }}
              >
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export {CountrySmallCard, CountryBigCard}
