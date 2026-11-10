# Portfolio — Project Context

## Owner
- **Name:** Sanyam Dhawan
- **Role:** Software / Full-Stack Engineer
- **Email:** sanyamdhawan2007@gmail.com
- **GitHub:** [222thunder](https://github.com/222thunder)
- **LinkedIn:** [sanyam-dhawan-6a5554314](https://www.linkedin.com/in/sanyam-dhawan-6a5554314/)

---

## Concept
macOS Sonoma-style interactive desktop portfolio. The browser renders a full macOS desktop experience — animated wallpaper, menu bar, desktop icons, and a dock. Clicking icons opens draggable, resizable macOS-style windows.

---

## Visual Style
- **Inspiration:** macOS Sonoma / Ventura — Apple HIG
- **Language:** Glassmorphism, translucent surfaces, vibrancy, `backdrop-filter: blur`
- **Typography:** `-apple-system, BlinkMacSystemFont, "SF Pro Display"` (native macOS font stack)
- **Accent color:** System blue `#007AFF`
- **Spacing:** 8pt grid
- **Motion:** Dock magnification on hover, window open/close animations, live wallpaper

---

## Assets
| File | Purpose |
|---|---|
| `Sonoma Graphic Light Landscape.mov` | Animated desktop wallpaper (looping `<video>`) |
| `Sanyam_Dhawan_Resume.pdf` | Resume — opened in an iframe window |

---

## Desktop Icons
| Icon Label | Action |
|---|---|
| Projects | Opens Finder window containing project apps (Blog, etc.) |
| About Me | Opens a window with personal bio |
| Resume | Opens `Sanyam_Dhawan_Resume.pdf` in an iframe window |
| Contact | Opens a window with email, GitHub, LinkedIn links |

---

## UI Components

### Menu Bar
- Apple  logo (left)
- `Sanyam Dhawan` label
- Live clock (right)

### Desktop
- Full-screen looping video wallpaper
- Draggable desktop icons (grid layout)

### Dock
- Bottom-center, frosted glass background
- Icon magnification on hover (macOS-style)
- Separator between app icons and minimized windows

### Windows
- Draggable + resizable
- macOS traffic-light buttons (close 🔴, minimize 🟡, maximize 🟢)
- `backdrop-filter: blur` title bar
- z-index stacking — focused window comes to front

---

## Tech Stack
- React 18 + Vite
- Modular component architecture (`src/components/`):
  - `MenuBar.jsx`: System bar with live clock & navigation actions
  - `Desktop.jsx`: Desktop workspace with selectable icons & double-click to launch
  - `Dock.jsx`: Realistic macOS dock with default apps, portfolio apps, magnification & bounce
  - `Window.jsx`: Draggable, resizable macOS window with focus z-stacking & traffic light controls
  - `Wallpaper.jsx`: Full-screen looping video background
  - `AboutContent.jsx` & `ContactContent.jsx`: Modal window contents
  - `icons.jsx`: SVG icons and macOS iconography
  - `Toast.jsx`: Welcome notification
- CSS custom properties & glassmorphism (`backdrop-filter`)
- Assets stored in `public/` (`wallpaper.mov`, `Sanyam_Dhawan_Resume.pdf`)
