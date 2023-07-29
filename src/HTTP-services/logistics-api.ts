import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://router.project-osrm.org/route/v1/driving/',
});

export const logisticsApi = {
  getPolyline(coords: number[][]): Promise<AxiosResponse<ResponseType>> {
    const coordinates = coords.join(';');
    return instance.get(`${coordinates}?geometries=geojson&overview=full`);
  },
};

export type ResponseType = {
  code: string;
  routes: RoutesType[];
  waypoints: WaypointsType[];
};
type RoutesType = {
  geometry: RoutesGeometryType;
  legs: RoutesLegsType[];
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
};

type RoutesGeometryType = {
  coordinates: [number, number][];
  type: string;
};
type RoutesLegsType = {
  steps: number[];
  summary: string;
  weight: number;
  duration: number;
  distance: number;
};

type WaypointsType = {
  hint: string;
  distance: number;
  name: string;
  location: number[];
};
