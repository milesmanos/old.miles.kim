import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link, StaticQuery } from "gatsby"
import { text } from "../styles/styleObjects/text"
import { css, cx } from "linaria"
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
const projectImage = css`
  width: 100%;
  border-radius: 12px;
  img {
    border-radius: 12px;
  }
`
const title = css`
  text-transform: uppercase;
  font-weight: ${text.weight.bold};
  :hover {
    box-shadow: inset 0 -1px 0 0 ${colors.content.black.primary};
  }
`
const label = css`
  position: relative;
`
const desc = css``
const iotas = css`
  color: ${colors.content.black.secondary};
`
const colorDot = css`
  position: absolute;
  left: -16px;
  width: 8px;
  height: 8px;
  border-radius: 99px;
  background-color: red;
  top: 12px;
  ${breakpoints.md_sm} {
    top: 9px;
    left: -12px;
    width: 6px;
    height: 6px;
  }
`
const designColor = css`
  color: ${colors.red};
`
const artColor = css`
  color: ${colors.green};
`
const writingColor = css`
  color: ${colors.blue};
`

export default function ProjectsList() {
  return (
    <StaticQuery
      query={graphql`
        query AllProjectsQuery {
          projects: allMarkdownRemark(
            sort: { order: DESC, fields: frontmatter___sortDate }
          ) {
            nodes {
              frontmatter {
                title
                description
                category
                startDate
                endDate
                sortDate
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
      `}
      render={data => {
        const projects = data.projects.nodes
        return (
          <div className={projectsList}>
            {projects.map(project => (
              <div key={project.id}>
                <LineHeightSpacer isTwoLines />
                <Link
                  className={projectLink}
                  to={"/projects/" + project.frontmatter.slug}
                >
                  {project.frontmatter.thumb && (
                    <>
                      <GatsbyImage
                        image={
                          project.frontmatter.thumb.childImageSharp
                            .gatsbyImageData
                        }
                        alt={project.frontmatter.title}
                        className={projectImage}
                      />
                      <LineHeightSpacer isEm />
                    </>
                  )}

                  <div className={label}>
                    <div>
                      <span className={title}>{project.frontmatter.title}</span>{" "}
                      <span className={desc}>
                        {project.frontmatter.description}
                      </span>
                    </div>
                    {project.frontmatter.preview}
                    <div className={iotas}>
                      {project.frontmatter.category === "design" ? (
                        <span className={designColor}>Design</span>
                      ) : project.frontmatter.category === "art" ? (
                        <span className={artColor}>Art</span>
                      ) : project.frontmatter.category === "writing" ? (
                        <span className={writingColor}>Writing</span>
                      ) : null}
                      {" / "}
                      <div style={{ display: "inline-block" }}>
                        {project.frontmatter.startDate}&nbsp;
                        {project.frontmatter.endDate}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )
      }}
    />
  )
}
