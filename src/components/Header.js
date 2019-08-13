import React from 'react'
import { Link } from "gatsby"

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
        <h1><strong><Link to="/notes/">Notes</Link></strong></h1>
        <h1><strong><Link to="/portfolio/">Portfolio</Link></strong></h1>
        <h1><strong><Link to="/resume/">Resume</Link></strong></h1>
        <h1><strong><Link to="/contact/">Contact Me</Link></strong></h1>
      </div>
      <Footer />
    </header>
  )
}

export default Header
