// ex. 1 checar idade do usuario
var botao = document.querySelector('.checarIdade');
var input = document.querySelector('input[name=idade]');

var checaIdade = function (idade) {
  return new Promise(function (resolve, reject) {
    if (idade >= 18) {
      resolve();
    } else {
      reject();
    }
  });
}

botao.onclick = function () {

  setTimeout(() => {

    checaIdade(input.value)
      .then(function (response) {
        console.log("Maior que 18 anos");
      })
      .catch(function (error) {
        console.warn("Menor que 18 anos");
      });

  }, 2000);
};


// ex. 2 - mostrar repositorios do usuario
var botao2 = document.querySelector('.getRepos');
var input2 = document.querySelector('input[name=usuario]');
var repos = document.querySelector('.repositorios');

botao2.onclick = function () {
  repos.innerHTML = "";
  var createLI = document.createElement('li');
  repos.appendChild(createLI);
  var createText = document.createTextNode("Carregando...");
  createLI.appendChild(createText);

  axios.get('https://api.github.com/users/' + input2.value + '/repos')
    .then(function (response) {
      repos.innerHTML = "";

      for (const repo of response.data) {
        var createLI = document.createElement('li');
        repos.appendChild(createLI);
        var createText = document.createTextNode(repo.name);
        createLI.appendChild(createText);

      }
    })
    .catch(function (error) {
      repos.innerHTML = "";
      var createLI = document.createElement('li');
      repos.appendChild(createLI);
      var createText = document.createTextNode("Usuario nao existe!");
      createLI.appendChild(createText);

    });
}

// ex. 3 - mensagem de erro e placeholder CARREGANDO
// resolvido acima