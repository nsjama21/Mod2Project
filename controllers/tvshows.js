const TVShow = require('../models/tvshow');




module.exports = {
  index,
  remove,
  create,
  update,
  show
}


async function index(req, res) {
  try {
    const tvshows = await TVShow.find({});
    res.status(200).json(tvshows);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// delete
async function remove(req, res) {
  try {
    const tvshow = await TVShow.findByIdAndDelete(req.params.id);
    res.status(200).json(tvshow);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

async function create(req, res) {
  try {
    req.body.title = req.body.title.split(",");
    const book = await TVShow.create(req.body);
    res.status(200).json(tvshow);
    // console.log(`${book.title} has been added to your collection!`);
  } catch (error) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(error);
  }
}

async function update(req, res) {
  try {
    const book = await TVShow.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(tvshow);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

async function show(req, res) {
  try {
    const tvshow = await TVShow.findById(req.params.id);
    res.status(200).json(tvshow);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}