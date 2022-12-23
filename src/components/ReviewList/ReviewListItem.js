export default function ReviewListItem({ title, review, posterURL }) {
  return (
    <div className="employee-list-item">
      <h4 className="employee-name">{title}</h4>
      <p className="employee-title">{review}</p>
      <img src={posterURL} className="list-img" alt={posterURL} />
    </div>
  );
}
