import { useState, useEffect, useRef } from 'react';
import * as tvshowsAPI from '../../utilities/tvshows-api';
import * as reviewsAPI from '../../utilities/reviews-api';
import styles from './NewReviewPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import ReviewList from '../../components/ReviewList/ReviewList';
import CategoryList from '../../components/CategoryList/CategoryList';
import ListingDetail from '../../components/ListingDetail/ListingDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewReviewPage({ review, setReview }) {
  const [listTVShows, setlistTVShows] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  // const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function getTVShows() {
      const tvshows = await tvshowsAPI.getAll();
      categoriesRef.current = tvshows.reduce((cats, tvshow) => {
        const cat = tvshow.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setlistTVShows(tvshows);
      setActiveCat(categoriesRef.current[0]);
    }
    getTVShows();

  }, []);
  // Providing an empty 'dependency array'
  // results in the effect running after
  // the FIRST render only

  /*-- Event Handlers --*/
  async function handleAddToReviews(tvshowId) {
    const updatedReview = await reviewsAPI.addToReviews(tvshowId);
    setReview(updatedReview);
  }

  async function handleAddHistory(tvshowId) {
    const updatedReview = await reviewsAPI.history(tvshowId)
    setReview(updatedReview)
  }

  return (
    <main className={styles.NewReviewPage}>
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          setActiveCat={setActiveCat}
        />
        <Link to="/reviews" className="button btn-sm">PREVIOUS REVIEWS</Link>
      </aside>
      <ReviewList
        listTVShows={listTVShows.filter(tvshow => tvshow.category.name === activeCat)}
        handleAddToReviews={handleAddToReviews}
      />
      <ListingDetail
        listTVShows={listTVShows}
        handleAddToReviews={handleAddToReviews}
        handleAddHistory={handleAddHistory}
      />
    </main>
  );
}