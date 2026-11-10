/* Shared SVG gradient defs — rendered once, referenced everywhere */
export function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
      <defs>
        {/* Portfolio */}
        <linearGradient id="gBlog"    x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#2563EB"/><stop offset="100%" stopColor="#38BDF8"/></linearGradient>
        <linearGradient id="gAbout"   x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#7C3AED"/><stop offset="100%" stopColor="#C026D3"/></linearGradient>
        <linearGradient id="gResume"  x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#DC2626"/><stop offset="100%" stopColor="#F59E0B"/></linearGradient>
        <linearGradient id="gContact" x1="0" y1="1" x2="1" y2="0" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#059669"/><stop offset="100%" stopColor="#34D399"/></linearGradient>
        <linearGradient id="gFolderBack" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0284C7"/><stop offset="100%" stopColor="#0369A1"/></linearGradient>
        <linearGradient id="gFolderFront" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#38BDF8"/><stop offset="100%" stopColor="#0284C7"/></linearGradient>
        {/* macOS */}
        <linearGradient id="gFinder"   x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#2E6CF3"/><stop offset="100%" stopColor="#1A4DB8"/></linearGradient>
        <linearGradient id="gSafari"   x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#1C8CF3"/><stop offset="100%" stopColor="#0A5FCC"/></linearGradient>
        <linearGradient id="gMessages" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#2AC84B"/><stop offset="100%" stopColor="#1A9A38"/></linearGradient>
        <linearGradient id="gMail"     x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#1A8CF5"/><stop offset="100%" stopColor="#0E60CC"/></linearGradient>
        <linearGradient id="gMusic"    x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#FC5C7D"/><stop offset="100%" stopColor="#E0003F"/></linearGradient>
        <linearGradient id="gAppStore" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#2BBCF5"/><stop offset="100%" stopColor="#1368D2"/></linearGradient>
        <linearGradient id="gSettings" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#8E8E93"/><stop offset="100%" stopColor="#636366"/></linearGradient>
        <linearGradient id="gLaunch"   x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#1C1C3A"/><stop offset="100%" stopColor="#0A0A1A"/></linearGradient>
        <linearGradient id="gNotes"    x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#FFD60A"/><stop offset="100%" stopColor="#F4B400"/></linearGradient>
        <linearGradient id="gTrashBg"  x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%"   stopColor="#D0E8FF"/><stop offset="100%" stopColor="#A8CCEE"/></linearGradient>
      </defs>
    </svg>
  )
}

/* ---- macOS system icons ---- */
export function FinderIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gFinder)"/>
      <ellipse cx="28" cy="32" rx="20" ry="17" fill="white"/>
      <circle cx="20.5" cy="27" r="5.5" fill="#4A90E2"/>
      <circle cx="20.5" cy="27" r="2.8" fill="#0F2D6E"/>
      <circle cx="19.2" cy="25.7" r="1.1" fill="rgba(255,255,255,0.45)"/>
      <circle cx="35.5" cy="27" r="5.5" fill="#8E9FB4"/>
      <circle cx="35.5" cy="27" r="2.8" fill="#1E2F3D"/>
      <circle cx="34.2" cy="25.7" r="1.1" fill="rgba(255,255,255,0.45)"/>
      <rect x="27" y="28" width="2" height="4" rx="1" fill="rgba(0,0,0,0.08)"/>
      <path d="M19 38 Q28 45.5 37 38" stroke="#4A90E2" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

export function LaunchpadIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gLaunch)"/>
      <circle cx="12" cy="10" r="1.2" fill="rgba(255,255,255,0.6)"/>
      <circle cx="44" cy="8"  r="0.8" fill="rgba(255,255,255,0.4)"/>
      <circle cx="48" cy="22" r="1"   fill="rgba(255,255,255,0.5)"/>
      <circle cx="8"  cy="38" r="0.8" fill="rgba(255,255,255,0.3)"/>
      <rect x="11" y="14" width="9" height="9" rx="2.5" fill="#FF5F57"/>
      <rect x="23" y="14" width="9" height="9" rx="2.5" fill="#FF9F0A"/>
      <rect x="35" y="14" width="9" height="9" rx="2.5" fill="#FFD60A"/>
      <rect x="11" y="26" width="9" height="9" rx="2.5" fill="#2AC84B"/>
      <rect x="23" y="26" width="9" height="9" rx="2.5" fill="#38BDF8"/>
      <rect x="35" y="26" width="9" height="9" rx="2.5" fill="#6366F1"/>
      <rect x="11" y="38" width="9" height="9" rx="2.5" fill="#EC4899"/>
      <rect x="23" y="38" width="9" height="9" rx="2.5" fill="#8B5CF6"/>
      <rect x="35" y="38" width="9" height="9" rx="2.5" fill="#14B8A6"/>
    </svg>
  )
}

