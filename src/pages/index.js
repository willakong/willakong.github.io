import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from "gatsby"

import Layout from '../components/layout'
import Card from '../components/card'

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const siteTitle = "Willa Kong"
  const siteDescription = "A site"

  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.title)
  .map(edge => <Card key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section>
          <header className="major">
            <h2>About</h2>
          </header>
          <p>
            Hiya, I'm Willa Kong, a computer engineering student who does some programming.
            Currently, I'm balancing between learning new languages and frameworks with studying theory of digital computing, mathematics, and circuits.
          </p>
        </section>

        <section>
          <header className="major">
            <h2>Portfolio</h2>
          </header>

          <div className>{ Posts }</div>

          <ul className="actions">
            <li><Link to="/portfolio" className="button">See all</Link></li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}
export default Home

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___title] }
        filter: { frontmatter: { pinned: { eq: true } } }
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`