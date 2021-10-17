export async function getCountries({
  countryName,
  countryRegion,
}: {
  countryName: string
  countryRegion: string
}) {
  if (countryName) {
    const searchResponse = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    )
    return searchResponse.json()
  }
  if (countryRegion !== 'all') {
    const searchResponse = await fetch(
      `https://restcountries.com/v3.1/region/${countryRegion}`
    )
    return searchResponse.json()
  }
  const response = await fetch('https://restcountries.com/v3.1/all')
  return response.json()
}
