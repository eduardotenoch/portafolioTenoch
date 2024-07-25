// src/routes/Routes.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { Sobremi } from '../Pages/Sobremi';
import { Principal } from '../components/Principal';
import { Error404 } from '../Pages/Error404';

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="portafolioTenoch" element={<Principal />} />
      <Route path="/sobremi" element={<Sobremi />} />
      <Route path="*" element={<Error404 />} />
    </RouterRoutes>
  );
}
