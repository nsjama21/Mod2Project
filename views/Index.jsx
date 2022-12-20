// const React = require("react")
// const DefaultLayout = require("./layout/Default")

// class Index extends React.Component {
//   render() {
//     const  { tvshows } = this.props
//     return (
//       <DefaultLayout title="TV Shows Index Page">
//         <nav>
//           <a href="/tvshows/new">Create TV Show</a>
//         </nav>
//         <ul>
//           {
//             tvshows.map((tvshow, i) => {
//               return (
//                 <li> 
//                   The{' '}
//                   <a  href={`/tvshows/${tvshow._id}`}>{tvshow.name}</a>
//                   {" "}
//                   is {tvshow.title} <br />
//                   {
//                    tvshow.positive
//                     ? "It is RAVE REVIEW!!" 
//                     : "It is a RAVING LUNATIC, NEGATIVE REVIEW!!"

//                   }
//                   <br />
//                   <a href={`/tvshows/${tvshow._id}/edit`}>Edit This TV Show</a>
//                   <form action={`/tvshows/${tvshow._id}?_method=DELETE`} method="POST">
//                     <input type="submit" value="DELETE" />
//                   </form>
//                 </li>
//               )
//             })
//           }
//         </ul>
//       </DefaultLayout>
//     )
//   } 
// }

// module.exports = Index