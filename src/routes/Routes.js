import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { Sobremi } from '../Pages/Sobremi';
import { Error404 } from '../Pages/Error404';

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Sobremi />} />
      <Route path="/sobremi" element={<Sobremi />} />
      <Route path="*" element={<Error404 />} />
    </RouterRoutes>
  );
}
