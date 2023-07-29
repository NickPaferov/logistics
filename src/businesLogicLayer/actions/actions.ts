import { RouteType } from '../reducers/logisticsReducer';

export const setCurrentRouteAC = (currentRoute: RouteType) =>
  ({
    type: 'LOGISTICS/SET-CURRENT-ROUTE',
    currentRoute,
  }) as const;

export const setIsFetchingPolylineDataAC = (isFetchingPolylineData: boolean) =>
  ({
    type: 'LOGISTICS/SET-IS-FETCHING-POLYLINE-DATA',
    isFetchingPolylineData,
  }) as const;

export const setPolylineDataAC = (polylineData: [number, number][] | null) =>
  ({
    type: 'LOGISTICS/SET-POLYLINE-DATA',
    polylineData,
  }) as const;

export const setErrorAC = (error: string | null) => ({ type: 'LOGISTICS/SET-ERROR', error }) as const;

// for saga
export const fetchPolyline = (coords: [number, number][]) =>
  ({
    type: 'ROUTE/FETCH-POLYLINE',
    coords,
  }) as const;
