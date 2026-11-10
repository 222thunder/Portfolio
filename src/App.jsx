import { useState, useCallback } from 'react'
import { SvgDefs, ExternalLinkIcon, DownloadIcon } from './components/icons.jsx'
import BootScreen from './components/BootScreen.jsx'
import Wallpaper from './components/Wallpaper.jsx'
import MenuBar from './components/MenuBar.jsx'
import Desktop from './components/Desktop.jsx'
import Dock from './components/Dock.jsx'
import Toast from './components/Toast.jsx'
import Window from './components/Window.jsx'
import ProjectsContent from './components/ProjectsContent.jsx'
import AboutContent from './components/AboutContent.jsx'
import ContactContent from './components/ContactContent.jsx'

export default function App() {
  const [booting, setBooting] = useState(true)
  const [wallpaperReady, setWallpaperReady] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  const handleWallpaperProgress = useCallback((pct) => {
    setLoadProgress(pct)
  }, [])

  const handleWallpaperReady = useCallback(() => {
    setWallpaperReady(true)
    setLoadProgress(100)
  }, [])

  const handleBootFinished = useCallback(() => {
    setBooting(false)
  }, [])
  const [openWindows, setOpenWindows] = useState({
    projects: false,
    blog: false,
    about: false,
    resume: false,
    contact: false,
  })

  const [zIndices, setZIndices] = useState({
    projects: 100,
    blog: 101,
    about: 102,
    resume: 103,
    contact: 104,
  })
  const [topZ, setTopZ] = useState(105)

  const bringToFront = (id) => {
    setTopZ((prev) => {
      const nextZ = prev + 1
      setZIndices((zMap) => ({ ...zMap, [id]: nextZ }))
      return nextZ
    })
  }

  const openWindow = (id) => {
    setOpenWindows((prev) => ({ ...prev, [id]: true }))
    bringToFront(id)
  }

  const closeWindow = (id) => {
    setOpenWindows((prev) => ({ ...prev, [id]: false }))
  }

  const toggleWindow = (id) => {
    if (openWindows[id]) {
      closeWindow(id)
    } else {
      openWindow(id)
    }
  }

  return (
    <div className="portfolio-app">
      <SvgDefs />

      {/* Apple Boot Screen */}
      {booting && (
        <BootScreen progress={loadProgress} onFinished={handleBootFinished} />
      )}

      <Wallpaper onProgress={handleWallpaperProgress} onReady={handleWallpaperReady} />
      <MenuBar onOpen={openWindow} />
      <Desktop onOpen={openWindow} />

      {/* PROJECTS FOLDER WINDOW */}
      <Window
        id="projects"
        title="Projects"
        isOpen={openWindows.projects}
        onClose={() => closeWindow('projects')}
        zIndex={zIndices.projects}
        onFocus={() => bringToFront('projects')}
        defaultRect={{
          width: 'min(740px, 92vw)',
          height: 'min(470px, calc(100vh - 28px - 115px))',
          top: '64px',
          left: 'calc(50% - min(370px, 46vw))',
        }}
      >
        <ProjectsContent
          onOpenProject={(id) => openWindow(id)}
          onOpenWindow={(id) => openWindow(id)}
        />
      </Window>

      {/* BLOG WINDOW */}
      <Window
        id="blog"
        title="Blog"
        isOpen={openWindows.blog}
        onClose={() => closeWindow('blog')}
        zIndex={zIndices.blog}
        onFocus={() => bringToFront('blog')}
        defaultRect={{
          width: 'min(900px, 94vw)',
          height: 'min(580px, calc(100vh - 28px - 115px))',
          top: '56px',
          left: 'calc(50% - min(450px, 47vw))',
        }}
        headerActions={
          <button
            className="bar-btn"
            onClick={() =>
              window.open(
                'https://blog-beryl-eight-5z9w93qer8.vercel.app/login',
                '_blank'
              )
            }
          >
            <ExternalLinkIcon />
            Open in browser
          </button>
        }
      >
        <iframe
          src="https://blog-beryl-eight-5z9w93qer8.vercel.app/login"
          title="Blog"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      </Window>

      {/* ABOUT WINDOW */}
      <Window
        id="about"
        title="About Me"
        isOpen={openWindows.about}
        onClose={() => closeWindow('about')}
        zIndex={zIndices.about}
        onFocus={() => bringToFront('about')}
        defaultRect={{
          width: 'min(480px, 90vw)',
          height: 'min(430px, calc(100vh - 28px - 115px))',
          top: '72px',
          left: 'calc(50% - min(240px, 45vw))',
        }}
      >
        <AboutContent />
      </Window>

      {/* RESUME WINDOW */}
      <Window
        id="resume"
        title="Sanyam_Dhawan_Resume.pdf"
        isOpen={openWindows.resume}
        onClose={() => closeWindow('resume')}
        zIndex={zIndices.resume}
        onFocus={() => bringToFront('resume')}
        defaultRect={{
          width: 'min(700px, 92vw)',
          height: 'min(760px, calc(100vh - 28px - 115px))',
          top: '44px',
          left: 'calc(50% - min(350px, 46vw))',
        }}
        headerActions={
          <button
            className="bar-btn"
            onClick={() => window.open('/Sanyam_Dhawan_Resume.pdf', '_blank')}
          >
            <DownloadIcon />
            Download
          </button>
        }
      >
        <iframe
          src="/Sanyam_Dhawan_Resume.pdf"
          title="Resume"
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      </Window>

      {/* CONTACT WINDOW */}
      <Window
        id="contact"
        title="Contact"
        isOpen={openWindows.contact}
        onClose={() => closeWindow('contact')}
        zIndex={zIndices.contact}
        onFocus={() => bringToFront('contact')}
        defaultRect={{
          width: 'min(380px, 88vw)',
          height: 'min(310px, calc(100vh - 28px - 115px))',
          top: '84px',
          left: 'calc(50% - min(190px, 44vw))',
        }}
      >
        <ContactContent />
      </Window>

      <Dock openWindows={openWindows} onToggleWindow={toggleWindow} />
      <Toast />

      {/* MOBILE GUARD */}
      <div className="mobile-guard">
        <div style={{ fontSize: '48px' }}>🖥️</div>
        <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>
          Best on Desktop
        </div>
        <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
          This portfolio is a full macOS desktop experience.
          <br />
          Open it on a laptop or desktop for the full view.
        </div>
      </div>
    </div>
  )
}
