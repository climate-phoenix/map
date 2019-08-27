const Logo = () => {
  return (
    <div>
      <img
        src="static/logo.png"
        alt="Logo of climate phoenix - a phoenix hugging the earth"
      />
      <style jsx>
        {`
          img {
            height: 64px;
          }
        `}
      </style>
    </div>
  )
}

const NavItem = ({ children, color, backgroundColor }) => {
  return (
    <div className="nav-item-wrapper">
      {children}
      <style jsx>{`
        .nav-item-wrapper {
          height: 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 150px;
          text-align: center;
          background-color: ${backgroundColor || '#b22222'};
          color: ${color || 'white'};
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

const NAV_ITEMS = [
  {
    key: 0,
    title: 'Carbon Emissions',
    color: 'white',
    backgroundColor: '#b22222',
  },
  {
    key: 1,
    title: 'Current Crisis',
    color: 'white',
    backgroundColor: '#ff851b',
  },
]

export const Nav = () => {
  return (
    <div className="nav-wrapper">
      <Logo />
      {NAV_ITEMS.map(navItem => (
        <NavItem
          color={navItem.color}
          backgroundColor={navItem.backgroundColor}
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
