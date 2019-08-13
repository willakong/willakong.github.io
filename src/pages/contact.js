import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const Contact = () => {
  const siteTitle = "Contact"

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>

      <div id="main">
        <section>
          <header className="major">
            <h2>Contact Me</h2>
          </header>
          <p>Send me any questions you have!</p>
          <div>
            <form method="post" action="https://formspree.io/willakong8@gmail.com">
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" required /></div>
                <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" required /></div>
                <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4" required></textarea></div>
              </div>
              <div className="row uniform 50%">
                <ul className="actions">
                  <li><input type="submit" value="Send" /></li>
                </ul>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default Contact