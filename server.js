require("dotenv").config()
const express = require("express")
const app = express()
const router = express.Router()
const PORT = 3001
const reactViews = require('express-react-views')
const mongoose = require("mongoose")
const methodOverride = require('method-override');
const reviews = require("./routes/reviews") // 
// const fruitsController = require("./controllers/fruitController")


// ===== Connection to Database =====
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open", () => {
  console.log("connected to mongo")
})


console.log(process.env.MONGO_URI)

// Setup Engine

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

// middleware: next is the only way to move on with your route
app.use((req, res, next) => {
  console.log("Im running for all routes")
  console.log("1. middleware")
  next()
})

// a new body object containing new parsed data after the middleware?
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.use(express.static('public'))

// Routes
app.use("/api/reviews", reviews)

// ===== Routes =====

app.get("/api", (req, res) => {
  res.send("hello world from express!")
})
// app.use("/fruits", fruitsController)


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});




















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