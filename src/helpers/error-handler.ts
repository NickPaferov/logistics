import { AxiosError } from 'axios';
import { delay, put } from 'redux-saga/effects';
import { setErrorAC } from '../businesLogicLayer/actions/appActions';

export function* handleErrorSaga(error: unknown) {
  const err = error as Error | AxiosError;
  yield put(setErrorAC(err.message ? err.message : 'Some error occurred'));
  yield delay(5000);
  yield put(setErrorAC(null));
}
