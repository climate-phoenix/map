import ReactMapGL, { ViewportChangeHandler, ViewState } from 'react-map-gl'
import { Layer, Sources, GeoJSONSourceRaw } from 'mapbox-gl'

import defaultStyle from './style.json'
import { useState } from 'react'

import carbon from '../../data/carbon-dioxide-emissions.json'
import { COUNTRIES } from '../../utils'

const carbonsPerCapita = Object.entries(carbon).map(
  ([_, country]) => Number(country.carbonPerCapita) || 0,
)
const max = Math.max(...carbonsPerCapita)
const min = Math.min(...carbonsPerCapita)

const countrySource = COUNTRIES.reduce((acc, country): Sources => {
  acc[country] = {
    type: 'geojson',
    data: `https://raw.githubusercontent.com/mledoze/countries/master/data/${country}.geo.json`,
  } as GeoJSONSourceRaw
  return acc
}, {})

for (const country of COUNTRIES) {
  if (
    defaultStyle.layers.findIndex(layer => layer.id === country) === -1 &&
    carbon[country] &&
    carbon[country].carbonPerCapita
  ) {
    // hsl from 0 to 120 is red to 0
    const color = 120 - (carbon[country].carbonPerCapita / (max / 100) / 100) * 120

    console.log(carbon[country].carbonPerCapita, color)

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

const legend = {
  id: 'state-population',
  source: 'abw',
  'source-layer': 'abw',
  type: 'fill',
  filter: ['==', 'isState', true],
  layout: {},
  paint: {
    'fill-color': [
      'interpolate',
      ['linear'],
      ['get', 'population'],
      0,
      '#F2F12D',
      500000,
      '#EED322',
      750000,
      '#E6B71E',
      1000000,
      '#DA9C20',
      2500000,
      '#CA8323',
      5000000,
      '#B86B25',
      7500000,
      '#A25626',
      10000000,
      '#8B4225',
      25000000,
      '#723122',
    ],
    'fill-opacity': 0.75,
  },
} as any

defaultStyle.layers.push(legend)

defaultStyle.sources = {
  ...defaultStyle.sources,
  ...countrySource,
} as any

console.log(defaultStyle.sources)
console.log(defaultStyle.layers)

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
      onClick={e => console.log(e)}
    />
  )
}
