import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Data from "../../data";

export default function ReviewPage(props) {
  const { id } = useParams()

  return (
    <div>

      <img src={Data[id].posterURL} alt="img" />
      <h2>{Data[id].title}</h2>
      <h2>{Data[id].review}</h2>

    </div >
  )
}


// export default function ReviewPage(props) {

//   const [reviewDetails, setReviewDetails] = useState(null);

//   const { reviewID } = useParams(); // may not need this ... okay I did need this
//   console.log(reviewID)




//   useEffect(() => {

//     // Moved this inside of useEffect to get rid of useEffect warning
//     const getReviewDetails = async () => {
//       try {
//         // const response = await fetch(employeesArray);
//         // const data     = response;
//         // setEmployeeDetails(data);

//         const data = Data.find(eachReview => eachReview.id === reviewID);
//         console.log(data)
//         setReviewDetails(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     getReviewDetails();
//   }, [reviewID]);  // Added employeeId to get rid of useEffect warning

//   const loaded = () => {
//     return (
//       <section>
//         <header>
//           <Link to={"/"} ><span className='backArrow'>‹</span></Link>
//           <h1>Review</h1>
//         </header>
//         <div className='details detailsMain'>
//           <img src={reviewDetails.posterURL} alt="posterURL" />
//           <div className='detailsMainInfo'>
//             <p>{reviewDetails.title}</p>
//             <p>{reviewDetails.review}</p>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   const loading = () => {
//     return <h1>Loading Review ...</h1>
//   }

//   return (
//     reviewDetails ? loaded() : loading()
//   )
// }