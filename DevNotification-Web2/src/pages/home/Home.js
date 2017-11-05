import React from 'react'
import Logo from './Logo'
import Tagline1 from './Tagline1'
import Tagline2 from './Tagline2'
import CallToAction from './CallToAction'
import Screenshots from './Screenshots'
import Copyright from './Copyright'
import '../../css/pages/home.css'

const Index = () => (
  <div className="home text-center">
    <Logo />
    <Tagline1 />
    <CallToAction />
    <Tagline2 />
    <Screenshots />
    <Copyright />
  </div>
)

export default Index
