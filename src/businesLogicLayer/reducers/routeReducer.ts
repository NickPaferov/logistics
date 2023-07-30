import React from 'react';
import { setCurrentRouteAC, setPolylineDataAC } from '../actions/routeActions';

const initialState = {
  currentRoute: null as null | RouteType,
  polylineData: null as null | [number, number][],
};

type InitialStateType = typeof initialState;

export const routeReducer = (state = initialState, action: RouteActionsType): InitialStateType => {
  switch (action.type) {
    case 'ROUTE/SET-CURRENT-ROUTE':
      return { ...state, currentRoute: action.currentRoute };
    case 'ROUTE/SET-POLYLINE-DATA':
      return { ...state, polylineData: action.polylineData };
    default:
      return state;
  }
};

type RouteActionsType = ReturnType<typeof setCurrentRouteAC> | ReturnType<typeof setPolylineDataAC>;

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
