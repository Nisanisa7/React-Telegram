import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';  
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger';
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user'],
  }



const persistedReducer = persistReducer(persistConfig, reducer)
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
export const persistor = persistStore(store);