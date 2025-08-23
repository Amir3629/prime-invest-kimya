"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export function VideoCarousel() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<HTMLVideoElement | null>(null)

  const videos = [
    { src: "/videos/2.mp4" }, // First video is now 2.mp4
    { src: "/videos/1.mp4" }, // Second video is 1.mp4
    { src: "/videos/3.mp4" }, // Third video is 3.mp4
  ]

  useEffect(() => {
    const videoElement = document.getElementById(`video-${currentVideoIndex}`) as HTMLVideoElement
    if (videoElement) {
      setCurrentVideo(videoElement)
      // Reset video to beginning
      videoElement.currentTime = 0
      if (isPlaying) {
        videoElement.play()
      }
    }
  }, [currentVideoIndex, isPlaying])

  const nextVideo = () => {
    if (currentVideo) {
      currentVideo.pause()
      setIsPlaying(false)
    }
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    if (currentVideo) {
      currentVideo.pause()
      setIsPlaying(false)
    }
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const togglePlayPause = () => {
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause()
        setIsPlaying(false)
      } else {
        currentVideo.play()
        setIsPlaying(true)
      }
    }
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    // Auto-advance to next video after a short delay
    setTimeout(() => {
      nextVideo()
    }, 1000)
  }

  const handleVideoClick = (index: number) => {
    if (currentVideo) {
      currentVideo.pause()
      setIsPlaying(false)
    }
    setCurrentVideoIndex(index)
  }

  return (
    <ScrollAnimation direction="up" delay={100}>
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Product Videos</h3>
        
        <div className={`relative mx-auto transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-w-5xl' : 'max-w-2xl'
        }`}>
          {/* Video Container */}
          <div 
            className={`relative bg-black rounded-lg overflow-hidden shadow-xl transition-all duration-500 ease-in-out ${
              isExpanded ? 'h-auto aspect-video' : 'h-64'
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Render all videos but only show the current one */}
            {videos.map((video, index) => (
              <video
                key={index}
                id={`video-${index}`}
                className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                  index === currentVideoIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                } ${isPlaying && index === currentVideoIndex ? 'scale-105' : ''}`}
                style={{
                  objectFit: isExpanded ? 'contain' : 'cover'
                }}
                poster={index === 0 ? "/images/video perview/perview.png" : undefined}
                onEnded={handleVideoEnd}
                muted
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
            
            {/* Play/Pause Overlay - Smoothly disappears when playing */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
              isPlaying && !isHovering ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              <Button
                onClick={togglePlayPause}
                size="lg"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/30 text-white rounded-full w-16 h-16 transition-all duration-300 hover:scale-110"
              >
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
              </Button>
            </div>
            
            {/* Expand/Collapse Button */}
            <div className="absolute top-4 right-4">
              <Button
                onClick={toggleExpand}
                size="sm"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/30 text-white rounded-full w-10 h-10"
              >
                {isExpanded ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Navigation Arrows - Outside the video frame */}
          <button
            onClick={prevVideo}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-[#198c43] hover:text-[#2d9d5a] transition-colors duration-300"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={nextVideo}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-[#198c43] hover:text-[#2d9d5a] transition-colors duration-300"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Video Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => handleVideoClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex 
                    ? "bg-[#198c43] scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
} 