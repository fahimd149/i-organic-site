import { graphql, Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import ProductTitle from '../components/ProductTitle'
import './product.css'

const Container = styled.div`
  max-width: 590px;
  width: 100%;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container>
        <div>
          {frontmatter.image && (
            <Img fluid={frontmatter.image.childImageSharp.fluid} />
          )}
          <ProductTitle {...frontmatter} />
          <div dangerouslySetInnerHTML={{ __html: html }} className="product" />
          <Link
            to="buy-now"
            style={{
              color: 'black',
              textDecoration: 'none',
              border: '1px solid black',
              borderRadius: 4,
              padding: 20,
              marginBottom: 10,
            }}
          >
            Buy now
          </Link>
          <Link
            to="/"
            style={{
              color: 'black',
              textDecoration: 'none',
              border: '1px solid black',
              borderRadius: 4,
              padding: 20,
              marginBottom: 10,
            }}
          >
            Back to products
          </Link>
        </div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        price
        path
        title
        image {
          childImageSharp {
            fluid(maxHeight: 350, maxWidth: 550) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
