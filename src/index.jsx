import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure the path is correct for your project structure

// Create a root element and render the App component
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
