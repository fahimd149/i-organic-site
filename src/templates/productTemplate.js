import React from "react"
import { graphql } from "gatsby"
// import Img from 'gatsby-image';
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter);
  return (
    <Layout>
      <div className="product-container">
        <div className="product">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.price}</h2>
          <div
            className="product-content"
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
        price
        path
        title
        image
      }
    }
  }
`

// {frontmatter.image && <Img fluid={frontmatter.image.childImageSharp.fluid} />}