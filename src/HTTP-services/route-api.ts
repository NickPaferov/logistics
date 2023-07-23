import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://router.project-osrm.org/route/v1/driving/',
});

export const routeApi = {};
