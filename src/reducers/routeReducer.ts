import React from 'react';
import {PointType, RouteType} from '../constants/routes';

const initialState = {
  key: null as null | React.Key,
  routeName: null as null | string,
  points: null as null | PointType[],
};

type InitialStateType = typeof initialState;

export const routeReducer = (state = initialState, action: RouteActionsType): InitialStateType => {
  switch (action.type) {
    case 'ROUTE/SET-CURRENT-ROUTE':
      return { ...state, ...action.route };
    default:
      return state;
  }
};

export const setCurrentRouteAC = (route: RouteType) => ({ type: 'ROUTE/SET-CURRENT-ROUTE', route }) as const;

type RouteActionsType = ReturnType<typeof setCurrentRouteAC>;
