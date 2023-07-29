import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { logisticsApi, ResponseType } from '../../HTTP-services/logistics-api';
import { handleErrorSaga } from '../../helpers/error-handler';
import { fetchPolyline, setIsFetchingPolylineDataAC, setPolylineDataAC } from '../actions/actions';

export function* fetchPolylineWorkerSaga(action: ReturnType<typeof fetchPolyline>) {
  yield put(setIsFetchingPolylineDataAC(true));
  try {
    const res: AxiosResponse<ResponseType> = yield call(logisticsApi.getPolyline, action.coords);
    const polylineData = res.data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    // @ts-ignore
    yield put(setPolylineDataAC(polylineData));
  } catch (error) {
    yield* handleErrorSaga(error);
  } finally {
    yield put(setIsFetchingPolylineDataAC(false));
  }
}

export function* polylineWatcherSaga() {
  yield takeEvery('ROUTE/FETCH-POLYLINE', fetchPolylineWorkerSaga);
}
