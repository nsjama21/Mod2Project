const Review = require("../../models/review")

module.exports = {
  listing,
  history,
  addToReviews
}

// A listing of each tv show
async function listing(req, res) {
  try {
    const listing = await Review
      .sort("title")
    res.status(200).json(listing);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}


// Return each tvshow's review history ?
async function history(req, res) {
  // Sort most recent orders first
  try {
    const reviews = await Review
      .sort('-updatedAt').exec()
    res.status(200).json(reviews);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }

}

// Add review
async function addToReviews(req, res) {
  try {
    const reviews = await Review.sort("-updatedAt").exec()
    res.status(200).json(reviews);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}