export function SafariIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gSafari)"/>
      <circle cx="28" cy="28" r="20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
      <circle cx="28" cy="28" r="20" fill="rgba(255,255,255,0.08)"/>
      <line x1="28" y1="8"  x2="28" y2="12" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="28" y1="44" x2="28" y2="48" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="8"  y1="28" x2="12" y2="28" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="44" y1="28" x2="48" y2="28" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      <text x="25.5" y="18" fontSize="5" fill="white" fontFamily="system-ui" fontWeight="600">N</text>
      <polygon points="28,13 30.5,28 28,31 25.5,28" fill="#FF3B30"/>
      <polygon points="28,43 30.5,28 28,31 25.5,28" fill="rgba(255,255,255,0.9)"/>
      <circle cx="28" cy="28" r="2" fill="white"/>
    </svg>
  )
}

export function MessagesIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gMessages)"/>
      <path d="M10 14 Q10 9 15 9 L41 9 Q46 9 46 14 L46 32 Q46 37 41 37 L30 37 L22 46 L22 37 L15 37 Q10 37 10 32 Z" fill="white"/>
      <circle cx="20" cy="23" r="3" fill="#2AC84B"/>
      <circle cx="28" cy="23" r="3" fill="#2AC84B"/>
      <circle cx="36" cy="23" r="3" fill="#2AC84B"/>
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gMail)"/>
      <rect x="7" y="15" width="42" height="30" rx="4" fill="white"/>
      <path d="M7 15 L28 30 L49 15" stroke="url(#gMail)" strokeWidth="2" fill="url(#gMail)"/>
    </svg>
  )
}

export function CalendarIcon() {
  const now = new Date()
  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  return (
    <svg width="48" height="48" viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="white"/>
      <rect x="0" y="0" width="56" height="17" rx="12.5" fill="#FF3B30"/>
      <rect x="0" y="8.5" width="56" height="8.5" fill="#FF3B30"/>
      <text x="28" y="13" fontSize="7" fill="rgba(255,255,255,0.9)" textAnchor="middle" fontFamily="system-ui" fontWeight="500" letterSpacing="0.5">{days[now.getDay()]}</text>
      <text x="28" y="41" fontSize="22" fill="#1C1C1E" textAnchor="middle" fontFamily="system-ui" fontWeight="300">{now.getDate()}</text>
    </svg>
  )
}

export function NotesIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gNotes)"/>
      <rect x="9" y="10" width="38" height="40" rx="3" fill="rgba(255,255,255,0.95)"/>
      <rect x="9" y="10" width="38" height="6" rx="3" fill="#FFD60A"/>
      <rect x="9" y="13" width="38" height="3" fill="#FFD60A"/>
      <rect x="13" y="21" width="30" height="2" rx="1" fill="#D1D5DB"/>
      <rect x="13" y="26" width="30" height="2" rx="1" fill="#D1D5DB"/>
      <rect x="13" y="31" width="30" height="2" rx="1" fill="#D1D5DB"/>
      <rect x="13" y="36" width="22" height="2" rx="1" fill="#D1D5DB"/>
      <rect x="13" y="41" width="26" height="2" rx="1" fill="#D1D5DB"/>
    </svg>
  )
}

export function MusicIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gMusic)"/>
      <path d="M22 38 C22 41.3 19.3 44 16 44 C12.7 44 10 41.3 10 38 C10 34.7 12.7 32 16 32 C17.5 32 18.9 32.6 20 33.5 L20 18 L38 13 L38 28 C37 27.3 35.6 27 34 27 C30.7 27 28 29.7 28 33 C28 36.3 30.7 39 34 39 C37.3 39 40 36.3 40 33 L40 10 L18 16 L18 38 Z" fill="white"/>
    </svg>
  )
}

export function AppStoreIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gAppStore)"/>
      <path d="M28 9 L40 42 M28 9 L16 42 M19.5 32 L36.5 32" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

export function SettingsIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gSettings)"/>
      <circle cx="28" cy="28" r="13" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="6" strokeDasharray="4.5 3.5"/>
      <circle cx="28" cy="28" r="6" fill="rgba(255,255,255,0.9)"/>
      <circle cx="28" cy="28" r="3" fill="rgba(100,100,106,0.6)"/>
    </svg>
  )
}

export function TrashIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gTrashBg)"/>
      <path d="M14 20 L16 48 Q16 50 18 50 L38 50 Q40 50 40 48 L42 20 Z" fill="rgba(130,170,210,0.5)" stroke="rgba(80,130,180,0.7)" strokeWidth="1.2"/>
      <line x1="22" y1="23" x2="21" y2="47" stroke="rgba(80,130,180,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="28" y1="23" x2="28" y2="47" stroke="rgba(80,130,180,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="34" y1="23" x2="35" y2="47" stroke="rgba(80,130,180,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="11" y="17" width="34" height="4" rx="2" fill="rgba(100,150,200,0.7)" stroke="rgba(80,130,180,0.6)" strokeWidth="1"/>
      <rect x="22" y="13" width="12" height="5" rx="2.5" fill="none" stroke="rgba(80,130,180,0.7)" strokeWidth="1.5"/>
    </svg>
  )
}

