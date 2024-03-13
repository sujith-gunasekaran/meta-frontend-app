import React from 'react'
import ReactDOM from 'react-dom/client';
import run from '../main';

const App = () => {
  run();
  return (
    <div>
      This is a dummy settings page - 2
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


