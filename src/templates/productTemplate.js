import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

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
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.price}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
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
      }
    }
  }
`
