import {useQuery} from 'react-query'
import {getCountryDetail} from '../api/countries'

export const useCountryDetail = (countryCode: string) => {
  const result = useQuery(
    ['country-detail', countryCode],
    () => getCountryDetail(countryCode),
    {
      enabled: !!countryCode,
    }
  )
  return {
    ...result,
    country: result.data?.[0],
  }
}
