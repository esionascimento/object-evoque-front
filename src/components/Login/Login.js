import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Login } from '../../store/Login/Login.actions';
/* import { AuthContext } from '../Context/auth'; */
import './Login.css';

function initialState() {
  return { email: '', password: '' };
}

function verifyLogin({ email, password }) {
  if (email === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Email ou senha invalido' };
}

function componentLogin() {
  const dispatch = useDispatch();
  const [valuesLogin, setValues] = useState(initialState);
  console.log('valuesLogin :', valuesLogin);
  
  const [validLogin, setValidLogin] = useState(false);
  const { email, password } = valuesLogin;
  /*   const { setToken } = useContext(AuthContext); */
  const history = useHistory();
  
  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...valuesLogin,
      [name]: value,
    })
  }
  
  function onSubmit(event) {
    event.preventDefault();
    const { token } = verifyLogin(valuesLogin);
    
    if (token) {
      dispatch(Login(email));
      history.push('/dashboard');
    }
    setValues(initialState);
    setValidLogin(true);
  }

  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        {validLogin && 
          <h3>Credenciais inexistente ou invalida</h3>
        }
        <div className="input-form">
          <div className="input-div">
            <input type="text"
              name="email"
              className="input-in input-ra"
              value={email}
              required
              placeholder="email@email.com"
              onChange={onChange}
            />
          </div>
          <div className="input-div">
            <input type="password"
              name="password"
              className="input-in input-ra"
              onChange={onChange}
              value={password}
              required
              placeholder="Senha"
            />
          </div>
        </div>
        <div className="input-form">
          <button
            type="submit"
            value="Login"
            className="input-login input-ra"
          >
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

export default componentLogin;
