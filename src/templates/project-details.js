import React from "react"
import ProjectLayout from "../components/ProjectLayout.js"
import { graphql } from "gatsby"
import LineHeightSpacer from "../components/structure/LineHeightSpacer.js"
import { Spacers } from "../styles/styleObjects/spacers.js"
import { css } from "linaria"
import { colors } from "../styles/styleObjects/colors.js"

// Content styles in ../components/ProjectLayout.js
const iotas = css`
  color: ${colors.content.black.secondary};
`

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, place, startDate, subType } = data.markdownRemark.frontmatter

  return (
    <ProjectLayout>
      <div>
        <h1>{title}</h1>
        <Spacers.Vertical._8px />
        <div className={iotas}>
          hi
          {place}
          {" / "}
          {startDate}
          {" / "}
          {subType}
        </div>
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
