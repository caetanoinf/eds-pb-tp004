import React from 'react';
import { Layout } from './components/Layout';
import { LoginPage } from './pages/Login';
import { HomePage } from './pages/Home';
import './style.css';

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleLogin = (evt) => {
    evt.preventDefault();

    setLoggedIn(true);
  };

  const handleLogout = (evt) => {
    evt.preventDefault();

    setLoggedIn(false);
  };

  return (
    <Layout loggedIn={loggedIn} onLogout={handleLogout}>
      {loggedIn ? <HomePage /> : <LoginPage onSubmit={handleLogin} />}
    </Layout>
  );
}
