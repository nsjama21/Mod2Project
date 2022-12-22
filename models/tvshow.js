const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./category');

const tvshowSchema = require('./tvshowSchema');

module.exports = mongoose.model('TV Show', tvshowSchema);