import ChatList from "./components/ChatList"
import ChatWindow from "./components/ChatWindow"
import { ChatProvider } from "./storage/context"

function App(){
  return (
    <ChatProvider>
      <div style={{ 
        display: 'flex', 
        height: '100vh',
      }}>
        <ChatList />
        <ChatWindow />
      </div>
    </ChatProvider>
  )
}

export default App
