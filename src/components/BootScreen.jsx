import { useState, useEffect } from "react";

const MAX_BOOT_DURATION = 5000;
const FADE_DURATION = 350;

export default function BootScreen({ progress, onFinished }) {
  const [phase, setPhase] = useState("boot"); // 'boot' | 'fadeout'

  // Always hand control to the portfolio within five seconds, even if the
  // wallpaper video is slow or fails to load.
  useEffect(() => {
    const t = setTimeout(() => setPhase("fadeout"), MAX_BOOT_DURATION - FADE_DURATION);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Small delay to show completed bar, then fade out
      const t = setTimeout(() => setPhase("fadeout"), 150);
      return () => clearTimeout(t);
    }
  }, [progress]);

  useEffect(() => {
    if (phase === "fadeout") {
      const t = setTimeout(() => onFinished(), 350);
      return () => clearTimeout(t);
    }
  }, [phase, onFinished]);

  return (
    <div className={`boot-screen ${phase === "fadeout" ? "boot-fadeout" : ""}`}>
      {/* Apple Logo */}
      <svg
        className="boot-apple-logo"
        viewBox="0 0 170 170"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.2-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.28 2.13-9.54 3.24-12.8 3.35-4.93.21-9.84-1.96-14.75-6.52-3.13-2.73-7.04-7.41-11.73-14.04-5.03-7.08-9.16-15.29-12.41-24.65-3.47-10.2-5.21-20.07-5.21-29.59 0-10.93 2.36-20.36 7.07-28.26 3.7-6.35 8.63-11.35 14.8-15.04 6.18-3.69 12.86-5.57 20.05-5.74 3.92 0 9.06 1.21 15.43 3.59 6.36 2.39 10.44 3.61 12.24 3.61 1.35 0 5.91-1.43 13.64-4.26 7.31-2.63 13.47-3.72 18.51-3.29 13.68 1.1 23.95 6.5 30.78 16.23-12.24 7.42-18.29 17.82-18.15 31.16.13 10.39 3.88 19.03 11.23 25.87 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.15-2.97 15.76-8.9 22.81-7.16 8.39-15.82 13.23-25.2 12.47a25.4 25.4 0 01-.19-3.09c0-7.82 3.4-16.18 9.44-23.02 3.01-3.47 6.84-6.35 11.49-8.66 4.64-2.27 9.03-3.53 13.16-3.76.13 1.1.2 2.2.2 3.25z"
          fill="#fff"
        />
      </svg>

      {/* Progress bar */}
      <div className="boot-progress-track">
        <div
          className="boot-progress-fill"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}
