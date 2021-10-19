import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store/store';
import { Provider } from 'react-redux';

import RoutesPrivate from './components/Routes/Private/Private';
import { LoginAuth } from './components/Routes/LoginAuth';

import Home from './pages/Home/Home.js'
import Cadastro from './components/Cadastro/Cadastro'
import Dashboard from './pages/Dashboard/Dashboard.js';
import NotFound from './pages/NotFound.js';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Switch>
            <LoginAuth exact path="/" component={Home} />
            <RoutesPrivate exact path="/dashboard" component={() => <Dashboard />} />
            <Route exact path="/cadastro" component={() => <Cadastro />} />
            <Route exact path="/not-found" component={() => <NotFound />} />
          </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
