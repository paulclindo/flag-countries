export type CountryCardProps = {
  name: string
  population: string
  region: string
  capitalCity: string
  imgUrl: string
}

export type CountryRegions =
  | 'all'
  | 'Americas'
  | 'Europe'
  | 'Asia'
  | 'Africa'
  | 'Oceania'
