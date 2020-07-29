import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/product';

// switch permite que apenas uma rota seja exibida a cada rota
// "exact" significa que a rota vai ser chamado somente quando for exatamente o que esta no path
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default Routes;