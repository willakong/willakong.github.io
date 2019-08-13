import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import List from '../components/notes-list'

const Notes = ({ data }) => {
  const siteTitle = "Notes"

  const NotesList = groupBy(data.allFile.edges, 'relativeDirectory')
  .map(course => <List key={ Object.keys(course)[0] } note={ course } />)

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>

      <div id="main">
        <section>
          <header className="major">
            <h2>Notes</h2>
          </header>
          <p>
            I'm currently studying at the University of Waterloo for Computer Engineering.
            I'll be putting my condensed notes here. Feel free to refer to them.
          </p>
          <div>
            { NotesList }
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default Notes

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "notes" } }) {
      edges {
        node {
          id
          name
          relativePath
          relativeDirectory
        }
      }
    }
  }
`

const groupBy = (array, key) => {
  const groupedObj = array.reduce((objectsByKeyValue, obj) => {
    const value = obj["node"][key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj["node"]);
    return objectsByKeyValue;
  }, {});

  return Object.keys(groupedObj).map(function(key) {
    return { [key]: groupedObj[key] };
  });
};
