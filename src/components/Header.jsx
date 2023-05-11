import React from 'react';

const PublicHeader = () => {
  return (
    <>
      <h1>Faculdade Online</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Cursos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

const PrivateHeader = ({ onLogout }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">Meus Dados Pessoais</a>
          </li>
          <li>
            <a href="#">Histórico de Notas</a>
          </li>
          <li>
            <a href="#">Solicitação de Documentos</a>
          </li>
          <li>
            <a href="#" onClick={onLogout}>
              Sair
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export const Header = ({ loggedIn, onLogout }) => {
  return (
    <header className="app-header">
      {loggedIn ? <PrivateHeader onLogout={onLogout} /> : <PublicHeader />}
    </header>
  );
};
