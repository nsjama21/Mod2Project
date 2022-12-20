const { Router } = require("express")
const express = require("express")
const router = express.Router()
const TVShow = require("../models/tvshows")

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// SEED ROUTE (seeding data into database)
router.get("/seed", (req, res) => {
  TVShow.create([
    { title: "X-Files", review: "AAPL", positive: true },
    { title: "The Closer", review: "AAPL", positive: true },
    { title: "Breaking Bad", review: "AAPL", positive: true },
    { title: "Boardwalk Empire", review: "AAPL", positive: true },
    { title: "Medium", review: "AAPL", positive: true },
    { title: "The Wire", review: "AAPL", positive: true },
    { title: "Black Monday", review: "AAPL", positive: true },
    { title: "House of Lies", review: "AAPL", positive: true },
    { title: "Friends", review: "AAPL", positive: true },
    { title: "Sherlock Holmes", review: "AAPL", positive: true },
    { title: "House", review: "AAPL", positive: true },
    { title: "Justified", review: "AAPL", positive: true },
    { title: "Mad Men", review: "AAPL", positive: true },
    { title: "Orange Is The New Black", review: "AAPL", positive: true },
    { title: "Veronica Mars", review: "AAPL", positive: true },
    { title: "Frasier", review: "AAPL", positive: true },
    { title: "Better Caul Saul", review: "AAPL", positive: true },
    { title: "Friday Night Lights", review: "AAPL", positive: true },
    { title: "Veep", review: "AAPL", positive: true },
    { title: "The Killing", review: "AAPL", positive: true }

  ], (err, data) => {
    res.redirect("/tvshows")
  })
})

//INDEX
// router.get("/", (req, res) => {
//   // Query model to return all moviews
//   TVShow.find({}, (error, allTVShows) => {
//     if (!error) {
//       res.status(200).render("Index", {
//         movies: allTVShows
//       })
//     } else {
//       res.status(400).send(error)
//     }
//   })
// })


//NEW
router.get("/new", (req, res) => {
  res.render("New")
})

module.exports = router