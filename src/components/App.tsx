import React from 'react';
import { Map } from './Map';
import { RouteList } from './RouteList';

export const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <RouteList />
      <Map />
    </div>
  );
};
