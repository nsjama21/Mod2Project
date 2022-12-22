import { Link } from 'react-router-dom';
import Data from "../data"

export default function Dashboard() {
  return (
    <section>
      <h2>Most Polarizing TV Show Reviews Ever!</h2>
      {
        Data.map((tvshow) => {
          const { title, posterURL } = tvshow;

          return (
            <Link key={title} to={`/tvshows/${title}`}>
              <h3>{title}</h3>
              <img src={posterURL} />

            </Link>
          );
        })
      }
    </section>
  )
}