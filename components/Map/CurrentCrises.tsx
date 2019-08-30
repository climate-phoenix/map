const news = [
  {
    slug: 'nasa-climate',
    title: "Nasa'S Proof of Climate Change",
    description:
      'Many politicians and lobbyists claim that climate change is not real. NASA has the proof.',
    link: 'https://climate.nasa.gov/evidence/',
  },
  {
    slug: 'guardian-climate',
    title: 'Latest Climate News from The Guardian',
    description: 'Climate change news from around the world.',
    link: 'https://www.theguardian.com/environment/climate-change',
  },
  {
    slug: 'our-world-in-data-greenhouse-gases',
    title: 'CO₂ and Greenhouse Gas Emissions - Our World in Data',
    description:
      'A frequently updated article on CO₂ and Greenhouse Gas Emissions.',
    link: 'https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions',
  },

  {
    slug: 'climate-101',
    title: 'Climate 101 - Climate Reality',
    description: 'Climate change - learn and act',
    link: 'https://www.climaterealityproject.org/climate-101',
  },
  {
    slug: 'un-climate',
    title: 'Climate Action Summit, 23 September 2019',
    description: 'UN and climate change',
    link: 'https://www.un.org/en/climatechange/',
  },
]

const NewsItem = ({ item }) => (
  <div className="legend-line-wrapper">
    <a href={item.link} title={item.description} target="_blank">
      {item.title}
    </a>
    <style jsx>{`
      .legend-line-wrapper {
        margin-bottom: 3px 0 3px 0;
      }
      a {
        color: black;
      }
    `}</style>
  </div>
)

export const CurrentCrises = () => (
  <div>
    Latest Climate News/Updates
    <hr />
    {news.map(item => {
      return <NewsItem key={item.slug} item={item} />
    })}
    <style jsx>{`
      div {
        position: fixed;
        z-index: 1000;
        background: white;
        min-height: 20vh;
        min-width: 300px;
        bottom: 20px;
        left: 20px;
        padding: 10px;
      }
    `}</style>
  </div>
)
