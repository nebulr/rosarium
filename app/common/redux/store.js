import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: `rosarium_${process.env.NODE_ENV}`,
  storage: AsyncStorage,
  whitelist: ['Auth']
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    ...reducers
  })
);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
