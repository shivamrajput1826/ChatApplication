import React, { useState, createContext } from 'react';
import type { IChat, IMessage, IChatContextType } from '../config/types';

// eslint-disable-next-line react-refresh/only-export-components
export const ChatContext = createContext<IChatContextType>({} as IChatContextType);

const sampleChats: IChat[] = [
  {
    id: '1',
    name: 'Work Team',
    createdAt: new Date('2024-01-15'),
    lastMessage: 'Meeting at 3 PM today',
    lastMessageTime: new Date('2024-01-20T14:30:00'),
  },
  {
    id: '2',
    name: 'Family Group',
    createdAt: new Date('2024-01-10'),
    lastMessage: 'Dinner tonight?',
    lastMessageTime: new Date('2024-01-20T12:15:00'),
  },
];

const sampleMessages: IMessage[] = [
  {
    id: '1',
    chatId: '1',
    content: 'Good morning team!',
    timeStamp: new Date('2024-01-20T09:00:00'),
    userId: 'user1',
    userName: 'Rajesh',
    type: 'received',
  },
  {
    id: '2',
    chatId: '1',
    content: 'Morning! How is everyone doing?',
    timeStamp: new Date('2024-01-20T09:05:00'),
    userId: 'user2',
    userName: 'Sarah',
    type: 'received',
  },
  {
    id: '3',
    chatId: '1',
    content: 'All good here! Working on the new feature.',
    timeStamp: new Date('2024-01-20T09:10:00'),
    userId: 'currentUser',
    userName: 'You',
    type: 'sent',
  },
  {
    id: '4',
    chatId: '1',
    content: 'Meeting at 3 PM today',
    timeStamp: new Date('2024-01-20T14:30:00'),
    userId: 'user3',
    userName: 'Mike',
    type: 'received',
  },

  // Family Group messages
  {
    id: '5',
    chatId: '2',
    content: 'Hey everyone!',
    timeStamp: new Date('2024-01-20T10:00:00'),
    userId: 'user4',
    userName: 'Mom',
    type: 'received',
  },
  {
    id: '6',
    chatId: '2',
    content: 'Hi Mom! How are you?',
    timeStamp: new Date('2024-01-20T10:05:00'),
    userId: 'currentUser',
    userName: 'You',
    type: 'sent',
  },
  {
    id: '7',
    chatId: '2',
    content: 'Dinner tonight?',
    timeStamp: new Date('2024-01-20T12:15:00'),
    userId: 'user5',
    userName: 'Dad',
    type: 'received',
  },
];
export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  

  const [chats, setChats] = useState<IChat[]>(sampleChats);
  const [messages, setMessages] = useState<IMessage[]>(sampleMessages);
  const [currentChat, setCurrentChat] = useState<IChat | null>(sampleChats[0]); 

  const sendMessages = (message: string,userName: string) => {
    if (!currentChat) return;

    const newMessage: IMessage = {
      id: crypto.randomUUID(),
      chatId: currentChat.id,
      content: message,
      timeStamp: new Date(),
      userId: currentChat.id,
      userName: userName,
      type: 'sent',
    };

    setMessages(prev => [...prev, newMessage]);

    setCurrentChat(prevChat =>
      prevChat
        ? {
            ...prevChat,
            lastMessage: message,
            lastMessageTime: new Date(),
          }
        : null
    );

    setChats(prev =>
      prev.map(chat =>
        chat.id === currentChat.id
          ? {
              ...chat,
              lastMessage: message,
              lastMessageTime: new Date(),
            }
          : chat
      )
    );
  };

  const getMessages = (chatId: string) => {
    return messages.filter(msg => msg.chatId === chatId);
  };

  const getChats = () => {
    return chats;
  };

  const createChat = (name: string): IChat => {
    const newChat: IChat = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date(),
      lastMessage: '',
      lastMessageTime: new Date(),
    };

    setChats(prev => [...prev, newChat]);
    return newChat;
  };

  const deleteChat = (chatId: string) => {
    setChats(prev => prev.filter(chat => chat.id !== chatId));
    setMessages(prev => prev.filter(msg => msg.chatId !== chatId));
    if (currentChat?.id === chatId) {
      setCurrentChat(null);
    }
  };

  const updateChat = (chatId: string, name: string) => {
    setChats(prev =>
      prev.map(chat => (chat.id === chatId ? { ...chat, name } : chat))
    );

    if (currentChat?.id === chatId) {
      setCurrentChat(prev => (prev ? { ...prev, name } : null));
    }
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        messages,
        currentChat,
        sendMessages,
        getMessages,
        getChats,
        createChat,
        deleteChat,
        updateChat,
        setCurrentChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
