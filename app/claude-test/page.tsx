import ClaudeChat from '../../components/ClaudeChat';

export default function ClaudeTestPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Claude API Integration Test
          </h1>
          <p className="text-lg text-gray-600">
            Test your Claude API connection in Next.js
          </p>
        </div>

        <ClaudeChat />

        <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Setup Instructions</h3>
          <div className="space-y-4 text-sm">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Before Testing:</h4>
              <ol className="list-decimal list-inside space-y-2 text-yellow-700">
                <li>Get your Claude API key from <a href="https://console.anthropic.com/" target="_blank" className="underline">Anthropic Console</a></li>
                <li>Add it to your <code className="bg-yellow-100 px-1 rounded">.env.local</code> file:</li>
                <li><code className="bg-yellow-100 px-2 py-1 rounded block mt-1">ANTHROPIC_API_KEY=your_actual_key_here</code></li>
                <li>Restart your development server</li>
              </ol>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <h4 className="font-semibold text-blue-800 mb-2">🔗 API Endpoints:</h4>
              <ul className="list-disc list-inside space-y-1 text-blue-700">
                <li><strong>GET:</strong> <code>/api/claude</code> - Test endpoint status</li>
                <li><strong>POST:</strong> <code>/api/claude</code> - Send messages to Claude</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <h4 className="font-semibold text-green-800 mb-2">✨ Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-green-700">
                <li>Real-time chat with Claude API</li>
                <li>Error handling and loading states</li>
                <li>Message history and timestamps</li>
                <li>Keyboard shortcuts (Enter to send, Shift+Enter for new line)</li>
                <li>Token usage tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 