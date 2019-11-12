const mongoose = require('../../database');
// added my class Cliente
const Cliente = mongoose.model('Cliente');

module.exports = {
  async index(req, res) {
    const cliente = await Cliente.find();
    return res.json(cliente);
  },

  async show(req, res) {
    const cliente = await Cliente.findById(req.params.id);
    return res.json(cliente);
  },

  async store(req, res) {
    const cliente = await Cliente.create(req.body);
    return res.json(cliente);
  },

  async update(req, res) {
    const cliente = await Cliente
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
    return res.json(cliente);
  },

  async destroy(req, res) {
    await Cliente.findByIdAndRemove(req.params.id);
    return res.send({ message: 'Cliente removido com sucesso'});
  }
};
