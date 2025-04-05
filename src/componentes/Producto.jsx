import React from 'react';
import { Link } from 'react-router-dom';

function Producto() {
  return (
    <Link to="/producto" className="card">
      <h2>👕 Productos</h2>
      <p>Explora nuestra variedad de ropa moderna y de alta calidad.</p>
    </Link>
  );
}

export default Producto;
