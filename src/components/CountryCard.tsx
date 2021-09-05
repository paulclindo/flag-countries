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
    <div>
      <img src={imgUrl} alt={`${name} flag`} />
      <p>{name}</p>
      <p>
        Population: <span>{population}</span>
      </p>
      <p>
        Region: <span>{region}</span>
      </p>
      <p>
        Capital: <span>{capitalCity}</span>
      </p>
    </div>
  )
}

export default CountryCard
