import { useState } from 'react';
import { addTVShow } from '../../utilities/tvshows-api';
import { useNavigate } from 'react-router-dom';
import styles from './AddTVShow.module.css';




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function AddTVShow() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    review: "",
    posterURL: ""

  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tvshow = await addTVShow(formData);
    navigate('/tvshows');
    console.log(tvshow);
  }


  return (
    <div>
      <h2>Add a New TV Show</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Title</label><br />
        <input type="text" name="title" onChange={handleChange} required /><br />
        <label>PosterURL</label><br />
        <input type="text" name="posterURL" onChange={handleChange} /><br />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  )
}