const mongoose = require("mongoose")

const tvshowSchema = new mongoose.Schema({
  title: { type: String, required: true },
  review: { type: String, required: true },
  positive: Boolean
},
  {
    timestamps: true
  })

const TVShow = mongoose.model("TV Show", tvshowSchema)

module.exports = TVShow