import React from "react"
import ProjectLayout from "../components/ProjectLayout.js"
import { graphql } from "gatsby"
import LineHeightSpacer from "../components/structure/LineHeightSpacer.js"
import { Spacers } from "../styles/styleObjects/spacers.js"
import { css } from "linaria"
import { colors } from "../styles/styleObjects/colors.js"
import { text } from "../styles/styleObjects/text.js"
import { GatsbyImage } from "gatsby-plugin-image"
import Slash from "../components/structure/Slash.js"
import Navbar from "../components/Navbar.js"

// Content styles in ../components/ProjectLayout.js
const iotas = css`
  ${text.complete.sm}
  color: ${colors.content.black.secondary};
  text-transform: capitalize;
`

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, place, startDate, subType, featuredImg, category } =
    data.markdownRemark.frontmatter

  return (
    <ProjectLayout>
      <Navbar category={category} title={title} />
      <div>
        <h1>{title}</h1>
        <Spacers.Vertical._8px />
        <div className={iotas}>
          {place}
          <Slash />
          {startDate}
          <Slash />
          {subType}
        </div>
        <LineHeightSpacer isTwoLines />
        {featuredImg && (
          <>
            <GatsbyImage
              image={featuredImg.childImageSharp.gatsbyImageData}
              alt={title}
            />
            <LineHeightSpacer isTwoLines />
          </>
        )}
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
        category
        place
        startDate
        subType
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
