import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
// import { getUser } from '../../utilities/users-service';
// import AuthPage from '../AuthPage/AuthPage';
import Dashboard from "../../pages/Dashboard"
import NewReviewPage from '../NewReviewPage/NewReviewPage';
import ReviewHistoryPage from '../ReviewHistoryPage/ReviewHistoryPage';
import TVShows from '../../components/LandingPage/TVShows';



export default function App() {
  const [review, setReview] = useState(null);
  const [tvshow, setTVShow] = useState(null)
  return (
    <main className={styles.App}>

      <>
        <Routes>

          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route path="/reviews/new" element={<NewReviewPage />} />
          <Route path="/reviews/history" element={<ReviewHistoryPage />} />
          <Route path="/tvshows/:title" element={<TVShows />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
          <Route path="/*" element={<Navigate to="/reviews/new" />} />
        </Routes>
      </>

    </main>
  );
}
