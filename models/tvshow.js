const mongoose = require("mongoose")

const Schema = mongoose.Schema
const tvshowSchema = new Schema({
  title: { type: String, required: true },
  review: { type: String, required: true },
  posterURL: { type: String, required: true }

},
  {
    timestamps: true

  })

module.exports = mongoose.model("TVShow", tvshowSchema)