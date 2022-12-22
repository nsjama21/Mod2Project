import styles from './ReviewList.module.css';

export default function ReviewList({ listTVShows, handleAddToReviews }) {
  return (
    <div className={styles.ReviewList}>
      {listTVShows.title}
      <button className="btn-sm" onClick={() => handleAddToReviews(listTVShows._id)}>
        ADD </button>
    </div>
  );
}