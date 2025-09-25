'use client';

import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ClaudeChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          maxTokens: 1000,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response from Claude');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Chat with Claude</h2>
      
      {/* Messages */}
      <div className="h-96 overflow-y-auto mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">Start a conversation with Claude...</p>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`mb-3 p-3 rounded-lg ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white ml-8'
                  : 'bg-white text-gray-800 mr-8 border'
              }`}
            >
              <div className="font-semibold text-sm mb-1">
                {message.role === 'user' ? 'You' : 'Claude'}
              </div>
              <div className="whitespace-pre-wrap">{message.content}</div>
              <div className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="bg-white text-gray-800 mr-8 border p-3 rounded-lg mb-3">
            <div className="font-semibold text-sm mb-1">Claude</div>
            <div className="flex items-center">
              <div className="animate-pulse">Thinking...</div>
            </div>
          </div>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here... (Press Enter to send)"
          className="flex-1 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim() || isLoading}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>

      {/* Usage Tips */}
      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Tips:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Ask Claude questions about coding, writing, analysis, and more</li>
          <li>Use Shift+Enter for new lines, Enter to send</li>
          <li>Make sure your API key is set in .env.local</li>
        </ul>
      </div>
    </div>
  );
} 