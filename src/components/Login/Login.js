import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import StoreContext from '../Context/Context';
import './Login.css';

function initialState() {
  return { email: '', password: '' };
}

function login({ email, password }) {
  if (email === 'admin@admin.com' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Email ou senha invalido' };
}

function Login() {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;
    console.log(values);
    setValues({
      ...values,
      [name]: value,
    })
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(values);

    const { token } = login(values);
    console.log(token);
    if (token) {
      setToken(token);
      history.push('/dashboard');
    }
    setValues(initialState);
  }

  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <div className="input-form">
          <div className="input-div">
            <input type="text" name="email"
              className="input-in input-ra" placeholder="Email"
              onChange={onChange}
            />
          </div>
          <div className="input-div">
            <input type="password" name="password"
              className="input-in input-ra" onChange={onChange}
              placeholder="Senha" />
          </div>
        </div>
        <div className="input-form">
          <button type="submit" value="Login" className="input-login input-ra">
            Entrar
          </button>
        </div>
        <hr className="hr2" />
        <div className="footer">
          <div className="links">
            Não tem uma conta?
            <Link to="/cadastro">Criar nova conta</Link>
          </div>
          <div className="">
            <a href="#">Esqueceu sua senha?</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
