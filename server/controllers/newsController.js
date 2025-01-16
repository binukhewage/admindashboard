const NewsModel = require('../models/newsModel');

exports.getAllNews = async (req, res) => {
  try {
    const news = await NewsModel.getAll();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const newsItem = await NewsModel.getById(req.params.id);
    if (newsItem) {
      res.status(200).json(newsItem);
    } else {
      res.status(404).json({ message: 'News item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
