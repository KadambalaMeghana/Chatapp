import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
    const App = () => {
        if (!localStorage.getItem('username')) return <LoginForm />;
  
    return (
      <ChatEngine
        height="100vh"
        projectID="f3bae2d7-15be-496f-9b17-e53b40c7fef8"
        userName="Kusuma"
      userSecret="Kusuma"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

      />
    );
  };
  export default App;