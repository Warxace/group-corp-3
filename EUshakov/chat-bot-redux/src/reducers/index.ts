import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history';
import { authReducer, AuthReducerState } from './auth';
import { chatsReducer, ChatsReducerState } from './chats';

export type AppState = {
    chats: ChatsReducerState,
    auth: AuthReducerState
};

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    chats: chatsReducer,
    auth: authReducer
})
export default createRootReducer