import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import Signup from './signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login/> */}
    <Signup/>
  </React.StrictMode>
);
  