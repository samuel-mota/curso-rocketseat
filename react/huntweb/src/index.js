import React from 'react'; // para o JSX (tags html) funcionar
import ReactDOM from 'react-dom'; // para o render funcionar
// import './index.css'; // na pasta deletados
import App from './App'; // eh o App.js
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // pego o conteudo do App.js e jogo dentro do div com id root no index.html
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
