// ex. 1
class Usuario {
  constructor() {
    this.email;
    this.senha;
    this.admin = false;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends Usuario {
  constructor() {
    super();
    this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
const User2 = new Usuario('email@teste.com', 'senha123');
const Adm2 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(User2.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
console.log(Adm2.isAdmin()) // true


// ex.2
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

// 2.1 map
const idades = usuarios.map(i => i.idade);
console.log(idades);

// 2.2 filter
const users = usuarios.filter(i => i.empresa == 'Rocketseat' && i.idade > 18);
console.log(users);

// 2.3 find
let googleUser = usuarios.find(i => i.empresa == "Google");
console.log(googleUser);

// 2.4 unindo operacoes
let max50 = usuarios
  .map(i => ({
    nome: i.nome,
    idade: i.idade * 2,
    empresa: i.empresa
  }))
  .filter(i => i.idade <= 50);
console.log(max50);


// ex.3 converter para arrow function

// 3.1
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.map(item => item + 10));

 
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario => usuario.idade);
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = ((nome = "Diego", idade = 18) => ({nome, idade}));
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));


// 3.4
const promise = () => {
  new Promise(function(resolve, reject) {
    resolve();
  })
};
console.log(promise());


// ex.4

// 4.1
const empresa = {
  nome1: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
 };

const {nome1, endereco: { cidade, estado }} = empresa;

console.log(nome1); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2
function mostraInfo( {nome, idade} ) {
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
 
// ex.5

// 5.1 rest
const arr = [1, 2, 3, 4, 5, 6];
const [ primeiro, ...resto ] = arr;
console.log(primeiro);
console.log(resto);

// function soma...
const soma = (...params) => params.reduce((total, next) => total + next);
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2 spread
const usuario1 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

let usuario2 = { ...usuario1, nome: 'Gabriel' };
let usuario3 = { ...usuario1, endereco: { ...usuario1.endereco, cidade: 'Lontras' }};
console.log(usuario2);
console.log(usuario3);


// ex.6 template literals
const usuario6 = 'Diego';
const idade6 = 23;
//console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
console.log(`O usuário ${usuario6} possui ${idade6} anos`);


// ex.7 Object Short Syntax
const nome7 = 'Diego';
const idade7 = 23;
// const usuario = {
//  nome: nome,
//  idade: idade,
//  cidade: 'Rio do Sul',
// };
const usuario7 = {
  nome7,
  idade7,
  cidade7: 'Rio do Sul',
 };
 console.log(usuario7);