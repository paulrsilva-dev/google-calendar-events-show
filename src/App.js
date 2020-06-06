import React from 'react';
import './App.css';

import createRoutes from './routes';
const routes = createRoutes();

function App() {
  return (
    <>
      {routes}
    </>
  );
}

export default App;
