import { RouteType } from '../businessLogicLayer/reducers/routeReducer';

export const ROUTES: RouteType[] = [
  {
    key: '1',
    routeName: 'Маршрут №1',
    points: [
      {
        key: 1,
        point: {
          lat: 59.84660399,
          lng: 30.29496392,
        },
      },
      {
        key: 2,
        point: {
          lat: 59.82934196,
          lng: 30.42423701,
        },
      },
      {
        key: 3,
        point: {
          lat: 59.83567701,
          lng: 30.38064206,
        },
      },
    ],
  },
  {
    key: '2',
    routeName: 'Маршрут №2',
    points: [
      {
        key: 1,
        point: {
          lat: 59.82934196,
          lng: 30.42423701,
        },
      },
      {
        key: 2,
        point: {
          lat: 59.82761295,
          lng: 30.41705607,
        },
      },
      {
        key: 3,
        point: {
          lat: 59.84660399,
          lng: 30.29496392,
        },
      },
    ],
  },
  {
    key: '3',
    routeName: 'Маршрут №3',
    points: [
      {
        key: 1,
        point: {
          lat: 59.83567701,
          lng: 30.38064206,
        },
      },
      {
        key: 2,
        point: {
          lat: 59.84660399,
          lng: 30.29496392,
        },
      },
      {
        key: 3,
        point: {
          lat: 59.82761295,
          lng: 30.41705607,
        },
      },
    ],
  },
];
