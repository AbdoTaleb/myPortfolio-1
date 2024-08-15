import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWork></MyWork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
