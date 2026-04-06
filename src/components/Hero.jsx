import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge fade-up fade-up-1">
            <span className="hero__badge-dot" />
            BSIT Student &amp; Aspiring Developer/UX Researcher
            <span className="hero__badge-plus">✦</span>
          </div>

          <h1 className="hero__title fade-up fade-up-2">
            Hi, I'm <span className="hero__name">Allyn Joy Fullo</span>
          </h1>

          <p className="hero__tagline fade-up fade-up-3">
            Building skills. Creating projects. Growing every day.
          </p>

          <p className="hero__desc fade-up fade-up-4">
            I'm an Information Technology student who loves learning web
            development and building simple but meaningful applications.
          </p>

          <div className="hero__actions fade-up fade-up-5">
            <a href="#projects" className="btn btn--primary">
              View My Projects →
            </a>
            <a href="#contact" className="btn btn--outline">
              Contact Me ✉
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap fade-up fade-up-3">
          <div className="hero__photo-ring">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="hero__photo"
            />
          </div>
          {/* decorative blobs */}
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
          <div className="hero__blob hero__blob--3" />
          <div className="hero__dots" />
        </div>
      </div>
    </section>
  )
}
