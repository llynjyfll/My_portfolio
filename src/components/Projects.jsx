import './Projects.css'

const projects = [
  {
    icon: '📋',
    title: 'Simple To-Do App',
    desc: 'A beginner task manager to add, edit, and delete tasks.',
    tags: ['HTML', 'React.js', 'MongoDB', 'Express', 'Node.js'],
    demo: 'https://awesome-todos-cjq8.onrender.com/',
    github: 'https://github.com/llynjyfll',
    color: '#dce5f2',
  },
  {
    icon: '🗄️',
    title: 'Audio Playlist Prototyping',
    desc: 'An Audio playlist with a simple and intuitive interface, designed to enhance the music listening experience.',
    tags: ['Figma'],
    demo: 'https://www.figma.com/proto/1Wh3Um6O48P15hjgE0BEKi/Challenge-2-fullo?node-id=1-2&p=f&t=uMhzR4wobsyj1OQM-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    github: 'https://github.com/llynjyfll',
    color: '#d5e4e0',
  },
  {
    icon: '💻',
    title: 'Pink Serenity Bouquet',
    desc: 'My personal Design for Flower',
    tags: ['Figma'],
    demo: 'https://www.figma.com/proto/zIYUQ6qEbuhauTVXF3GlgZ/Challenge-1-Fullo?node-id=87-13&p=f&t=SIXC2f4OIV6uuFbg-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=87%3A13',
    github: 'https://github.com/llynjyfll',
    color: '#e8dff2',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__header">
          <div className="projects__heading">
            <span className="projects__icon">📁</span>
            <div>
              <h2 className="section-title">Projects</h2>
              <p className="section-sub">Here are some of the projects I've built while learning.</p>
            </div>
          </div>
          <a href="#" className="projects__github-link">
            <span className="github-mark">⊙</span> View More on GitHub →
          </a>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card fade-up">
              <div className="project-card__icon-wrap" style={{ background: p.color }}>
                <span className="project-card__icon">{p.icon}</span>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="project-card__footer">
                <a href={p.demo} className="project-card__demo">Live Demo →</a>
                <a href={p.github} className="project-card__gh" aria-label="GitHub">
                  <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                    0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
                    -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
                    -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82
                    .64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
                    2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
                    1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}