import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Riri Mizo AI Workspace
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore AI-powered features: Text-to-Speech, Speech-to-Text, and Chat
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Link 
          href="/tts" 
          className="group block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="text-center">
            <div className="text-4xl mb-4">🗣️</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Text to Speech</h2>
            <p className="text-gray-600">
              Convert text into natural-sounding speech with advanced AI models
            </p>
          </div>
        </Link>

        <Link 
          href="/stt" 
          className="group block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="text-center">
            <div className="text-4xl mb-4">🎤</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Speech to Text</h2>
            <p className="text-gray-600">
              Transcribe speech into text with high accuracy and speed
            </p>
          </div>
        </Link>

        <Link 
          href="/chat" 
          className="group block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="text-center">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">AI Chat</h2>
            <p className="text-gray-600">
              Engage in intelligent conversations with our AI assistant
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </div>
  )
}
