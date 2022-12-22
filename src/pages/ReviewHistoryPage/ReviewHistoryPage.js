import styles from './ReviewHistoryPage.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as reviewsAPI from '../../utilities/reviews-api';
// import Logo from '../../components/Logo/Logo';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';
// import OrderList from '../../components/OrderList/OrderList';
import ListingDetail from '../../components/ListingDetail/ListingDetail';


export default function ReviewHistoryPage({ review, setReview }) {
  /*--- State --- */
  const [reviews, setReviews] = useState([]);
  // const [activeOrder, setActiveOrder] = useState(null);

  /*--- Side Effects --- */
  useEffect(function () {
    // Load previous orders (paid)
    async function fetchReviewHistory() {
      const reviews = await reviewsAPI.history();
      setReviews(reviews);
      // If no orders, activeOrder will be set to null below

    }
    fetchReviewHistory();
  }, []);

  /*--- Event Handlers --- */
  // function handleSelectReview(review) {
  //   setActiveOrder(order);
  // }

  /*--- Rendered UI --- */
  return (
    <main className={styles.ReviewHistoryPage}>
      <aside className={styles.aside}>
        <Link to="/reviews/new" className="button btn-sm">NEW REVIEW</Link>
      </aside>
      <ListingDetail
      />
    </main>
  );
}