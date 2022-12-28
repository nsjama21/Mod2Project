const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  review: { type: String, required: true },
  posterURL: { type: String, required: true }

},
  {
    timestamps: true

  })

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review