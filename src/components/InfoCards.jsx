import './InfoCards.css'

export default function InfoCards() {
  return (
    <section className="info-cards">
      <div className="container info-cards__grid">

        {/* About */}
        <div id="about" className="card fade-up fade-up-1">
          <div className="card__header">
            <span className="card__icon">👤</span>
            <h2 className="card__title">About Me</h2>
          </div>
          <p className="card__text">
            Hello! I'm currently a student pursuing Information Technology. I enjoy exploring
            web development and creating simple but useful systems.
          </p>
          <p className="card__label">I'm currently learning:</p>
          <ul className="card__checklist">
            <li><span className="check">✔</span> Frontend &amp; Backend Development</li>
            <li><span className="check">✔</span> Database Management</li>
            <li><span className="check">✔</span> UI/UX Design</li>
          </ul>
          <p className="card__goal">
            <strong>Goal:</strong> To become a full-stack developer.
          </p>
        </div>

        {/* Education */}
        <div id="education" className="card fade-up fade-up-2">
          <div className="card__header">
            <span className="card__icon">🎓</span>
            <h2 className="card__title">Education</h2>
          </div>
          <p className="card__degree">
            Bachelor of Science in<br />Information Technology
          </p>
          <p className="card__school">Your School Name</p>
          <p className="card__year">📅 2022 – Present</p>
          <p className="card__label" style={{ marginTop: 16 }}>Relevant Subjects:</p>
          <ul className="card__subjects">
            <li>Web Development</li>
            <li>Database Systems</li>
            <li>Networking</li>
          </ul>
        </div>

        {/* Skills */}
        <div id="skills" className="card fade-up fade-up-3">
          <div className="card__header">
            <span className="card__icon">&lt;/&gt;</span>
            <h2 className="card__title">Skills</h2>
          </div>

          <p className="card__label">Frontend</p>
          <div className="card__tags">
            {['HTML', 'CSS', 'JavaScript', 'React (Basic)'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>

          <p className="card__label" style={{ marginTop: 14 }}>Backend</p>
          <div className="card__tags">
            {['Node.js', 'Express (Basic)'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>

          <p className="card__label" style={{ marginTop: 14 }}>Tools</p>
          <div className="card__tags">
            {['Git', 'GitHub', 'Figma', 'VS Code'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
