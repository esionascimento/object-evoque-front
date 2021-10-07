import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StoreProvider from './components/Context/Provider';
import RoutesPrivate from './components/Routes/Private/Private';
import Home from './pages/Home/Home.js'
import Cadastro from './components/Cadastro/Cadastro'
import Dashboard from './pages/Dashboard.js';
import NotFound from './pages/NotFound.js';

const App = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <RoutesPrivate exact path="/dashboard" component={() => <Dashboard />} />
          <Route exact path="/cadastro" component={() => <Cadastro />} />
          <Route exact path="/not-found" component={() => <NotFound />} />
        </Switch>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
