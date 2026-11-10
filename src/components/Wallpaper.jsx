import { useRef, useEffect } from 'react'

export default function Wallpaper({ onProgress, onReady }) {
  const videoRef = useRef(null)
  const reportedReady = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleProgress = () => {
      if (video.buffered.length > 0 && video.duration) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1)
        const pct = Math.round((bufferedEnd / video.duration) * 100)
        onProgress?.(pct)
      }
    }

    const handleCanPlay = () => {
      if (!reportedReady.current) {
        reportedReady.current = true
        onProgress?.(100)
        onReady?.()
      }
    }

    // Also fire on 'canplaythrough' for more reliable detection
    const handleCanPlayThrough = () => {
      handleCanPlay()
    }

    video.addEventListener('progress', handleProgress)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('canplaythrough', handleCanPlayThrough)
    // If video is already loaded (e.g. cached)
    if (video.readyState >= 3) {
      handleCanPlay()
    }

    return () => {
      video.removeEventListener('progress', handleProgress)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
    }
  }, [onProgress, onReady])

  return (
    <div className="wallpaper">
      <video ref={videoRef} autoPlay loop muted playsInline>
        <source src="/wallpaper.mov" type="video/quicktime" />
        <source src="/wallpaper.mov" type="video/mp4" />
        <source src="/Sonoma%20Graphic%20Light%20Landscape.mov" type="video/quicktime" />
        <source src="/Sonoma%20Graphic%20Light%20Landscape.mov" type="video/mp4" />
      </video>
    </div>
  )
}
