import React from "react"
import ProjectLayout from "../components/ProjectLayout.js"
import { graphql } from "gatsby"
import LineHeightSpacer from "../components/structure/LineHeightSpacer.js"

// styles in ../components/ProjectLayout.js

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter

  return (
    <ProjectLayout>
      <div>
        <h1>{title}</h1>
        <LineHeightSpacer isTwoLines />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </ProjectLayout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        title
      }
    }
  }
`
