import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoCards from './components/InfoCards'
import Projects from './components/Projects'
import Bottom from './components/Bottom'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Hero />
        <InfoCards />
        <Projects />
        <Bottom />
      </main>
      <Footer />
    </div>
  )
}
