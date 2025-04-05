// src/main/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages/Page';
import Producto from './pages/Producto';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/producto" element={<Producto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
