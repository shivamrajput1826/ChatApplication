# Chat Application

A modern, real-time chat application built with React, TypeScript, and Vite. This application provides a WhatsApp/Slack-like interface for creating and managing multiple chat conversations.

## 🚀 Features

### Core Functionality
- **Create Multiple Chats** - Start new conversations with custom names
- **Send & Receive Messages** - Real-time message exchange within chats
- **Delete Chats** - Remove unwanted conversations
- **Switch Between Chats** - Seamlessly navigate between different conversations
- **Message History** - View complete conversation history for each chat

### User Experience
- **Modern UI/UX** - Clean, intuitive interface inspired by popular chat apps
- **Responsive Design** - Works on desktop and mobile devices
- **Auto-scroll** - Automatically scrolls to latest messages
- **Visual Feedback** - Active chat highlighting and message status indicators
- **Keyboard Shortcuts** - Press Enter to send messages

### Technical Features
- **TypeScript** - Full type safety and better development experience
- **React Context API** - Centralized state management
- **Mock Data** - Pre-loaded sample conversations for testing
- **Component Architecture** - Modular, reusable components

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **State Management**: React Context API
- **Styling**: Inline CSS (can be easily migrated to CSS-in-JS or CSS modules)

## 📁 Project Structure

```
ChatApplication/
├── src/
│   ├── components/
│   │   ├── ChatList.tsx      # Sidebar with chat list and management
│   │   └── ChatWindow.tsx    # Main chat area with messages
│   ├── config/
│   │   └── types.ts          # TypeScript interfaces
│   ├── storage/
│   │   └── context.tsx       # React Context for state management
│   ├── App.tsx               # Main application component
│   └── main.tsx              # Application entry point
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ChatApplication
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 How to Use

### Creating a New Chat
1. Type a chat name in the input field in the sidebar
2. Click "Create Chat" or press Enter
3. The new chat will appear in the chat list

### Sending Messages
1. Select a chat from the sidebar
2. Type your message in the input field at the bottom
3. Click "Send" or press Enter to send the message

### Managing Chats
- **Switch Chats**: Click on any chat in the sidebar
- **Delete Chats**: Click the red "×" button next to a chat name
- **View Messages**: All messages are automatically displayed when you select a chat

## 📱 Sample Data

The application comes with pre-loaded sample conversations:

- **Work Team** - Professional work discussions
- **Family Group** - Personal family conversations  
- **Project Alpha** - Project-specific discussions

Each sample chat includes realistic messages with timestamps and different users.

## 🏗️ Architecture

### State Management
The application uses React Context API for centralized state management:

- **Chats State**: List of all available chats
- **Messages State**: All messages across all chats
- **Current Chat**: Currently selected chat
- **Actions**: Functions for creating, deleting, and managing chats and messages

### Component Structure
- **ChatProvider**: Context provider wrapping the entire application
- **ChatList**: Sidebar component for chat management
- **ChatWindow**: Main chat interface for messages

### Data Flow
1. User interactions trigger context actions
2. Context updates state
3. Components re-render with new data
4. UI reflects changes immediately

## 🔧 Customization

### Adding New Features
- **User Authentication**: Integrate with auth providers
- **Real-time Updates**: Add WebSocket connections
- **File Sharing**: Implement file upload functionality
- **Message Reactions**: Add emoji reactions to messages
- **Group Chats**: Support multiple users per chat

### Styling
The application uses inline styles for simplicity. To customize:
- Replace inline styles with CSS modules or styled-components
- Update color schemes in the style objects
- Modify layout dimensions and spacing

### Backend Integration
Currently uses mock data. To integrate with a backend:
- Replace mock functions in `context.tsx` with API calls
- Add error handling for network requests
- Implement real-time updates with WebSockets

## 🐛 Troubleshooting

### Common Issues

**ChatProvider not working**
- Ensure the context file has `.tsx` extension
- Check that all imports are correct
- Verify TypeScript types are properly defined

**Messages not displaying**
- Check that the current chat is selected
- Verify message filtering logic in ChatWindow
- Ensure message data structure matches interface

**Styling issues**
- Check browser compatibility
- Verify CSS properties are supported
- Test on different screen sizes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or support, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using React and TypeScript**
