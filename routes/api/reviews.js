const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');

// GET /api/reviews/listing
router.get('/listing', reviewsCtrl.listing);
// GET /api/reviews/history
router.get('/history', reviewsCtrl.history);
// POST /api/reviews/listing/tvshows/:id
router.post('/listing/tvshows/:id', reviewsCtrl.addToReviews);



module.exports = router;