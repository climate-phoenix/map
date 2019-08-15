export const Layout = ({ children }: { children: JSX.Element }) => (
  <main>
    {children}
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}</style>
  </main>
)
