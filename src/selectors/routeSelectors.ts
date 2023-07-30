import { AppRootStateType } from '../businesLogicLayer/store/store';
import { PointType } from '../businesLogicLayer/reducers/routeReducer';

export const selectRouteMarkers = (state: AppRootStateType): PointType[] | undefined =>
  state.route.currentRoute?.points;
export const selectPolylineData = (state: AppRootStateType): [number, number][] | null => state.route.polylineData;
