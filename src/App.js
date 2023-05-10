import React from 'react';
import { Layout } from './components/Layout';
import { LoginPage } from './pages/Login';
import { HomePage } from './pages/Home';
import './style.css';

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Layout loggedIn={loggedIn}>
      {loggedIn ? <HomePage /> : <LoginPage />}
    </Layout>
  );
}
