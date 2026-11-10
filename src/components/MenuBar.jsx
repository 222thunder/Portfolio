import { useState, useEffect } from 'react'
import { WifiIcon } from './icons.jsx'

export default function MenuBar({ onOpen }) {
  const [clock, setClock] = useState('')

  useEffect(() => {
    const fmt = () => {
      const now = new Date()
      setClock(now.toLocaleString('en-US', {
        weekday: 'short', month: 'short', day: 'numeric',
        hour: 'numeric', minute: '2-digit', hour12: true,
      }))
    }
    fmt()
    const id = setInterval(fmt, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="menubar">
      <div className="mb-left">
        <span className="mb-apple">&#63743;</span>
        <span className="mb-name">Sanyam Dhawan</span>
        <div className="mb-items">
          <button className="mb-item" onClick={() => onOpen('about')}>About</button>
        </div>
      </div>
      <div className="mb-right">
        <WifiIcon />
        <span className="mb-clock">{clock}</span>
      </div>
    </div>
  )
}
