import React, { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { ZOOM } from '../constants/zoom';

type autoCenter = {
  lat: number;
  lng: number;
};

export const RecenterAutomatically: FC<autoCenter> = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], ZOOM);
  }, [lat, lng]);
  return null;
};
