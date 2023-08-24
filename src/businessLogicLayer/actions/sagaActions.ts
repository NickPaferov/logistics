export const fetchPolyline = (coords: [number, number][]) =>
  ({
    type: 'ROUTE/FETCH-POLYLINE',
    coords,
  }) as const;
