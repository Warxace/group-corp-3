import { Middleware, MiddlewareAPI } from 'redux'
import { ChatActionTypes, chatsMessageSend, ChatsMessageSendAction } from '../actions/chats';
const botName = "Autobot";
export const autobotMiddleware: Middleware = store => next => action => {
    const result = next(action);
    if (action.type === ChatActionTypes.CHATS_MESSAGE_SEND) {
        const sendAction = action as ChatsMessageSendAction;
        const { author } = sendAction.payload;
        if (author !== botName) {
            setTimeout(() =>
                store.dispatch(chatsMessageSend({
                    message: `Hello, ${author}! This is ${botName}`,
                    author: botName
                }, sendAction.payload.chatId)), 2000);
        }
    }
    return result
}