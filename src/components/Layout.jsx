import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ loggedIn, onLogout, children }) => {
  return (
    <div className="app-container">
      <Header loggedIn={loggedIn} onLogout={onLogout} />

      <main className="app-content">{children}</main>

      <Footer />
    </div>
  );
};
