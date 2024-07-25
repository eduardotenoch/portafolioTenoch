// src/routes/Routes.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { Sobremi, EstudiosHabilidades, Hobbies } from '../Pages';
import { Principal, Menu } from '../components';
import { Error404 } from '../Pages/Error404';

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="portafolioTenoch" element={<Principal />} />
      <Route path="/sobremi" element={<Sobremi />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/EstudioHabilidades" element={<EstudiosHabilidades />} />
      <Route path="*" element={<Error404 />} />
    </RouterRoutes>
  );
}
