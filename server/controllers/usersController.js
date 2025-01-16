const UserModel = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