/* ---- Portfolio app icons ---- */
export function BlogIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gBlog)"/>
      <rect x="13" y="15" width="30" height="4.5" rx="2.25" fill="rgba(255,255,255,0.92)"/>
      <rect x="13" y="23" width="22" height="3"   rx="1.5"  fill="rgba(255,255,255,0.6)"/>
      <rect x="13" y="30" width="26" height="3"   rx="1.5"  fill="rgba(255,255,255,0.6)"/>
      <rect x="13" y="37" width="17" height="3"   rx="1.5"  fill="rgba(255,255,255,0.6)"/>
      <circle cx="41" cy="41" r="9" fill="#10B981"/>
      <path d="M38 41.5 40.5 44 44.5 39" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function AboutIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gAbout)"/>
      <circle cx="28" cy="21" r="8.5" fill="rgba(255,255,255,0.92)"/>
      <path d="M11 48c0-9.389 7.611-17 17-17s17 7.611 17 17" stroke="rgba(255,255,255,0.92)" strokeWidth="4.5" strokeLinecap="round"/>
    </svg>
  )
}

export function ResumeIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gResume)"/>
      <rect x="13" y="9" width="30" height="38" rx="3.5" fill="white" opacity="0.96"/>
      <rect x="13" y="9" width="11" height="11" rx="3.5" fill="#DC2626"/>
      <text x="13.5" y="19.5" fontSize="5.5" fill="white" fontFamily="system-ui" fontWeight="700">PDF</text>
      <circle cx="22" cy="28" r="4" fill="#FDA4AF"/>
      <rect x="28" y="26" width="11" height="2.2" rx="1.1" fill="#E5E7EB"/>
      <rect x="28" y="30" width="8"  height="2.2" rx="1.1" fill="#E5E7EB"/>
      <rect x="17" y="36" width="22" height="2.2" rx="1.1" fill="#E5E7EB"/>
      <rect x="17" y="40" width="18" height="2.2" rx="1.1" fill="#E5E7EB"/>
      <rect x="17" y="44" width="20" height="2.2" rx="1.1" fill="#E5E7EB"/>
    </svg>
  )
}

export function ContactIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56">
      <rect width="56" height="56" rx="12.5" fill="url(#gContact)"/>
      <rect x="9" y="16" width="38" height="27" rx="4.5" fill="rgba(255,255,255,0.95)"/>
      <path d="M9 20 28 32 47 20" stroke="#059669" strokeWidth="2.8" strokeLinecap="round"/>
    </svg>
  )
}

export function FolderIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <path d="M6 16C6 13.7909 7.79086 12 10 12H21.5C22.95 12 24.32 12.72 25.18 13.92L27.2 16.8H46C48.2091 16.8 50 18.5909 50 20.8V42C50 44.2091 48.2091 46 46 46H10C7.79086 46 6 44.2091 6 42V16Z" fill="url(#gFolderBack)"/>
      <rect x="10" y="16" width="36" height="19" rx="3" fill="white" opacity="0.95"/>
      <rect x="14" y="20" width="16" height="2" rx="1" fill="#94A3B8"/>
      <rect x="14" y="24" width="24" height="2" rx="1" fill="#CBD5E1"/>
      <path d="M6 23C6 20.7909 7.79086 19 10 19H46C48.2091 19 50 20.7909 50 23V42C50 44.2091 48.2091 46 46 46H10C7.79086 46 6 44.2091 6 42V23Z" fill="url(#gFolderFront)"/>
      <path d="M6 23C6 20.7909 7.79086 19 10 19H46C48.2091 19 50 20.7909 50 23" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8"/>
      <path d="M25 29L20 33L25 37" stroke="rgba(255,255,255,0.85)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M31 29L36 33L31 37" stroke="rgba(255,255,255,0.85)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="29.5" y1="28" x2="26.5" y2="38" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

/* ---- Utility icons ---- */
export function ExternalLinkIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M6.5 1h2.5v2.5M9 1 4 6M3.5 2H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function DownloadIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M5 1v5.5M2.5 4.5 5 7l2.5-2.5M1.5 8.5h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function WifiIcon() {
  return (
    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" opacity="0.9">
      <path d="M8.5 10.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" fill="white"/>
      <path d="M8.5 7.25c1.42 0 2.7.58 3.63 1.52L13.3 7.6A6.47 6.47 0 0 0 8.5 5.5a6.47 6.47 0 0 0-4.8 2.1l1.17 1.17A4.44 4.44 0 0 1 8.5 7.25Z" fill="white" opacity="0.75"/>
      <path d="M8.5 4.25c2.33 0 4.42.98 5.92 2.55l1.18-1.18A9.44 9.44 0 0 0 8.5 2a9.44 9.44 0 0 0-7.1 3.62L2.58 6.8A7.43 7.43 0 0 1 8.5 4.25Z" fill="white" opacity="0.4"/>
    </svg>
  )
}

export function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3 2 7v5c0 5.25 4.3 10.17 10 11.36C17.7 22.17 22 17.25 22 12V7L12 3Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="m9 12 2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
