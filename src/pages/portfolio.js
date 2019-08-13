import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Card from '../components/card'

const Portfolio = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const siteTitle = "Portfolio"

  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.title)
  .map(edge => <Card key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>

      <div id="main">
        <section>
          <header className="major">
            <h2>Portfolio</h2>
          </header>

          <div>{ Posts }</div>
        </section>
      </div>
    </Layout>
  )
}
export default Portfolio

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
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