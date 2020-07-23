// ex.1
// Funcão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(() => resolve(''), 1000));

//async function umPorSegundo() {
const umPorSegundo = async () => {
  let sec = 1;
  console.log(await delay(), sec + 's');
  sec += 1;
  console.log(await delay(), sec + 's');
  sec += 1;
  console.log(await delay(), sec + 's');
};
umPorSegundo();


// ex.2
import axios from 'axios';
const getUserFromGithub = async (user) => {
  try {
    console.log(await axios.get(`https://api.github.com/users/${user}`)); 
  } catch (error) {
    console.log(`Usuário '${user}' não existe`);
  }
};
getUserFromGithub('smagnun');
getUserFromGithub('smagnung124123');


// ex.3
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (error) {
      console.log(`Repositório '${repo}' não existe`);
    }
  }
};
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');


// ex.4
const buscaUsuario = async (usuario) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (error) {
    console.log(`Usuário '${usuario}' não existe`);
  }
};

buscaUsuario('diego3g');