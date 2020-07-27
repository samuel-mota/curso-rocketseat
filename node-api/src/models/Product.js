const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now // preenche auto assim que o resgistro for criado
  }
});

ProductSchema.plugin(mongoosePaginate);

// registra o model da aplicacao com as propriedades acima
mongoose.model('Product', ProductSchema);