const express = require('express');
const router = express.Router();
const { getAllAdvertisements, getAdvertisementById } = require('../controllers/advertisementsController');

router.get('/', getAllAdvertisements);
router.get('/:id', getAdvertisementById);

module.exports = router;
