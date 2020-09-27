import React from 'react';
import { ChatList } from '../ChatList/ChatList';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { chatsChatAdded } from '../actions/chats';
import { push } from 'connected-react-router';


export const ChatListContainer: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const chatList = useSelector((state: AppState) => state.chats.entries.map(chat => ({
        id: chat.id,
        title: chat.title,
        link: `/chat/${chat.id}`
    })));
    const nextChatId = useSelector((state: AppState) => state.chats.entries.reduce((prev, cur) => cur.id > prev ? cur.id : prev, 0) + 1);

    const handleChatAdded = (chatName: string) => {
        dispatch(chatsChatAdded(chatName));
        dispatch(push(`/chat/${nextChatId}`));
    }

    return <ChatList chatList={chatList} chatAdded={handleChatAdded} />
}