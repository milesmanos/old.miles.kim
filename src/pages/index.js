import React from "react"
import HomeLayout from "../components/HomeLayout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import "../styles/projects.css"
import { text } from "../styles/styleObjects/text"
import { css } from "linaria"
import { colors } from "../styles/styleObjects/colors"
import LineHeightSpacer from "../components/structure/LineHeightSpacer"
import { breakpoints } from "../styles/styleObjects/layout"

const projectLink = css`
  width: 100%;
  color: ${colors.content.black.primary};
`
const projectsList = css`
  ${text.complete.md}
  display: flex;
  flex-direction: column;
  ${breakpoints.md_sm} {
    ${text.complete.sm}
  }
`

const title = css`
  text-transform: uppercase;
  font-weight: ${text.weight.bold};
  :hover {
    box-shadow: inset 0 -1px 0 0 ${colors.content.black.primary};
  }
`
const desc = css``
const date = css`
  color: ${colors.content.black.secondary};
`

export default function Home({ data }) {
  const projects = data.projects.nodes

  return (
    <HomeLayout>
      {projects.map(project => (
        <div className={projectsList}>
          <LineHeightSpacer isTwoLines />
          <Link
            className={projectLink}
            to={"/projects/" + project.frontmatter.slug}
            key={project.id}
          >
            <GatsbyImage
              image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
              alt="home"
              className="projectImage"
            />
            <LineHeightSpacer />
            <span className={title}>{project.frontmatter.title}</span>{" "}
            <span className={desc}>{project.frontmatter.stack}</span>{" "}
            <span className={date}>{project.frontmatter.date}</span>
          </Link>
        </div>
      ))}
    </HomeLayout>
  )
}

export const allProjectsQuery = graphql`
  query AllProjectsQuery {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          title
          stack
          date
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
