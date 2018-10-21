import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const ProductLink = ({ product }) => (
  <div>
    <Link to={product.frontmatter.path}>
      {product.frontmatter.image && (
        <Img fluid={product.frontmatter.image.childImageSharp.fluid} />
      )}
      {product.frontmatter.title} ({product.frontmatter.price})
    </Link>
  </div>
)

export default ProductLink
