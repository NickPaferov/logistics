import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { appReducer } from '../reducers/appReducer';
import { routeReducer } from '../reducers/routeReducer';
import { polylineWatcherSaga } from '../sagas/sagas';

const rootReducer = combineReducers({
  app: appReducer,
  route: routeReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcherSaga);

export type AppRootStateType = ReturnType<typeof appReducer> & ReturnType<typeof rootReducer>;

function* rootWatcherSaga() {
  yield polylineWatcherSaga();
}

// @ts-ignore
window.store = store;
