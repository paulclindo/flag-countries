import * as React from 'react'
import { Box, Stack, Typography } from '@mui/material'

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
    <Box
      sx={{
        maxWidth: '280px',
        borderRadius: '6px',
        bgcolor: 'background.card',
        boxShadow:
          '0px 20px 25px -5px rgba(0,0,0,0.1) , 0px 10px 10px -5px rgba(0,0,0,0.04)',
      }}
    >
      <Box
        sx={{
          aspectRatio: '16/9',
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
      </Box>
      <Stack
        spacing={0.6}
        sx={{
          p: 4,
          pb: 5.4,
          color: 'text.primary',
        }}
      >
        <Typography variant="h6" fontWeight="800" sx={{ mb: 1.2 }}>
          {name}
        </Typography>
        <Typography fontWeight="600">
          Population:{' '}
          <Typography component="span" color="text.secondary">
            {population}
          </Typography>
        </Typography>
        <Typography fontWeight="600">
          Region:{' '}
          <Typography component="span" color="text.secondary">
            {region}
          </Typography>
        </Typography>
        <Typography fontWeight="600">
          Capital:{' '}
          <Typography component="span" color="text.secondary">
            {capitalCity}
          </Typography>
        </Typography>
      </Stack>
    </Box>
  )
}

export default CountryCard
