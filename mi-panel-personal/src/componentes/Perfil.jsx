import React from 'react';

export default function Perfil({ nombre, programa, ciudad }) {
  return (
    <section className="perfil" aria-labelledby="titulo-perfil">
      <h2 id="titulo-perfil">Mi perfil</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Programa:</strong> {programa}</p>
      <p><strong>Ciudad:</strong> {ciudad}</p>
    </section>
  );
}
