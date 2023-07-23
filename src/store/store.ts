import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routeReducer } from '../reducers/routeReducer';

const rootReducer = combineReducers({
  route: routeReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcherSaga);

export type AppRootStateType = ReturnType<typeof rootReducer>;

function* rootWatcherSaga() {}

// @ts-ignore
window.store = store;
