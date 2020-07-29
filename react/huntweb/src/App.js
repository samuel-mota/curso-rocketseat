import React from 'react';
import './styles.css';
// import logo from './logo.svg';
// import './App.css'; os dois na pasta deletados
import Header from './components/Header';
import Main from './pages/main';
import Routes from './routes';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Rocketseat</h1>
//     </div>
//   );
// }

// mesmo que a function de cima, syntax stateless component
const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
