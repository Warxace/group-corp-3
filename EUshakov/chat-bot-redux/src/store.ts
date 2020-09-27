import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import logger from 'redux-logger';
import { autobotMiddleware } from './middlewares/autobotMiddleware';
import createRootReducer from './reducers';

const persistConfig = {
    key: 'app',
    storage,
    blacklist: ['chats']

};
export const history = createBrowserHistory();

export const initStore = () => {
    const store: Store = createStore(persistReducer(
        persistConfig,
        createRootReducer(history)),
        composeWithDevTools(
            applyMiddleware(logger, autobotMiddleware, routerMiddleware(history)),
        ));

    const persistor = persistStore(store);
    return { store, persistor };
};
