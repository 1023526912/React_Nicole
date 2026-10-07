import React from 'react';
import Encabezado from './componentes/Encabezado.jsx';
import Perfil from './componentes/Perfil.jsx';
import Mensaje from './componentes/Mensaje.jsx';

export default function App() {
  return (
    <main className="panel">
      <Encabezado />
      <Perfil
        nombre="Nicole Bolivar"
        programa="Desarrollo de Software"
        ciudad="Rionegro"
      />
      <Mensaje mensaje="Bienvenido a React" />
    </main>
  );
}
