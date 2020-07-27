const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); // faz o require em todos os arquivos da pasta

// Iniciando o App
const app = express(); // executa o express
app.use(express.json()); // para permitir que eu envie dados para a aplicacao no formato json
app.use(cors()); // para liberar acesso publico

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true
});
//require('./src/models/Product'); // registra o model na aplicacao
requireDir('./src/models'); // registra tudo da pasta models no model na aplicacao


// const Product = mongoose.model('Product');

// exportado para routes.js
// app.get('/', (req, res) => { // req = requisicao, res = resposta

//   Product.create({ 
//     title: 'React Native',
//     description: 'Build native apps with React',
//     url: 'http://github.com/facebook/react-native'
//   });

//   return res.send('Hello World');
// }); 

// definir rotas
app.use('/api', require('./src/routes.js')) // "use" eh como se fosse um whitecard ou coringa, ele vai aceitar todas as requisicoes (PUT, DELETE, ETC)

app.listen(3001); // ouvir a porta 3001 do navegador