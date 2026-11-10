import { useState, useEffect } from 'react'
import { ShieldIcon } from './icons.jsx'

export default function Toast() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="toast">
      <div className="toast-icon">
        <ShieldIcon />
      </div>
      <div className="toast-text">
        <strong>Welcome to my Portfolio</strong>
        <span>Double-click icons to open apps</span>
      </div>
    </div>
  )
}
