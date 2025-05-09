"use client"

import { useState } from "react"
import { VideoModal } from "@/components/video-modal"

interface VideoInfo {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  contentUrl: string
  embedUrl: string
}

export function VideoSection({ videoInfo }: { videoInfo: VideoInfo }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">See SweatyJob in Action</h2>
        <div className="bg-gray-900 rounded-xl p-8">
          <div
            className="aspect-video bg-black/50 rounded-lg overflow-hidden relative flex items-center justify-center cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
            role="button"
            aria-label="Play video"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsModalOpen(true)
              }
            }}
          >
            <img
              src={videoInfo.thumbnailUrl || "/placeholder.svg"}
              alt={videoInfo.name}
              className="w-full h-full object-cover absolute inset-0 group-hover:opacity-80 transition-opacity"
            />
            <div className="relative z-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 transform group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">{videoInfo.name}</h3>
            <p className="text-gray-300">{videoInfo.description}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                1:30
              </span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
                HD Quality
              </span>
              <span className="bg-green-900 text-green-100 px-3 py-1 rounded-full text-xs flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Exclusive Demo
              </span>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoInfo.contentUrl}
        title={videoInfo.name}
      />
    </>
  )
}
