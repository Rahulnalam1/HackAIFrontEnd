import React, { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

const API_KEY = "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"; // Ensure to replace this with your actual API key

const MyChatbot = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am your safety assistant: notifI",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);
      const content = response.choices[0]?.message?.content;
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "Notif" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        { role: "system", content: "I'm a Student using ChatGPT for learning" },
        ...apiMessages,
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    return response.json();
  }

  return (
    <div className="relative max-w-md mx-auto my-5 p-4 shadow-lg rounded-lg bg-white">
    <MainContainer className="flex flex-col h-full">
      <ChatContainer className="flex-grow overflow-hidden">
        <MessageList
          className="flex flex-col-reverse overflow-y-auto"
          scrollBehavior="smooth"
          typingIndicator={isTyping ? <TypingIndicator content="notifI is typing" /> : null}
        >
          {messages.map((message, i) => (
            <Message key={i} model={message} className="p-3 my-2 rounded-lg bg-blue-100 max-w-xs mx-3" />
          ))}
        </MessageList>
        <MessageInput placeholder="Send a Message" onSend={handleSendRequest} className="border-t-2" />
      </ChatContainer>
    </MainContainer>
    </div>
  );
};

export default MyChatbot;
