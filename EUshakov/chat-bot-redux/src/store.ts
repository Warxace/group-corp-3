import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { autobotMiddleware } from './middlewares/autobotMiddleware';
import createRootReducer from './reducers';


export const history = createBrowserHistory();

export const store: Store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(logger, autobotMiddleware, routerMiddleware(history))));