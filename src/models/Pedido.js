const mongoose = require('../../database');

const PedidoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true,
  },
  pastel: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Pastel',
    required: true,
  }, 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model('Pedido', PedidoSchema);