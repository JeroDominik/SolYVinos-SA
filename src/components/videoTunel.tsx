export default function VideoTunel () {
  return (
    <video src={require('../../public/TunelOptimizadoAppleHD.mp4')}
        className="absolute h-full w-full object-center object-cover top-0 bottom-0 brightness-75"
        autoPlay
        muted
        loop
        playsInline
    />
  )
}
