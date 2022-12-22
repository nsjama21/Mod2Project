const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tvshowSchema = require('./tvshowSchema');

const reviewItemSchema = new Schema({
  value: { type: Number, default: 1 },
  tvshow: tvshowSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

reviewItemSchema.virtual('review').get(function () {
  // 'this' is bound to the lineItem subdoc
  return this.value * this.tvshow.review;
});



module.exports = mongoose.model('Review', reviewItemSchema);