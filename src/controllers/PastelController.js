const mongoose = require('../../database');
// added my class Pastel
const Pastel = mongoose.model('Pastel');

module.exports = {
  async index(req, res) {
    const pastel = await Pastel.find();
    return res.json(pastel);
  },

  async show(req, res) {
    const pastel = await Pastel.findById(req.params.id);
    return res.json(pastel);
  },

  async store(req, res) {
    const pastel = await Pastel.create(req.body);
    return res.json(pastel);
  },

  async update(req, res) {
    const pastel = await Pastel
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
    return res.json(pastel);
  },

  async destroy(req, res) {
    await Pastel.findByIdAndRemove(req.params.id);
    return res.send({ message: 'Pastel removido com sucesso'});
  }
};
