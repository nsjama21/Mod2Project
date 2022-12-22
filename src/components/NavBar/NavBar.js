import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/"><h1>TV Shows</h1></Link>
      <div className={styles.NavBar}>
        <Link to="/tvshows"><h3>TV Shows</h3></Link>
        <Link to="/about"><h3>About</h3></Link>
      </div>
    </nav>
  )
}