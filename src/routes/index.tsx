import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

function Routes1() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, key) => (
          <Route key={key} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Routes1;
