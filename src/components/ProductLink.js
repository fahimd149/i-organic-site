import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import ProductTitle from './ProductTitle';

const Container = styled.div`
  max-width: 590px;
  width: 100%;
  margin: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`

const ProductLink = ({ product }) => (
  <Container>
    <Link to={product.frontmatter.path}>
      {product.frontmatter.image && (
        <Img fluid={product.frontmatter.image.childImageSharp.fluid} />
      )}
      <ProductTitle {...product.frontmatter} />
    </Link>
  </Container>
)

export default ProductLink
