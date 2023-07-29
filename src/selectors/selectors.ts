import { AppRootStateType } from '../businesLogicLayer/store/store';
import { PointType } from '../businesLogicLayer/reducers/logisticsReducer';

export const selectRouteMarkers = (state: AppRootStateType): PointType[] | undefined =>
  state.logistics.currentRoute?.points;
export const selectPolylineDataFetchingStatus = (state: AppRootStateType): boolean =>
  state.logistics.isFetchingPolylineData;
export const selectPolylineData = (state: AppRootStateType): [number, number][] | null => state.logistics.polylineData;
export const selectError = (state: AppRootStateType): string | null => state.logistics.error;
