import React from 'react';

export default function Mensaje({ mensaje }) {
  return (
    <aside className="mensaje">
      <span aria-hidden="true">💡</span>
      <p>{mensaje}</p>
    </aside>
  );
}
