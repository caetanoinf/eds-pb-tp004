import React from 'react';
import React from 'react';
import { UserDetails } from '../components/UserDetails';
import styles from './Home.module.css';

export const HomePage = () => {
  const user = {
    name: 'Lúcio Caetano',
    id: '123456789',
    course: 'Engenharia de Software',
    email: 'lucio.caetano@al.infnet.edu.br',
    phone: '83 3333 3333',
  };

  return (
    <div className={styles.container}>
      <h1>Bem-vindo, {user.name}!</h1>

      <h2>Meus Dados Pessoais</h2>

      <div className={styles.details}>
        <UserDetails {...user} />
      </div>
    </div>
  );
};
