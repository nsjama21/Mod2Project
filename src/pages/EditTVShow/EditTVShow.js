import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import * as tvshowsAPI from '../../utilities/tvshows-api';
import styles from './EditTVShow.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function EditTVShow() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [tvshow, setTVShow] = useState(null);

  const getTVShow = async () => {
    const pulledTVShow = await tvshowsAPI.showTVShow(id);
    console.log(pulledTVShow)
    setTVShow(pulledTVShow);
  }

  useEffect(() => {
    getTVShow();
  }, []);

  const [formData, setFormData] = useState(null);

  const getFormData = async => {
    setFormData(tvshow);
  };


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleUpdate = async (event) => {
    event.preventDefault();
    const tvshow = await tvshowsAPI.updateTVShow(id, formData);
    navigate(`/tvshows/listing/${id}`);
    console.log(tvshow);
  }


  const loaded = () => {
    return (
      <div>
        <h2>Editing: {tvshow.title}</h2>
        <form autoComplete="off" onSubmit={handleUpdate}>
          <label>Title</label><br />
          <input type="text" name="title" onChange={handleChange} defaultValue={tvshow.title} required /><br />
          <label>Review</label><br />
          <input type="text" name="review" onChange={handleChange} defaultValue={tvshow.review} /><br />
          <label>PosterURL</label><br />
          <input type="text" name="posterURL" onChange={handleChange} defaultValue={tvshow.posterURL} /><br />
          <input type="submit" value="Update TVShow" />
        </form>
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