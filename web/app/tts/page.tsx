'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TTSPage() {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSpeak = async () => {
    if (!text.trim()) return
    
    setIsLoading(true)
    try {
      // Placeholder for TTS API integration
      // This would typically call your backend API
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1
      speechSynthesis.speak(utterance)
      
      utterance.onend = () => {
        setIsLoading(false)
      }
    } catch (error) {
      console.error('TTS Error:', error)
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Text to Speech</h1>
        <p className="text-gray-600">
          Enter text below and convert it to natural-sounding speech
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <div className="mb-6">
          <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 mb-2">
            Text to Convert
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the text you want to convert to speech..."
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {text.length} characters
          </div>
          <button
            onClick={handleSpeak}
            disabled={!text.trim() || isLoading}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Speaking...
              </>
            ) : (
              <>
                🔊 Speak
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-sm font-medium text-blue-900 mb-2">Note:</h3>
        <p className="text-sm text-blue-700">
          This demo uses the browser's built-in speech synthesis. In a production environment, 
          you would typically integrate with advanced TTS services like OpenAI's TTS API, 
          Google Cloud Text-to-Speech, or Azure Cognitive Services.
        </p>
      </div>
    </div>
  )
}
