const express = require('express');
const router = express.Router();
const tvshowsController = require('../../controllers/tvshows');




/*  ===========================================================================
//  SERVER ROUTES
//  =======================================================================  */
//  GET /api/tvshows
router.get('/', tvshowsController.index);

//  DELETE /api/tvshows/listing/:id
router.delete('/listing/:id', tvshowsController.remove);

//  POST /api/tvshows
router.post('/', tvshowsController.create); // send request to controller

//  PUT /api/tvshows/listing/:id/
router.put('/listing/:id/', tvshowsController.update);

//  GET /api/tvshows/listing/:id
router.get('/listing/:id', tvshowsController.show);



module.exports = router;