import { Nav } from './Site/Nav'

export const Layout = ({
  children,
  currentToggles,
  onNavigation,
}: {
  children: JSX.Element
  currentToggles: any // TODO: Fix this type later! Sorry about this :D
  onNavigation: ({ slug: string }) => void
}) => (
  <main>
    <Nav onNavigation={onNavigation} currentToggles={currentToggles} />
    {children}
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}</style>
  </main>
)
