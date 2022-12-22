const express = require('express');
const router = express.Router();
const tvshowsCtrl = require('../../controllers/api/tvshows');

// GET /api/tvshows
router.get('/', tvshowsCtrl.index);
// GET /api/tvshows/:id
router.get('/:id', tvshowsCtrl.show);

module.exports = router;