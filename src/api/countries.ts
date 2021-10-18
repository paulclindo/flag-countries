const API_URL_BASE = 'https://restcountries.com/v3.1'

export async function getCountries({
  countryName,
  countryRegion,
}: {
  countryName: string
  countryRegion: string
}) {
  if (countryName) {
    const searchResponse = await fetch(`${API_URL_BASE}/name/${countryName}`)
    return searchResponse.json()
  }
  if (countryRegion !== 'all') {
    const searchResponse = await fetch(
      `${API_URL_BASE}/region/${countryRegion}`
    )
    return searchResponse.json()
  }
  const response = await fetch(`${API_URL_BASE}/all`)
  return response.json()
}

export async function getCountryDetail(countryCode: string) {
  const response = await fetch(`${API_URL_BASE}/alpha?codes=${countryCode}`)
  return response.json()
}
