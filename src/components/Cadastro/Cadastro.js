import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom'

import setStorage from '../../util/setStorage';
import './Cadastro.css';

const initialState = {
  name: '',
  email: '',
  password: '',
}

function Cadastrar() {
  const [redirect, setRedirect] = useState(false);
  const [cadastro, setCadastro] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;
    setCadastro({
      ...cadastro,
      [name]: value,
    })
  }
  
  function onSubmit() {
    setRedirect(true);
    setStorage(cadastro);
  }
  
  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <div className="card">
      <div>
        <h3>Registre-se</h3>
      </div>
      <form onSubmit={onSubmit}>
        <div className="input-form">
          <div className="input-div">
            <input type="text" name="name"
              className="input-in input-ra" placeholder="Nome"
              onChange={onChange}
            />
          </div>
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
          <button type="submit" value="cadastro" className="input-login input-ra">
            Cadastra-se
          </button>
        </div>
      </form>
    </div>
  )
}

export default Cadastrar;

    {/* <form onSubmit={onSubmit}>
      <div className="form-field">
        <label htmlFor="name-login">Name</label>
        <input
          id="name-login"
          type="text"
          name="name"
          onChange={onChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email-login">Email</label>
        <input
          id="email-login"
          type="email"
          name="email"
          onChange={onChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="password-login">Senha</label>
        <input
          type="password"
          id="password-login"
          name="password"
          onChange={onChange}
        />
      </div>
      <button type="submit">
        Criar conta
      </button>
    </form> */}