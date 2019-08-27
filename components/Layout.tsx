import { Nav } from './Site/Nav'

export const Layout = ({ children }: { children: JSX.Element }) => (
  <main>
    <Nav />
    {children}
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}</style>
  </main>
)
