import { RouteType } from '../reducers/routeReducer';

export const setCurrentRouteAC = (currentRoute: RouteType) =>
  ({
    type: 'ROUTE/SET-CURRENT-ROUTE',
    currentRoute,
  }) as const;

export const setPolylineDataAC = (polylineData: [number, number][] | null) =>
  ({
    type: 'ROUTE/SET-POLYLINE-DATA',
    polylineData,
  }) as const;
