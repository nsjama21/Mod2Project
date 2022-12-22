import styles from './ListingDetail.module.css';

export default function ListingDetail({ listTVShows, handleAddToReviews, handleAddHistory }) {
  return (
    <div className={styles.ListingDetail}>
      <span>{listTVShows.title}</span>
      <button className="btn-sm" onClick={() => handleAddToReviews(listTVShows._id)}>
        ADD </button>
      <button className="btn-sm" onClick={() => handleAddHistory(listTVShows._id)}>
        ADD </button>

    </div>
  )
}