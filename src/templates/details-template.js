import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div id="main">
        <div>
          <h1>{ frontmatter.title }</h1>
          <p><strong>Languages and Frameworks: </strong>{ frontmatter.languages }</p>
          <p><strong>URL: </strong><a href={ frontmatter.url }>{ frontmatter.url }</a></p>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        languages
        url
      }
    }
  }
`