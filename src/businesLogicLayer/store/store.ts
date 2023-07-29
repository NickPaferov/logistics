import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logisticsReducer } from '../reducers/logisticsReducer';
import { polylineWatcherSaga } from '../sagas/sagas';

const rootReducer = combineReducers({
  logistics: logisticsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcherSaga);

export type AppRootStateType = ReturnType<typeof rootReducer>;

function* rootWatcherSaga() {
  yield polylineWatcherSaga();
}

// @ts-ignore
window.store = store;
