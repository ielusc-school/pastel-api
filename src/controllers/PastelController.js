const mongoose = require('../../database');
const Pastel = mongoose.model('Pastel');

module.exports = {
  async index(req, res) {
    const pastel = await Pastel.find();
    return res.json(pastel);
  },

  async store(req, res) {
    const pastel = await Pastel.create(req.body);
    return res.json(pastel);
  },
};
