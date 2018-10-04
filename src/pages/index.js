import React from "react"
import { graphql } from "gatsby"
import ProductLink from "../components/ProductLink"
import Layout from '../components/layout'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Products = edges
    .filter(edge => !!edge.node.frontmatter.price) // You can filter your posts based on some criteria
    .map(edge => <ProductLink key={edge.node.id} product={edge.node} />)

  return <Layout>{Products}</Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___price] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            price
            path
            title
          }
        }
      }
    }
  }
`