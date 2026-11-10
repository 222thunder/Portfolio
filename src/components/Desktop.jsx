import { useState } from 'react'
import { FolderIcon, AboutIcon, ResumeIcon, ContactIcon } from './icons.jsx'

const ICONS = [
  { id: 'projects', label: 'Projects', Icon: FolderIcon },
  { id: 'about',    label: 'About Me', Icon: AboutIcon   },
  { id: 'resume',   label: 'Resume',   Icon: ResumeIcon  },
  { id: 'contact',  label: 'Contact',  Icon: ContactIcon },
]

export default function Desktop({ onOpen }) {
  const [selected, setSelected] = useState(null)

  const handleClick = (e, id) => {
    e.stopPropagation()
    setSelected(id)
  }

  const handleDblClick = (id) => {
    onOpen(id)
  }

  return (
    <div className="desktop" onClick={() => setSelected(null)}>
      <div className="desktop-icons">
        {ICONS.map(({ id, label, Icon }) => (
          <div
            key={id}
            className={`d-icon${selected === id ? ' sel' : ''}`}
            onClick={(e) => handleClick(e, id)}
            onDoubleClick={() => handleDblClick(id)}
          >
            <div className="d-icon-img">
              <Icon size={56} />
            </div>
            <span className="d-icon-label">{label}</span>
          </div>
        ))}
      </div>
      <div className="desktop-hint">Double-click any icon to open &nbsp;•&nbsp; Drag windows to rearrange</div>
    </div>
  )
}
