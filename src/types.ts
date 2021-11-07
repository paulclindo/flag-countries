export type Country = {
  name: string,
  population: string,
  code?: string,
  region: string,
  capitalCity: string,
  imgUrl: string,
  nativeName: string,
  subRegion: string,
  domain: string,
  currencies: string,
  languages: string[],
}
export type CountryPreview = Pick<
  Country,
  'name' | 'code' | 'population' | 'region' | 'capitalCity' | 'imgUrl'
>

export type CountryRegions =
  | 'all'
  | 'Americas'
  | 'Europe'
  | 'Asia'
  | 'Africa'
  | 'Oceania'
