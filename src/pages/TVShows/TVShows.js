import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as tvshowsAPI from '../../utilities/tvshows-api';
import styles from './TVShows.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function TVShows() {

  const [tvshows, setTVShows] = useState(null);

  const getTVShows = async () => {
    const pulledTVShows = await tvshowsAPI.getTVShows();
    setTVShows(pulledTVShows);
  }

  useEffect(() => {
    getTVShows();
  }, [])

  // work on shrinking image for posterURLs

  const loaded = () => {
    return (
      <div>
        <h2>TV Shows</h2>
        {
          tvshows.map((tvshow, i) => {
            return (
              <div>
                <Link to={`/tvshows/listing/${tvshow._id}`}><h4>{tvshow.title}</h4></Link>
                <img src={tvshow.posterURL} width="100px" />
                <p>{tvshow.review}</p>
                <ul>
                  {
                    tvshow.title.map((title) => {
                      return (
                        <li>{title}</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    )
  }

  const loading = () => {
    <p>Loading ...</p>
  }

  return (
    tvshows ? loaded() : loading()
  )
}