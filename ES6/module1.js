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
