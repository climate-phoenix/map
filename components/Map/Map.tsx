import ReactMapGL, { ViewportChangeHandler, ViewState } from 'react-map-gl'
import { Layer, Sources, GeoJSONSourceRaw } from 'mapbox-gl'

import defaultStyle from './style.json'
import { useState } from 'react'

import carbon from '../../data/carbon-dioxide-emissions.json'
import { COUNTRIES } from '../../utils'

const carbonsPerCapita = Object.entries(carbon).map(([_,country]) => Number(country.carbonPerCapita) || 0)
const max = Math.max(...carbonsPerCapita)

const sources = COUNTRIES.reduce((acc, country): Sources => {
  acc[country] = {
    type: 'geojson',
    data: `https://raw.githubusercontent.com/mledoze/countries/master/data/${country}.geo.json`,
  } as GeoJSONSourceRaw
  return acc
}, {})

for (const country of COUNTRIES) {
  if (defaultStyle.layers.findIndex(layer => layer.id === country) === -1 && carbon[country] && carbon[country].carbonPerCapita) {
    
    const color = 120 - (((carbon[country].carbonPerCapita / (max / 100)) / 100) * 120)

    const layer = {
      id: country,
      type: 'fill',
      source: country,
      layout: {},
      paint: {
        'fill-color': `hsl(${color}, 100%,50%)`,
        'fill-opacity': 0.4,
      },
    } as any

    defaultStyle.layers.push(layer)
  }
}

defaultStyle.sources = {
  ...defaultStyle.sources,
  ...sources,
} as any

const defaultViewPort: ViewState = {
  latitude: 47.33333333,
  longitude: 13.33333333,
  zoom: 4,
  bearing: 0,
  pitch: 0,
}

export const Map = () => {
  const [viewPort, setViewPort] = useState(defaultViewPort)

  return (
    <ReactMapGL
      {...viewPort}
      mapboxApiAccessToken={process.env.mapBoxToken}
      width="auto"
      height="100vh"
      mapStyle={defaultStyle}
      onViewportChange={viewPort => setViewPort(viewPort)}
      // onClick={(e) => console.log(e)}
    />
  )
}
