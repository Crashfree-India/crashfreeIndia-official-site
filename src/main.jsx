import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'prosemirror-view/style/prosemirror.css';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
