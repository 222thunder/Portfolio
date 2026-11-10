import { useState, useRef, useEffect } from 'react'

export default function Window({
  id,
  title,
  isOpen,
  onClose,
  zIndex,
  onFocus,
  defaultRect,
  headerActions,
  children,
}) {
  const [rect, setRect] = useState(defaultRect)
  const [isMaximized, setIsMaximized] = useState(false)
  const [prevRect, setPrevRect] = useState(defaultRect)
  const [isDragging, setIsDragging] = useState(false)
  const windowRef = useRef(null)
  const dragRef = useRef({ startX: 0, startY: 0, initialLeft: 0, initialTop: 0 })

  const DOCK_CLEARANCE = 105
  const MENUBAR_HEIGHT = 28

  // Clamp window position on open and resize so it never goes under the dock or menubar
  useEffect(() => {
    if (!isOpen) return
    const clampToWorkArea = () => {
      if (!windowRef.current) return
      const winEl = windowRef.current
      const winHeight = winEl.offsetHeight
      const currentTop = winEl.offsetTop
      const maxTop = Math.max(MENUBAR_HEIGHT, window.innerHeight - winHeight - DOCK_CLEARANCE)
      if (currentTop > maxTop) {
        setRect((prev) => ({ ...prev, top: `${maxTop}px` }))
      }
    }
    const t = setTimeout(clampToWorkArea, 40)
    window.addEventListener('resize', clampToWorkArea)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', clampToWorkArea)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e) => {
      const dx = e.clientX - dragRef.current.startX
      const dy = e.clientY - dragRef.current.startY

      const winEl = windowRef.current
      const winHeight = winEl ? winEl.offsetHeight : 400
      const winWidth = winEl ? winEl.offsetWidth : 600

      // Keep window strictly between MenuBar (top 28px) and Dock (bottom clearance 105px)
      const maxTop = Math.max(MENUBAR_HEIGHT, window.innerHeight - winHeight - DOCK_CLEARANCE)
      const minTop = MENUBAR_HEIGHT
      const newTop = Math.min(maxTop, Math.max(minTop, dragRef.current.initialTop + dy))

      // Keep window within viewport horizontally
      const minLeft = 10 - winWidth + 80
      const maxLeft = window.innerWidth - 80
      const newLeft = Math.min(maxLeft, Math.max(minLeft, dragRef.current.initialLeft + dx))

      setRect((prev) => ({
        ...prev,
        left: `${newLeft}px`,
        top: `${newTop}px`,
      }))
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  const handleBarMouseDown = (e) => {
    if (e.target.closest('.tls') || e.target.closest('.win-actions')) return
    onFocus()
    if (isMaximized) return

    const el = e.currentTarget.closest('.mac-win')
    const currentLeft = el.offsetLeft
    const currentTop = el.offsetTop

    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialLeft: currentLeft,
      initialTop: currentTop,
    }
    setIsDragging(true)
    e.preventDefault()
  }

  const toggleMaximize = (e) => {
    e.stopPropagation()
    onFocus()
    if (isMaximized) {
      setRect(prevRect)
      setIsMaximized(false)
    } else {
      setPrevRect(rect)
      setRect({
        top: '28px',
        left: '12px',
        width: 'calc(100vw - 24px)',
        height: 'calc(100vh - 28px - 105px)',
      })
      setIsMaximized(true)
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={windowRef}
      className="mac-win"
      style={{
        zIndex,
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
      }}
      onMouseDown={onFocus}
    >
      <div
        className={`win-bar ${isDragging ? 'grabbing' : ''}`}
        onMouseDown={handleBarMouseDown}
      >
        <div className="tls">
          <div className="tl c" onClick={onClose} title="Close" />
          <div className="tl m" onClick={onClose} title="Minimize" />
          <div className="tl x" onClick={toggleMaximize} title={isMaximized ? "Restore" : "Maximize"} />
        </div>
        <div className="win-title">{title}</div>
        {headerActions && <div className="win-actions">{headerActions}</div>}
      </div>
      <div
        className="win-body"
        style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
      >
        {children}
      </div>
    </div>
  )
}
