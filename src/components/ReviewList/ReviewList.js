import Data from "../../data"
import ReviewListItem from "./ReviewListItem"
import { Link } from "react-router-dom"

const reviews = Data.map((ele, index) => {
  return (
    <Link to={`/tvshow/${index}`}>
      <ReviewListItem key={index} {...ele} />
    </Link>
  )
});

export default function ReviewList(props) {
  return (
    <div>
      <section className="lists">{reviews}</section>
    </div>
  )
}
