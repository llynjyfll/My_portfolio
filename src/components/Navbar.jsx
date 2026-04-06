import { useState } from 'react'
import './Navbar.css'

const links = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Achievements', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={close}>
          Allyn Joy <span className="navbar__dot" />
        </a>

        <nav className="navbar__links">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="navbar__link">
              {l}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__cta">
          Let's Connect <span className="navbar__cta-icon">✉</span>
        </a>

        <button
          className={`navbar__hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <nav className={`navbar__drawer${open ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="navbar__link" onClick={close}>
            {l}
          </a>
        ))}
        <a href="#contact" className="navbar__cta" onClick={close}>
          Let's Connect ✉
        </a>
      </nav>
    </header>
  )
}