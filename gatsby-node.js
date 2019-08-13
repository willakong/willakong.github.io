const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const detailsTemplate = path.resolve(`src/templates/details-template.js`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: detailsTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}