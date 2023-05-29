import React from 'react'
import Navbar from '../Comp/navbar'
import Hero from '../Comp/Home/hero'
import Struggle from '../Comp/Home/struggle'
import Generation from '../Comp/Home/generation'
import Footer from '../Comp/footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Struggle />
        <Generation />
        <Footer />
    </div>
  )
}

export default Home