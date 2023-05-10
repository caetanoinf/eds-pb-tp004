import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ loggedIn, children }) => {
  return (
    <div class="container">
      <Header loggedIn={loggedIn} />

      <main>{children}</main>

      <Footer />
    </div>
  );
};