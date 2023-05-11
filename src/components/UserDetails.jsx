import React from 'react';

export const UserDetails = ({ name, id, course, email, phone }) => {
  return (
    <div className="user-details">
      <p>Nome: {name}</p>
      <p>Matrícula: {id}</p>
      <p>Curso: {course}</p>
      <p>E-mail: {email}</p>
      <p>Telefone: {phone}</p>
    </div>
  );
};
