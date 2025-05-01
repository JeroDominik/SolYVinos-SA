import { useEffect } from 'react'

export default function VideoTunel () {
  useEffect(() => {
    const video = document.querySelector('video')
    if (video instanceof HTMLVideoElement) {
      video.play().catch(() => {
        video.muted = true
        video.play()
      })
    }
  }, [])

  return (
    <video className="absolute h-full w-full object-center object-cover top-0 bottom-0 brightness-75"
      autoPlay
      muted
      loop
      playsInline
      preload="auto">
      <source src="/VideoJuanchi1.mp4" type="video/mp4"/>
    </video>
  )
}
