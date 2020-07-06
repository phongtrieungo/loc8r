const express = require('express');
const router = express.Router();

const locationController = require('../controllers/locations.controller');
const aboutController = require('../controllers/about.controller');

/* GET home page. */
router.get('/locations/review/new', locationController.addReview);
router.get('/locations', locationController.detail);
router.get('/about', aboutController.index);
router.get('/', locationController.index)

module.exports = router;
