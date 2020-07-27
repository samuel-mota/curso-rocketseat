const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    // listagem de todos os produtos da base de dados
    // const products = await Product.find(); // soh execute depois de resgatar os registros no banco de dados
    const { page = 1 } = req.query; // query eh para params get, isso possibilita o uso da syntax /products?page=2
    const products = await Product.paginate({}, { page, limit: 10 }); // usando o plugin mongoose.paginate, primeiro parametro vazio para filtros, segundo param. define pagina atual 1 e o tamanho de cada pagina. alterado para somente "page" (page: page), agora ele vai resgatar o valorda variavel acima

    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body); // req.body tem todos os dados que precisamos

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }); // pesquisa um unico produto e atualiza com os dados que vem do body, o parametro new serve para mostrar os dados depois de atualizar, sem ele iria mostrar o produto anterior

    return res.json(product);
  },

  async destroy(req, res) {
    const product = await Product.findByIdAndRemove(req.params.id);

    return res.send(); // retorna uma resposta de sucesso sem nenhum conteudo
  },
};
