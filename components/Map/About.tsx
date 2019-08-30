export const About = () => (
  <div className="about-wrapper">
    Climate Phoenix
    <hr />
    Climate Phoenix symbolizes a{' '}
    <a target="_blank" href="https://en.wikipedia.org/wiki/Phoenix_(mythology)">
      Phoenix
    </a>{' '}
    trying to protect the earth. We want to surface the criticality of the
    current climate situation by creating awareness and share resources for
    people to act.
    <hr />
    <div>
      <strong>Meet the Team</strong>
      <ul>
        <li>
          <a target="_blank" href="https://twitter.com/yuvikakoul">
            Yuvika
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/_marktani">
            Nilan
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/maticzav">
            Matic
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/huv1k">
            Lukáš
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/divyenduz/">
            Divyendu
          </a>
        </li>
      </ul>
      <br />
      Say Hi 👋
    </div>
    <style jsx>{`
      .about-wrapper {
        position: fixed;
        z-index: 1000;
        background: white;
        min-height: 20vh;
        min-width: 300px;
        width: 500px;
        top: 20px;
        right: 20px;
        padding: 10px;
      }
      .team-link {
        display: block;
      }
      a {
        color: black;
      }
    `}</style>
  </div>
)
