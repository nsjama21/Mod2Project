import { Link } from 'react-router-dom';
import styles from './Header.module.css';




/*  ===========================================================================
//  HEADER
//  =======================================================================  */
export default function Header() {
  return (
    <header>
      <h1>TV Show Favorites</h1>
      <nav>
        <ul>
          <li><Link to={`/`} >Home</Link></li>
          <li><Link to={`/tvshows`} >TV Shows</Link></li>
          <li><Link to={`/tvshows/new`}>Add a TV Show</Link></li>
        </ul>
      </nav>
    </header>
  )
}