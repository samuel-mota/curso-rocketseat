/* var minhaPromise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/smagnun');
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) { // 4 = variavel significa que o api voltou a resposta
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisicao')
        }
      }
    }

  });
}

minhaPromise() */

// com axios
axios.get('https://api.github.com/users/smagnun')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.warn(error);
  });

// console.log(resultado);