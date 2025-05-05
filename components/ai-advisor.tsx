"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function AiAdvisor() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate an API call (replace with actual API endpoint)
    setTimeout(() => {
      setAnswer(
        "Our AI mowers use advanced GPS technology and computer vision to create a precise map of your property. The system establishes virtual boundaries without physical wires, allowing the mower to navigate efficiently while avoiding obstacles.",
      )
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Ask a question about our AI mowers..."
          className="flex-1 bg-slate-700 border border-slate-600 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          value={question}
          onChange={handleQuestionChange}
        />
        <Button onClick={handleSubmit} disabled={isLoading} className="ml-4 bg-blue-600 hover:bg-blue-700">
          {isLoading ? "Loading..." : "Get Answer"}
        </Button>
      </div>
      {answer && (
        <div className="bg-slate-800 p-4 rounded-md">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  )
}
