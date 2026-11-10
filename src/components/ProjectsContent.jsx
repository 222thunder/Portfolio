import { useState } from 'react'
import { BlogIcon, ExternalLinkIcon, FolderIcon } from './icons.jsx'

const PROJECTS = [
  {
    id: 'blog',
    name: 'Blog.app',
    displayName: 'Personal Blog',
    Icon: BlogIcon,
    kind: 'Web Application',
    status: 'Live',
    url: 'https://blog-beryl-eight-5z9w93qer8.vercel.app/login',
    description:
      'A full-stack publishing and blogging platform featuring user authentication, markdown drafting, categorized posts, and a clean reading interface.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Vercel', 'Node.js'],
  },
]

export default function ProjectsContent({ onOpenProject, onOpenWindow }) {
  const [selectedId, setSelectedId] = useState('blog')
  const selectedProject = PROJECTS.find((p) => p.id === selectedId) || PROJECTS[0]

  const handleItemClick = (id) => {
    setSelectedId(id)
  }

  const handleItemDoubleClick = (id) => {
    onOpenProject(id)
  }

  return (
    <div className="finder-wrap">
      {/* Finder Sidebar */}
      <div className="finder-sidebar">
        <div className="finder-sb-section">
          <div className="finder-sb-heading">Favorites</div>
          <button type="button" className="finder-sb-item active">
            <span className="finder-sb-icon">📁</span>
            <span>Projects</span>
          </button>
          <button
            type="button"
            className="finder-sb-item"
            onClick={() => onOpenWindow && onOpenWindow('about')}
          >
            <span className="finder-sb-icon">👤</span>
            <span>About Me</span>
          </button>
          <button
            type="button"
            className="finder-sb-item"
            onClick={() => onOpenWindow && onOpenWindow('resume')}
          >
            <span className="finder-sb-icon">📄</span>
            <span>Resume</span>
          </button>
          <button
            type="button"
            className="finder-sb-item"
            onClick={() => onOpenWindow && onOpenWindow('contact')}
          >
            <span className="finder-sb-icon">✉️</span>
            <span>Contact</span>
          </button>
        </div>

        <div className="finder-sb-section">
          <div className="finder-sb-heading">Tags</div>
          <div className="finder-sb-tag">
            <span className="tag-dot blue" />
            <span>Full-Stack</span>
          </div>
          <div className="finder-sb-tag">
            <span className="tag-dot green" />
            <span>Deployed</span>
          </div>
        </div>
      </div>

      {/* Main Finder Browser */}
      <div className="finder-main">
        {/* Finder Path Bar */}
        <div className="finder-topbar">
          <div className="finder-path">
            <span className="path-segment">Users</span>
            <span className="path-sep">›</span>
            <span className="path-segment">Sanyam</span>
            <span className="path-sep">›</span>
            <span className="path-segment active">Projects</span>
          </div>
          <div className="finder-item-count">{PROJECTS.length} item</div>
        </div>

        {/* Content & Inspector Split */}
        <div className="finder-content-split">
          {/* File Grid */}
          <div className="finder-grid">
            {PROJECTS.map((project) => {
              const { id, name, kind, Icon } = project
              const isSelected = selectedId === id
              return (
                <div
                  key={id}
                  className={`finder-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleItemClick(id)}
                  onDoubleClick={() => handleItemDoubleClick(id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleItemDoubleClick(id)
                  }}
                >
                  <div className="finder-item-icon">
                    <Icon size={60} />
                  </div>
                  <span className="finder-item-name">{name}</span>
                  <span className="finder-item-kind">{kind}</span>
                </div>
              );
            })}
          </div>

          {/* Project Details Panel */}
          {selectedProject && (
            <div className="finder-inspector">
              <div className="inspector-header">
                <div className="inspector-icon">
                  <selectedProject.Icon size={44} />
                </div>
                <div className="inspector-title-wrap">
                  <h3 className="inspector-title">{selectedProject.displayName}</h3>
                  <span className="inspector-status-badge">
                    <span className="status-indicator live" />
                    {selectedProject.status}
                  </span>
                </div>
              </div>

              <div className="inspector-rule" />

              <p className="inspector-desc">{selectedProject.description}</p>

              <div className="inspector-meta-section">
                <div className="inspector-meta-label">Technologies</div>
                <div className="inspector-tags">
                  {selectedProject.stack.map((tech) => (
                    <span key={tech} className="inspector-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="inspector-actions">
                <button
                  type="button"
                  className="inspector-btn primary"
                  onClick={() => onOpenProject(selectedProject.id)}
                >
                  Open Application
                </button>
                <button
                  type="button"
                  className="inspector-btn secondary"
                  onClick={() => window.open(selectedProject.url, '_blank')}
                >
                  <ExternalLinkIcon />
                  Browser
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
