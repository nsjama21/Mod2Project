import { Link } from 'react-router-dom';
import styles from "./Dashboard.module.css"
import Data from "../../data"

export default function Dashboard() {
  return (
    <section>
      <h2>Most Positive TV Show Reviews Ever!</h2>
      {
        Data.map((tvshow) => {
          const { title, posterURL } = tvshow;

          return (
            <Link key={title} to={`/tvshows/${title}`}>
              <h3>{title}</h3>
              <img className={styles.Dashboard} src={posterURL} width="500px" />
            </Link>
          );
        })
      }
    </section>
  )
}

