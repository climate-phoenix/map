import ReactMapGL, { ViewportChangeHandler, ViewState } from 'react-map-gl'
import { Layer, Sources, GeoJSONSourceRaw } from 'mapbox-gl'

import defaultStyle from './style.json'
import { useState } from 'react'

import carbon from '../../data/new-carbon-emissions.json'
import { COUNTRIES } from '../../utils'

const carbonsPerCapita = Object.entries(carbon).map(
  ([_, country]) => Number(country.emissionPerCapita2017) || 0,
)

const categories = [
  {
    name: 'green',
    hue: '120',
    min: '0',
    max: '2',
  },
  {
    name: 'yellowgreen',
    hue: '90',
    min: '2',
    max: '4',
  },
  {
    name: 'yellow',
    hue: '60',
    min: '4',
    max: '6',
  },
  {
    name: 'orange',
    hue: '30',
    min: '6',
    max: '8',
  },
  {
    name: 'red',
    hue: '0',
    min: '8',
    max: '10000',
  },
]

const calculateColor = carbon => {
  if (carbon < 2) {
    return 120
  } else if (carbon < 4) {
    return 90
  } else if (carbon < 6) {
    return 60
  } else if (carbon < 8) {
    return 30
  } else {
    return 0
  }
}

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
    carbon[country].emissionPerCapita2017
  ) {
    const color = calculateColor(carbon[country].emissionPerCapita2017)

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
