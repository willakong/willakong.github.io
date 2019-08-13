import React from 'react'

const Footer = () => {
  return (
    <div id="footer">
      <div className="inner">
        <ul className="icons">
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/willakong" className="icon fa-github"><span className="label">Github</span></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/willakong/" className="icon fa-linkedin-square"><span className="label">LinkedIn</span></a></li>
        </ul>
        <ul className="copyright">
          <li>&copy; Willa Kong { new Date().getFullYear() }</li>
          <li>Template: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </div>
    </div>
  )
}
export default Footer
