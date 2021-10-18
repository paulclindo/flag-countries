export type Country = {
  name: string
  population: string
  region: string
  capitalCity: string
  imgUrl: string
  nativeName: string
  subRegion: string
  domain: string
  currencies: string
  languages: string[]
}
export type CountryPreview = Pick<
  Country,
  'name' | 'population' | 'region' | 'capitalCity' | 'imgUrl'
>

export type CountryRegions =
  | 'all'
  | 'Americas'
  | 'Europe'
  | 'Asia'
  | 'Africa'
  | 'Oceania'
