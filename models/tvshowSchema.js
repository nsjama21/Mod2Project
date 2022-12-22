const tvshow = require("./tvshow")

const Schema = require("mongoose").Schema

const tvshowSchema = new Schema({
  title: { type: String, required: true },
  review: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  posterURL: { type: String, required: true }

},
  {
    timestamps: true
  })

module.exports = tvshowSchema