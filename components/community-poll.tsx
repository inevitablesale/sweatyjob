"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface PollOption {
  id: string
  text: string
  votes: number
}

export default function CommunityPoll() {
  const [options, setOptions] = useState<PollOption[]>([
    { id: "park-cleanup", text: "Park Cleanup & Beautification", votes: 42 },
    { id: "community-garden", text: "Community Garden Installation", votes: 38 },
    { id: "playground-repair", text: "Playground Repair & Painting", votes: 27 },
    { id: "tree-planting", text: "Neighborhood Tree Planting", votes: 31 },
    { id: "senior-help", text: "Senior Home Assistance", votes: 24 },
  ])

  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)

  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0)

  const handleVote = () => {
    if (!selectedOption) return

    setOptions(
      options.map((option) => (option.id === selectedOption ? { ...option, votes: option.votes + 1 } : option)),
    )

    setHasVoted(true)
  }

  return (
    <div className="bg-slate-800 p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-white mb-4">Vote: First Sweaty Saturday Project</h3>
      <p className="text-gray-300 mb-6">
        Help us choose our first community service project. What would make the biggest impact in Richmond?
      </p>

      <div className="space-y-3 mb-6">
        {options.map((option) => (
          <div
            key={option.id}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              selectedOption === option.id
                ? "bg-blue-600/20 border border-blue-500"
                : "bg-slate-700 border border-slate-600 hover:bg-slate-700/80"
            }`}
            onClick={() => !hasVoted && setSelectedOption(option.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
                    selectedOption === option.id ? "bg-blue-500" : "border border-gray-400"
                  }`}
                >
                  {selectedOption === option.id && <CheckCircle size={12} className="text-white" />}
                </div>
                <span className="text-white">{option.text}</span>
              </div>
              {hasVoted && (
                <div className="text-sm text-gray-400">
                  {Math.round((option.votes / totalVotes) * 100)}% ({option.votes})
                </div>
              )}
            </div>

            {hasVoted && (
              <div className="mt-2 w-full bg-slate-600 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: `${(option.votes / totalVotes) * 100}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {!hasVoted ? (
        <Button onClick={handleVote} disabled={!selectedOption} className="w-full bg-blue-600 hover:bg-blue-700">
          Submit Vote
        </Button>
      ) : (
        <p className="text-center text-gray-300">Thanks for voting! Total votes: {totalVotes}</p>
      )}
    </div>
  )
}
