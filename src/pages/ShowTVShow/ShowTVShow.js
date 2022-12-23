import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as tvshowsAPI from '../../utilities/tvshows-api';
import styles from './ShowTVShow.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function TVShow() {

  const [tvshow, setTVShow] = useState(null);

  const { id } = useParams();
  // console.log(id);

  const getTVShow = async () => {
    const pulledTVShow = await tvshowsAPI.showTVShow(id);
    // console.log(pulledTVShow)
    setTVShow(pulledTVShow);
  }

  useEffect(() => {
    getTVShow();
  }, [])

  console.log(tvshow);

  const navigate = useNavigate();

  const handleDelete = async () => {
    await tvshowsAPI.deleteTVShow(id);
    navigate('/tvshows');
  }

  const loaded = () => {
    return (
      <div>
        <h2>{tvshow.title}</h2>
        <p>{tvshow._id}</p>
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
        <Link to={`/tvshows/listing/${tvshow._id}/edit`}><button>Edit</button></Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    )
  }

  const loading = () => {
    <p>Loading ...</p>
  }

  return (
    tvshow ? loaded() : loading()
  )
}