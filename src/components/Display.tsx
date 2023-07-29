import React from 'react';
import { NavBar } from './NavBar';
import { Map } from './Map';

export const Display = () => {
  return (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <Map />
    </div>
  );
};
