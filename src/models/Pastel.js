const mongoose = require('../../database');

const PastelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  flavour: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model('Pastel', PastelSchema);