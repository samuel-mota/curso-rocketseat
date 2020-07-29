import React from 'react';
import './styles.css';

// esse conceito de usar uma variavel ao inves de class é chamado de stateless component
// com classe seria:
// class Header extends Component {
//   render() {
//     return <h1>Hello</h1>
//   }
// }

const Header = () => <header id = "main-header"> JSHunt </header>;

export default Header;