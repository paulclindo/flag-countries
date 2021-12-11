import {useQuery} from 'react-query'
import {getCountries} from '../api/countries'

export const useCountries = (countryName: string, countryRegion: string) => {
  const result = useQuery(['countries', countryName, countryRegion], () =>
    getCountries({countryName, countryRegion})
  )

  return {
    ...result,
    countries: result.data,
  }
}
