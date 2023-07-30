import React, { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { resizeZoom } from '../helpers/zoom-resizer';

type autoCenter = {
  lat: number;
  lng: number;
};

export const RecenterAutomatically: FC<autoCenter> = ({ lat, lng }) => {
  const map = useMap();

  const screenWidth = window.innerWidth;

  useEffect(() => {
    const zoom = resizeZoom(screenWidth);
    map.setView([lat, lng], zoom);
  }, [lat, lng, screenWidth]);
  return null;
};
