const TVShow = require('../../models/tvshow');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try {
    const tvshows = await TVShow.find({}).sort('title').populate('category').exec()
    // re-sort based upon the sortOrder of the categories
    tvshows.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(tvshows);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try {
    const tvshow = await TVShow.findById(req.params.id);
    res.status(200).json(tvshow);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}