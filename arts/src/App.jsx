import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Products from './components/Products'
import Collections from './components/Collections'
import Process from './components/Process'
import ArtisanStory from './components/ArtisanStory'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Products />
      <Collections />
      <Process />
      <ArtisanStory />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App