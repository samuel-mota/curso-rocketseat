import api from './api';

class App {
  constructor() {
    this.repositories = []; // salva os repositorios no array
    
    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');
    this.inputEl = document.querySelector('input[name=repository]');

    this.registerHandlers(); // registra os eventos
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando'));
      loadingEl.setAttribute('id', 'loading');

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event) {
    event.preventDefault(); // previne que formulario recarregue pagina
    
    const repoInput = this.inputEl.value;
    if (repoInput === 0) return; // se o input estiver vazio termine a execucao

    this.setLoading();

    try {
      
      const response = await api.get(`/repos/${repoInput}`); // restante da url esta configurado no api.js
  
      console.log(response);
  
      const { name, description, html_url, owner: { avatar_url } } = response.data; // desestruturacao para pegar os dados 
  
      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      });
  
      this.inputEl.value = ''; // limpa o campo digitado
  
      this.render();
    } catch (error) {
      alert('O repositório não existe');
    }

    this.setLoading(false);
  }

  render() {
    this.listEl.innerHTML = ''; // apaga tudo dentro do ul

    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.setAttribute('target', '_blank');
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();