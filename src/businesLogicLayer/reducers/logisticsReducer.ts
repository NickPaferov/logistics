import React from 'react';
import { setCurrentRouteAC, setErrorAC, setIsFetchingPolylineDataAC, setPolylineDataAC } from '../actions/actions';

const initialState = {
  currentRoute: null as null | RouteType,
  isFetchingPolylineData: false,
  polylineData: null as null | [number, number][],
  error: null as string | null,
};

type InitialStateType = typeof initialState;

export const logisticsReducer = (state = initialState, action: LogisticsActionsType): InitialStateType => {
  switch (action.type) {
    case 'LOGISTICS/SET-CURRENT-ROUTE':
      return { ...state, currentRoute: action.currentRoute };
    case 'LOGISTICS/SET-IS-FETCHING-POLYLINE-DATA':
      return { ...state, isFetchingPolylineData: action.isFetchingPolylineData };
    case 'LOGISTICS/SET-POLYLINE-DATA':
      return { ...state, polylineData: action.polylineData };
    case 'LOGISTICS/SET-ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

type LogisticsActionsType =
  | ReturnType<typeof setCurrentRouteAC>
  | ReturnType<typeof setIsFetchingPolylineDataAC>
  | ReturnType<typeof setPolylineDataAC>
  | ReturnType<typeof setErrorAC>;

export type RouteType = {
  key: React.Key;
  routeName: string;
  points: PointType[];
};

export type PointType = {
  key: React.Key;
  point: {
    lat: number;
    lng: number;
  };
};
