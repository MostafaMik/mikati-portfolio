import { useEffect, useRef } from 'react'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4'
const SCRUB_SENSITIVITY = 0.8

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let prevX: number | null = null
    let targetTime = 0
    let seeking = false

    const requestSeek = () => {
      if (seeking || !video.duration) return
      if (Math.abs(video.currentTime - targetTime) < 0.001) return
      seeking = true
      video.currentTime = targetTime
    }

    const onSeeked = () => {
      seeking = false
      // queue the next seek if the target moved while we were seeking
      if (Math.abs(video.currentTime - targetTime) >= 0.001) requestSeek()
    }

    const onMouseMove = (e: MouseEvent) => {
      if (prevX === null) {
        prevX = e.clientX
        return
      }
      const delta = e.clientX - prevX
      prevX = e.clientX
      if (!video.duration) return
      const offset = (delta / window.innerWidth) * SCRUB_SENSITIVITY * video.duration
      targetTime = Math.min(Math.max(targetTime + offset, 0), video.duration)
      requestSeek()
    }

    video.addEventListener('seeked', onSeeked)
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      video.removeEventListener('seeked', onSeeked)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={VIDEO_SRC}
      muted
      playsInline
      preload="auto"
      className="fixed inset-0 z-0 h-full w-full object-cover"
      style={{ objectPosition: '70% center' }}
    />
  )
}
