import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['selectedCardpacks', 'round', 'playtime'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancers = composeEnhancer(applyMiddleware(...middlewares));

// export default storage = () => {
//   let store = createStore(rootReducer, undefined, enhancers);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

const store = createStore(persistedReducer, undefined, enhancers);
const persistor = persistStore(store);

export { store, persistor };
