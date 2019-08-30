const Logo = () => {
  return (
    <div>
      <img
        src="static/logo/01_phoenix.png"
        alt="Logo of climate phoenix - a phoenix hugging the earth"
      />
      <style jsx>
        {`
          div {
            background-color: #ce2029;
          }
          img {
            height: 64px;
          }
        `}
      </style>
    </div>
  )
}

const NavItem = ({
  onNavigation,
  currentToggles,
  children,
  slug,
  color,
  backgroundColor,
}) => {
  return (
    <div
      className="nav-item-wrapper"
      onClick={() => {
        onNavigation({ slug })
      }}
    >
      {children}
      <style jsx>{`
        .nav-item-wrapper {
          height: 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 150px;
          text-align: center;
          background-color: ${currentToggles[slug]
            ? backgroundColor || '#b22222'
            : 'black'};
          color: ${color || 'white'};
          cursor: pointer;

          user-select: none;
          -moz-user-select: none;
          -khtml-user-select: none;
          -webkit-user-select: none;
          -o-user-select: none;
        }
      `}</style>
    </div>
  )
}

// https://clrs.cc/
const NAV_ITEMS = [
  {
    slug: 'carbon-emissions',
    title: 'Carbon Emissions',
    color: 'white',
    backgroundColor: '#b22222',
  },
  {
    slug: 'current-crisis',
    title: 'Current Crisis',
    color: 'white',
    backgroundColor: '#ff851b',
  },
  {
    slug: 'about',
    title: 'About',
    color: 'white',
    backgroundColor: '#af851b',
  },
]

export const Nav = ({ onNavigation, currentToggles }) => {
  return (
    <div className="nav-wrapper">
      <Logo />
      {NAV_ITEMS.map(navItem => (
        <NavItem
          key={navItem.slug}
          slug={navItem.slug}
          color={navItem.color}
          backgroundColor={navItem.backgroundColor}
          onNavigation={onNavigation}
          currentToggles={currentToggles}
        >
          {navItem.title}
        </NavItem>
      ))}
      <style jsx>
        {`
          .nav-wrapper {
            display: flex;
            position: fixed;
            z-index: 1;
            width: 100%;
            background-color: transparent;
            height: 64px;
          }
        `}
      </style>
    </div>
  )
}
