export default function Wallpaper() {
  return (
    <div className="wallpaper">
      <video autoPlay loop muted playsInline>
        <source src="/wallpaper.mov" type="video/quicktime" />
        <source src="/wallpaper.mov" type="video/mp4" />
        <source src="/Sonoma%20Graphic%20Light%20Landscape.mov" type="video/quicktime" />
        <source src="/Sonoma%20Graphic%20Light%20Landscape.mov" type="video/mp4" />
      </video>
    </div>
  )
}
