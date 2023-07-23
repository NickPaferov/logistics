import React, { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';

type autoCenter = {
  lat: number;
  lng: number;
};

export const RecenterAutomatically: FC<autoCenter> = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);
  return null;
};
