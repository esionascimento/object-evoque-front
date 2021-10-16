import React from 'react';

import Login from '../../components/Login/Login';

import './Home.css'

function Home() {
  return (
    <>
    
      <div className="box">
        <div className="container">
          <div className="left">
            <h1>Object Evoque</h1>
            <p>O Object Evoque ajuda você a se organizar e facilitar a procurar de objetos</p>
          </div>
          <div className="right">
            <Login />
          </div>
        </div>
      </div>
      <footer className="rodape">
        Footer
      </footer>
    </>
  );
}

export default Home;
