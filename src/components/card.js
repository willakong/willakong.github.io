import React from 'react'
import { Link } from "gatsby"

import '../assets/scss/main.scss'

const Card = ({ post }) => (
  <div className="card-outer">
    <Link to={ post.frontmatter.path }>{ post.frontmatter.title }</Link>
    <p>{ post.excerpt }</p>
  </div>
)
export default Card
