import React from "react"
import ProjectLayout from "../components/ProjectLayout.js"
import { graphql, Link, navigate } from "gatsby"
import LineHeightSpacer from "../components/structure/LineHeightSpacer.js"
import { Spacers } from "../styles/styleObjects/spacers.js"
import { css } from "linaria"
import { colors } from "../styles/styleObjects/colors.js"
import { text } from "../styles/styleObjects/text.js"
import { GatsbyImage } from "gatsby-plugin-image"
import Slash from "../components/structure/Slash.js"
import Navbar from "../components/Navbar.js"
import { breakpoints, pagePadding } from "../styles/styleObjects/layout.js"

// Content styles in ../components/ProjectLayout.js
const mainContent = css`
  background-color: white;
  position: absolute;
  z-index: 99;
  width: 100%;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  border-top: solid 1px var(--content-black-line);
  ${pagePadding.complete.lg};
  ${breakpoints.md_sm} {
    ${pagePadding.complete.sm};
    ${text.complete.sm};
  }
`
const iotas = css`
  ${text.complete.sm}
  color: ${colors.content.black.secondary};
  text-transform: capitalize;
`
const linkButton = css`
  color: ${colors.content.black.secondary};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: ${colors.content.black.primary};
  }
`

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, place, startDate, subType, featuredImg } =
    data.markdownRemark.frontmatter

  return (
    <ProjectLayout>
      <Navbar receding />
      <div className={mainContent}>
        {sessionStorage.getItem("@@scroll|/|initial") ? (
          <button className={linkButton} onClick={() => navigate(-1)}>
            <span>x</span>
          </button>
        ) : (
          <Link className={linkButton} to="/">
            <span>x</span>
          </Link>
        )}

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
