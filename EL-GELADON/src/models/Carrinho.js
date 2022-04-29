const mongooose = require('mongoose');

const CarrinhoSchema = new mongooose.Schema({
    paletaId: { type: String, required: true },
    quantidade: { type: Number, required: true },
  });

  const Carrinho = mongooose.model('carrinho', CarrinhoSchema);

  module.exports = Carrinho;
