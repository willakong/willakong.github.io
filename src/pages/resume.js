import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import resume from '../data/files/resume.pdf'

const Resume = () => {
  const siteTitle = "Resume"

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>

      <div id="main">
        <section>
          <header className="major">
            <h2>Resume</h2>
          </header>
          <p>Download the PDF of my resume <a href={ resume } download>here</a>.</p>
          <embed src={ resume } width="100%" height="600px" />
        </section>
      </div>
    </Layout>
  )
}
export default Resume