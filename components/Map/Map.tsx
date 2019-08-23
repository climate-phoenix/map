import ReactMapGL, { ViewportChangeHandler, ViewState } from 'react-map-gl'
import { Layer, Sources, GeoJSONSourceRaw } from 'mapbox-gl'

import defaultStyle from './style.json'
import { useState } from 'react'

import carbon from '../../data/new-carbon-emissions.json'
import { COUNTRIES } from '../../utils'

const categories = [
  {
    name: 'green',
    description: 'below 2',
    hue: '120',
    min: '0',
    max: '2',
  },
  {
    name: 'yellowgreen',
    description: 'between 2 and 4',
    hue: '90',
    min: '2',
    max: '4',
  },
  {
    name: 'yellow',
    description: 'between 4 and 6',
    hue: '60',
    min: '4',
    max: '6',
  },
  {
    name: 'orange',
    description: 'between 6 and 8',
    hue: '30',
    min: '6',
    max: '8',
  },
  {
    name: 'red',
    description: 'at least 8',
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

const legendLine = category => (
  <div>
    <div className="circle"> </div> {category.description}
    <style jsx>{`
      .circle {
        background: hsl(${category.hue}, 100%, 50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        float: left;
      }
    `}</style>
  </div>
)

const legend = () => (
  <div>
    Carbon emission [t CO₂ per capita per year]
    {categories.map(c => {
      return legendLine(c)
    })}
    <style jsx>{`
      div {
        position: fixed;
        z-index: 1000;
        background: white;
        min-height: 20vh;
        min-width: 300px;
        bottom: 20px;
        right: 20px;
      }
    `}</style>
  </div>
)

export const Map = () => {
  const [viewPort, setViewPort] = useState(defaultViewPort)

  return (
    <>
      {legend()}
      <ReactMapGL
        {...viewPort}
        mapboxApiAccessToken={process.env.mapBoxToken}
        width="auto"
        height="100vh"
        mapStyle={defaultStyle}
        onViewportChange={viewPort => setViewPort(viewPort)}
        onClick={e => console.log(e)}
      />
    </>
  )
}
