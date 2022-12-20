import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../data';

export default function TVShows() {

  const [tvshow, setTVShow] = useState(null);
  const { title } = useParams();



  useEffect(() => {
    const getTVShow = async () => {
      try {
        const data = Data.find(theTVShow => theTVShow.title === title);
        setTVShow(data);
      } catch (error) {
        console.error(error);
      }
    }

    getTVShow();
  }, [title]);



  const loaded = () => {
    return (
      <div>
        <h2>{tvshow.title}</h2>
        <h2>{tvshow.review}</h2>
        <img src={tvshow.image} />
        <h3>{tvshow.positive}</h3>
      </div>
    )
  }

  const loading = () => {
    return (
      <h2>...Loading...</h2>
    )
  }

  return (
    tvshow && tvshow.title ? loaded() : loading()
  )
}