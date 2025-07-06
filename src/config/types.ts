export interface IChat{
    id: string,
    name: string,
    createdAt: Date,
    lastMessage: string,
    lastMessageTime: Date
}

export interface IMessage{
    id: string,
    chatId: string,
    content: string,
    timeStamp: Date,
    userId: string,
    userName: string,
    type: 'sent' | 'received'
}

export interface IChatContextType {
    chats: IChat[];
    messages: IMessage[];
    currentChat: IChat | null;
    sendMessages: (message: string,userName: string) => void;
    getMessages: (chatId: string) => IMessage[];
    getChats: () => IChat[];
    createChat: (name: string) => IChat;
    deleteChat: (chatId: string) => void;
    updateChat: (chatId: string, name: string) => void;
    setCurrentChat: React.Dispatch<React.SetStateAction<IChat | null>>;
  }