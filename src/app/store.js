import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from 'reducers';

const persistConfig = {
  key: 'gaming-life',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware
});

export const persistor = persistStore(store);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('reducers', () => {
    // eslint-disable-next-line global-require
    const newRootReducer = require('reducers').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
