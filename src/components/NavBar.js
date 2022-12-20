import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/"><h1>TV Shows</h1></Link>
      <div className='tvshows-about'>
        <Link to="/tvshows"><h3>TV Shows</h3></Link>
        <Link to="/about"><h3>About</h3></Link>
      </div>
    </nav>
  )
}