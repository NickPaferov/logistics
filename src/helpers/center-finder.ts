import { MAP_CENTER } from '../constants/mapCenter';

export const findCenter = (coordinates: [number, number][]): [number, number] => {
  if (!coordinates || !coordinates.length) {
    return [...MAP_CENTER];
  }

  const lats = coordinates.map((point) => point[0]);
  const lngs = coordinates.map((point) => point[1]);

  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);

  const centerLat = (minLat + maxLat) / 2;
  const centerLng = (minLng + maxLng) / 2;

  return [centerLat, centerLng];
};
