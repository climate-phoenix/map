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

const LegendLine = ({ category }) => (
  <div className="legend-line-wrapper">
    <div className="circle"> </div> <div> {category.description}</div>
    <style jsx>{`
      .legend-line-wrapper {
        margin-bottom: 3px 0 3px 0;
      }
      .circle {
        background: hsl(${category.hue}, 100%, 50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        float: left;
        margin-right: 5px;
      }
    `}</style>
  </div>
)

export const Legend = () => (
  <div>
    Carbon emission [t CO₂ per capita per year]
    <hr />
    {categories.map(c => {
      return <LegendLine category={c} />
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
        padding: 10px;
      }
    `}</style>
  </div>
)
