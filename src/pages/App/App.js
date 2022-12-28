// import { Routes, Route } from 'react-router-dom';
// import Header from '../../components/Header/Header';
// import Home from '../Home/Home';
// import TVShows from '../TVShows/TVShows';
// import AddTVShow from '../../components/AddTVShow/AddTVShow';
// import ShowTVShow from '../ShowTVShow/ShowTVShow';
// import EditTVShow from '../EditTVShow/EditTVShow';
// import Dashboard from "../Dashboard/Dashboard"
// // import ReviewPage from '../ReviewPage/ReviewPage';
// import styles from './App.module.css';
// import ReviewPage from '../ReviewPage/ReviewPage';
// import Main from "../../components/Main"


import Reviews from "../../components/Review"

/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */

function App() {
  return (
    <Reviews />
  )
}

export default App

// export default function App() {

//   return (
//     <div>
//       <Header />
//       <Routes>
//         {/* <Route path="/" element={<Dashboard />} /> */}
//         <Route path="/" element={<Main />} />
//         <Route path="/tvshows" element={<TVShows />} />
//         <Route path="/tvshows/:id" element={<ReviewPage />} />
//         {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//         <Route path="/tvshows/new" element={<AddTVShow />} />
//         <Route path="/tvshows/listing/:id/edit" element={<EditTVShow />} />
//         <Route path="/tvshows/listing/:id" element={<ShowTVShow />} />
//       </Routes>
//     </div>
//   );
// }

