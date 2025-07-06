import React, { useContext, useRef, useEffect } from 'react'
import { ChatContext } from '../storage/context'

const ChatWindow = () => {
  const { currentChat, messages, sendMessages } = useContext(ChatContext)
  const [newMessage, setNewMessage] = React.useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const currentMessages = messages.filter(msg => msg.chatId === currentChat?.id)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentMessages])

  const handleSendMessage = () => {
    if (newMessage.trim() && currentChat) {
      sendMessages(newMessage.trim(),'You')
      setNewMessage('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  if (!currentChat) {
    return (
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f9f9f9'
      }}>
        <div style={{ textAlign: 'center', color: '#666' }}>
          <h2>Select a chat to start messaging</h2>
          <p>Choose a chat from the sidebar or create a new one</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ 
      flex: 1, 
      display: 'flex', 
      flexDirection: 'column',
      height: '100vh'
    }}>
      <div style={{
        padding: '20px',
        borderBottom: '1px solid #ccc',
        backgroundColor: 'white'
      }}>
        <h2>{currentChat.name}</h2>
        <p style={{ color: '#666', margin: 0 }}>
          {currentMessages.length} messages
        </p>
      </div>

      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        backgroundColor: '#f9f9f9'
      }}>
        {currentMessages.map((message) => (
          <div
            key={message.id}
            style={{
              marginBottom: '12px',
              display: 'flex',
              justifyContent: message.type === 'sent' ? 'flex-end' : 'flex-start'
            }}
          >
            <div style={{
              maxWidth: '70%',
              padding: '12px 16px',
              borderRadius: '18px',
              backgroundColor: message.type === 'sent' ? '#007bff' : 'white',
              color: message.type === 'sent' ? 'white' : 'black',
              border: message.type === 'received' ? '1px solid #ddd' : 'none',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              <div style={{ marginBottom: '4px' }}>
                <strong>{message.userName}</strong>
              </div>
              <div>{message.content}</div>
              <div style={{
                fontSize: '11px',
                opacity: 0.7,
                marginTop: '4px',
                textAlign: 'right'
              }}>
                {formatTime(message.timeStamp)}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div style={{
        padding: '20px',
        borderTop: '1px solid #ccc',
        backgroundColor: 'white'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              flex: 1,
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '20px',
              outline: 'none'
            }}
          />
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            style={{
              padding: '12px 24px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              cursor: newMessage.trim() ? 'pointer' : 'not-allowed',
              opacity: newMessage.trim() ? 1 : 0.6
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow