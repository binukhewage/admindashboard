const AdvertisementModel = require('../models/advertisementModel');

exports.getAllAdvertisements = async (req, res) => {
  try {
    const ads = await AdvertisementModel.getAll();
    res.status(200).json(ads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAdvertisementById = async (req, res) => {
  try {
    const ad = await AdvertisementModel.getById(req.params.id);
    if (ad) {
      res.status(200).json(ad);
    } else {
      res.status(404).json({ message: 'Advertisement not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
