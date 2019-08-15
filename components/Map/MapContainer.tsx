import dynamic from 'next/dynamic'

export const MapContainer = dynamic(
  () => import('./Map').then(mod => mod.Map),
  {
    ssr: false,
  },
)
