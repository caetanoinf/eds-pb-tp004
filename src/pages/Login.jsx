import React from 'react';
import styles from './Login.module.css';

export const LoginPage = ({ onSubmit }) => {
  return (
    <div className={styles.container}>
      <h2>Portal do Aluno</h2>
      <p>Seja bem vindo ao Portal do Aluno da Faculdade Online!</p>

      <form className={styles.form} action="home.html" onSubmit={onSubmit}>
        <label className={styles.label} for="username">
          Usuário:
        </label>
        <input
          className={styles.input}
          type="text"
          id="username"
          name="username"
          required
        />
        <br />
        <label className={styles.label} for="password">
          Senha:
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          required
        />
        <br />
        <button className={styles.button} type="submit">
          Acessar
        </button>
      </form>
    </div>
  );
};
