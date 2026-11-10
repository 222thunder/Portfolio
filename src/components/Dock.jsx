import { useRef, useState, useCallback, useEffect } from 'react'
import {
  FinderIcon,
  LaunchpadIcon,
  SafariIcon,
  MessagesIcon,
  MailIcon,
  CalendarIcon,
  NotesIcon,
  MusicIcon,
  AppStoreIcon,
  SettingsIcon,
  TrashIcon,
  BlogIcon,
  FolderIcon,
  AboutIcon,
  ResumeIcon,
  ContactIcon,
} from './icons.jsx'

// macOS Dock Magnification Parameters
const MAX_SCALE = 1.62
const MAGNIFICATION_RADIUS = 155

export default function Dock({ openWindows, onToggleWindow }) {
  const dockRef = useRef(null)
  const animFrameRef = useRef(null)
  const mouseXRef = useRef(null)
  const isHoveredRef = useRef(false)
  const wrapsRef = useRef([])
  const itemsRef = useRef([])
  const scalesRef = useRef([])
  const velocitiesRef = useRef([])
  const tickRef = useRef(null)

  const [bouncingApps, setBouncingApps] = useState({})
  const [isHovered, setIsHovered] = useState(false)

  const triggerBounce = useCallback((appKey) => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return
    setBouncingApps((prev) => ({ ...prev, [appKey]: false }))
    requestAnimationFrame(() => {
      setBouncingApps((prev) => ({ ...prev, [appKey]: true }))
    })
    setTimeout(() => {
      setBouncingApps((prev) => ({ ...prev, [appKey]: false }))
    }, 820)
  }, [])

  // Animation frame loop for continuous, display-synced scaling and dynamic spacing
  const tick = useCallback(() => {
    const wraps = wrapsRef.current
    const items = itemsRef.current
    if (!wraps || wraps.length === 0) {
      animFrameRef.current = null
      return
    }

    const mx = mouseXRef.current
    const isHover = isHoveredRef.current
    let needsContinue = false

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    // Responsive dynamic spread factor to keep generous space between magnified icons
    const spreadFactor = window.innerWidth <= 850 ? 16 : window.innerWidth <= 1080 ? 22 : 30

    for (let i = 0; i < wraps.length; i++) {
      const wrap = wraps[i]
      const item = items ? items[i] : null
      if (!wrap) continue

      let targetScale = 1.0

      if (isHover && mx !== null && !prefersReducedMotion) {
        const rect = wrap.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const dist = Math.abs(mx - cx)

        if (dist < MAGNIFICATION_RADIUS) {
          // Cosine falloff with 1.4 exponent for zero derivative at peak & boundary
          const normDist = dist / MAGNIFICATION_RADIUS
          const cosVal = Math.cos(normDist * (Math.PI / 2))
          const influence = Math.pow(cosVal, 1.4)
          targetScale = 1 + (MAX_SCALE - 1) * influence
        }
      }

      const currentScale = scalesRef.current[i] ?? 1.0
      const extraMargin = (targetScale - 1) * spreadFactor

      if (isHover && mx !== null) {
        // Direct 1:1 cursor tracking with dynamic push-apart margins
        scalesRef.current[i] = targetScale
        velocitiesRef.current[i] = 0
        wrap.style.transform = `scale(${targetScale.toFixed(3)})`
        if (item) {
          item.style.marginLeft = `${extraMargin.toFixed(1)}px`
          item.style.marginRight = `${extraMargin.toFixed(1)}px`
        }
        needsContinue = true
      } else {
        // Organic spring settle towards 1.0 when cursor leaves
        let vel = velocitiesRef.current[i] || 0
        const spring = 0.22
        const damping = 0.72
        const force = (1.0 - currentScale) * spring
        vel = (vel + force) * damping
        const nextScale = currentScale + vel

        scalesRef.current[i] = nextScale
        velocitiesRef.current[i] = vel

        const settleMargin = (nextScale - 1) * spreadFactor

        if (Math.abs(nextScale - 1.0) > 0.001 || Math.abs(vel) > 0.001) {
          wrap.style.transform = `scale(${nextScale.toFixed(3)})`
          if (item) {
            item.style.marginLeft = `${settleMargin.toFixed(1)}px`
            item.style.marginRight = `${settleMargin.toFixed(1)}px`
          }
          needsContinue = true
        } else {
          scalesRef.current[i] = 1.0
          velocitiesRef.current[i] = 0
          wrap.style.transform = 'scale(1)'
          if (item) {
            item.style.marginLeft = '0px'
            item.style.marginRight = '0px'
          }
        }
      }
    }

    if (needsContinue) {
      animFrameRef.current = requestAnimationFrame(() => {
        if (tickRef.current) tickRef.current()
      })
    } else {
      animFrameRef.current = null
    }
  }, [])

  tickRef.current = tick

  const startLoop = useCallback(() => {
    if (animFrameRef.current) return
    animFrameRef.current = requestAnimationFrame(() => {
      if (tickRef.current) tickRef.current()
    })
  }, [])

  const updatePointer = useCallback((clientX) => {
    mouseXRef.current = clientX
    if (!isHoveredRef.current) {
      isHoveredRef.current = true
      setIsHovered(true)
      if (dockRef.current) {
        wrapsRef.current = Array.from(dockRef.current.querySelectorAll('.di-wrap'))
        itemsRef.current = wrapsRef.current.map((w) => w.closest('.di'))
        if (scalesRef.current.length !== wrapsRef.current.length) {
          scalesRef.current = wrapsRef.current.map(() => 1.0)
          velocitiesRef.current = wrapsRef.current.map(() => 0.0)
        }
      }
    }
    startLoop()
  }, [startLoop])

  const handleMouseMove = useCallback((e) => {
    updatePointer(e.clientX)
  }, [updatePointer])

  const handleTouchStart = useCallback((e) => {
    if (e.touches && e.touches.length > 0) {
      updatePointer(e.touches[0].clientX)
    }
  }, [updatePointer])

  const handleTouchMove = useCallback((e) => {
    if (e.touches && e.touches.length > 0) {
      updatePointer(e.touches[0].clientX)
    }
  }, [updatePointer])

  const handleLeave = useCallback(() => {
    isHoveredRef.current = false
    mouseXRef.current = null
    setIsHovered(false)
    startLoop()
  }, [startLoop])

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  const systemApps = [
    { key: 'finder', name: 'Finder', Icon: FinderIcon },
    { key: 'launchpad', name: 'Launchpad', Icon: LaunchpadIcon },
    { key: 'safari', name: 'Safari', Icon: SafariIcon },
    { key: 'messages', name: 'Messages', Icon: MessagesIcon },
    { key: 'mail', name: 'Mail', Icon: MailIcon },
    { key: 'calendar', name: 'Calendar', Icon: CalendarIcon },
    { key: 'notes', name: 'Notes', Icon: NotesIcon },
    { key: 'music', name: 'Music', Icon: MusicIcon },
    { key: 'appstore', name: 'App Store', Icon: AppStoreIcon },
    { key: 'settings', name: 'System Settings', Icon: SettingsIcon },
  ]

  const portfolioApps = [
    { key: 'projects', name: 'Projects', Icon: FolderIcon },
    { key: 'about', name: 'About Me', Icon: AboutIcon },
    { key: 'resume', name: 'Resume', Icon: ResumeIcon },
    { key: 'contact', name: 'Contact', Icon: ContactIcon },
    ...(openWindows.blog ? [{ key: 'blog', name: 'Blog', Icon: BlogIcon }] : []),
  ]

  return (
    <div
      id="dock"
      className={`dock ${isHovered ? 'is-hovered' : ''}`}
      ref={dockRef}
      onMouseEnter={() => {
        if (!isHoveredRef.current) {
          isHoveredRef.current = true
          setIsHovered(true)
          if (dockRef.current) {
            wrapsRef.current = Array.from(dockRef.current.querySelectorAll('.di-wrap'))
            itemsRef.current = wrapsRef.current.map((w) => w.closest('.di'))
            if (scalesRef.current.length !== wrapsRef.current.length) {
              scalesRef.current = wrapsRef.current.map(() => 1.0)
              velocitiesRef.current = wrapsRef.current.map(() => 0.0)
            }
          }
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleLeave}
      onTouchCancel={handleLeave}
      role="toolbar"
      aria-label="Application Dock"
    >
      {/* Default macOS system apps */}
      {systemApps.map(({ key, name, Icon }) => {
        const isBouncing = bouncingApps[key]
        return (
          <button
            key={key}
            type="button"
            className="di"
            onClick={() => triggerBounce(key)}
            aria-label={name}
          >
            <div className="di-wrap">
              <div className={`di-bounce ${isBouncing ? 'bounce' : ''}`}>
                <div className="di-img">
                  <Icon />
                </div>
              </div>
            </div>
            <div className="di-dot" aria-hidden="true" />
            <div className="di-tip" role="tooltip">{name}</div>
          </button>
        )
      })}

      <div className="dock-sep" role="separator" aria-orientation="vertical" />

      {/* Portfolio apps */}
      {portfolioApps.map(({ key, name, Icon }) => {
        const isOpen = openWindows[key]
        const isBouncing = bouncingApps[key]
        return (
          <button
            key={key}
            type="button"
            className={`di ${isOpen ? 'active' : ''}`}
            onClick={() => {
              triggerBounce(key)
              onToggleWindow(key)
            }}
            aria-label={`${name}${isOpen ? ' (running)' : ''}`}
          >
            <div className="di-wrap">
              <div className={`di-bounce ${isBouncing ? 'bounce' : ''}`}>
                <div className="di-img">
                  <Icon size={48} />
                </div>
              </div>
            </div>
            <div className="di-dot" aria-hidden="true" />
            <div className="di-tip" role="tooltip">{name}</div>
          </button>
        )
      })}

      <div className="dock-sep" role="separator" aria-orientation="vertical" />

      {/* Trash */}
      <button
        type="button"
        className="di"
        onClick={() => triggerBounce('trash')}
        aria-label="Trash"
      >
        <div className="di-wrap">
          <div className={`di-bounce ${bouncingApps['trash'] ? 'bounce' : ''}`}>
            <div className="di-img">
              <TrashIcon />
            </div>
          </div>
        </div>
        <div className="di-dot" aria-hidden="true" />
        <div className="di-tip" role="tooltip">Trash</div>
      </button>
    </div>
  )
}
