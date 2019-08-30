import { MapContainer } from '../components/Map/MapContainer'
import { Layout } from '../components/Layout'

import { useState } from 'react'

export default () => {
  const [currentToggles, setCurrentToggles] = useState({
    'carbon-emissions': true,
    'current-crisis': true,
  })

  return (
    <Layout
      currentToggles={currentToggles}
      onNavigation={({ slug }) =>
        setCurrentToggles(prevState => {
          return {
            ...prevState,
            [slug]: !Boolean(prevState[slug]),
          }
        })
      }
    >
      <MapContainer currentToggles={currentToggles} />
    </Layout>
  )
}
