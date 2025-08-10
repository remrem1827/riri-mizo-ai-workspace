'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

export default function STTPage() {
  const [transcript, setTranscript] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(true)
  const recognitionRef = useRef<any>(null)

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setIsSupported(false)
      return
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognition.onstart = () => {
      setIsListening(true)
    }

    recognition.onresult = (event: any) => {
      let finalTranscript = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript + ' '
        }
      }
      if (finalTranscript) {
        setTranscript(prev => prev + finalTranscript)
      }
    }

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error)
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognitionRef.current = recognition
    recognition.start()
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
    setIsListening(false)
  }

  const clearTranscript = () => {
    setTranscript('')
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Speech to Text</h1>
        <p className="text-gray-600">
          Click the microphone to start recording and see your speech converted to text
        </p>
      </div>

      {!isSupported && (
        <div className="mb-6 p-4 bg-red-50 rounded-lg">
          <p className="text-red-700">
            Speech recognition is not supported in your browser. Please try Chrome, Safari, or Edge.
          </p>
        </div>
      )}

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <div className="text-center mb-6">
          <button
            onClick={isListening ? stopListening : startListening}
            disabled={!isSupported}
            className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl transition-all duration-200 ${
              isListening
                ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            } disabled:bg-gray-400 disabled:cursor-not-allowed`}
          >
            {isListening ? '⏹️' : '🎤'}
          </button>
          <p className="mt-2 text-sm text-gray-600">
            {isListening ? 'Listening... Click to stop' : 'Click to start recording'}
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transcript
          </label>
          <textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder="Your speech will appear here..."
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            readOnly={isListening}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {transcript.length} characters
          </div>
          <button
            onClick={clearTranscript}
            disabled={!transcript}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-sm font-medium text-blue-900 mb-2">Note:</h3>
        <p className="text-sm text-blue-700">
          This demo uses the browser's built-in speech recognition. For production applications,
          you would typically integrate with advanced STT services like OpenAI's Whisper API,
          Google Cloud Speech-to-Text, or Azure Cognitive Services for better accuracy and
          language support.
        </p>
      </div>
    </div>
  )
}
