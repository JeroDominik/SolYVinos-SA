'use client'

export default function VideoTunel () {
  return (
    <video className="absolute h-full w-full object-center object-cover top-0 bottom-0 brightness-75"
      autoPlay
      muted
      loop
      playsInline>
      <source src="/videoTesla.webm" type="video/mp4"/>
    </video>
  )
}
