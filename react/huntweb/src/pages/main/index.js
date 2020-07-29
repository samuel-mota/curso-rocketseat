import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  state = { // o metodo render() escuta esse objeto "state", ele identifica qualquer alteracao 
    products: [],
    productInfo: {},
    page: 1, // var pagina que inicia a aplicacao
  };

  componentDidMount() { //executar uma ação logo que o componente é exibido em tela
    this.loadProducts();
  };

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    // setState é um método para alterar/popular a objeto "state"
    this.setState({ products: docs, productInfo, page });
  };

  prevPage = () => {
    const { page, productInfo } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages ) return; // se estiver na ultima pagina return nada

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  };

  render() {
    //return <h1>Contagem de produtos: {this.state.products.length}</h1>

    const { products, page, productInfo } = this.state;

    return (
      <div className="product-list">
        {products.map(product => ( // sempre que usar map ou semelhante, adicionar o "key"
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>
            Proximo
          </button>
        </div>
      </div>
    );
  }
}