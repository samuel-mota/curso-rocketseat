class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.usuario = 'Samuel';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }

//   addTodo() {
//     this.todos.push('Novo todo');
//     console.log(this.todos);
//   }
// }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();