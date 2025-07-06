import React, { useContext } from 'react'
import { ChatContext } from '../storage/context'
import type { IChat } from '../config/types'

const ChatList = () => {
  const { chats, currentChat, setCurrentChat, createChat, deleteChat } = useContext(ChatContext)
  const [newChatName, setNewChatName] = React.useState('')

  const handleChatClick = (chat: IChat) => {
    setCurrentChat(chat)
  }

  const handleCreateChat = () => {
    if (newChatName.trim()) {
      createChat(newChatName.trim())
      setNewChatName('')
    }
  }

  const handleDeleteChat = (chatId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    deleteChat(chatId)
  }

  return (
    <div style={{ 
      width: '300px', 
      borderRight: '1px solid #ccc', 
      padding: '20px',
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <h2>Chats</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="New chat name..."
          value={newChatName}
          onChange={(e) => setNewChatName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleCreateChat()}
          style={{ 
            width: '100%', 
            padding: '8px', 
            marginBottom: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <button 
          onClick={handleCreateChat}
          style={{
            width: '100%',
            padding: '8px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Create Chat
        </button>
      </div>

      <div>
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleChatClick(chat)}
            style={{
              padding: '12px',
              marginBottom: '8px',
              backgroundColor: currentChat?.id === chat.id ? '#e3f2fd' : 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ fontWeight: 'bold' }}>{chat.name}</div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                {chat.lastMessage || 'No messages yet'}
              </div>
            </div>
            <button
              onClick={(e) => handleDeleteChat(chat.id, e)}
              style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatList