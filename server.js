const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

//Routes

const tvshowRoutes = require("./routes/api/tvshows")

// Always require and configure near the top
require('dotenv').config()

//// ===== Connection to Database =====
require("./config/database");

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))


// Put API routes here, before the "catch all" route
// app.use('/api/users', require("./routes/api/users"))

// ===== Routes =====
app.use("/api/tvshows", tvshowRoutes)

// app.use('/api/tvshows', require('./routes/api/tvshows'));
// app.use('/api/reviews', require('./routes/api/reviews'));
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Express app is running on port: ${PORT}`)
})























///****************MY ORIGINAL SETUP************************ */
// require("dotenv").config()
// const express = require("express")
// const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const app = express()
// const PORT = 3001
// const reactViews = require('express-react-views')
// const mongoose = require("mongoose")
// const methodOverride = require('method-override');
// // const fruitsController = require("./controllers/fruitController") --- put movieController and showController here
// const tvshowsController = require("./controllers/tvshowController")

// // ===== Connection to Database =====

// require("./config/database");

// // mongoose.connect(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// // mongoose.connection.once("open", () => {
// //   console.log("connected to mongo")
// // })


// // console.log(process.env.MONGO_URI)

// // Setup Engine

// // app.set("view engine", "jsx")
// // app.engine("jsx", reactViews.createEngine())

// app.use(logger('dev'));
// app.use(express.json());

// // Configure both serve-favicon & static middleware
// // to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
// app.use(express.static(path.join(__dirname, "build")))

// // middleware: next is the only way to move on with your route
// app.use((req, res, next) => {
//   console.log("Im running for all routes")
//   console.log("1. middleware")
//   next()
// })

// // a new body object containing new parsed data after the middleware?
// app.use(express.urlencoded({ extended: false }))
// app.use(methodOverride("_method"))
// app.use(express.static('public'))


// // ===== Routes =====
// app.use("/tvshows", tvshowsController)

// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`)
// });