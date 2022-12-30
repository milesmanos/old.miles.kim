import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link, StaticQuery } from "gatsby"
import { css } from "linaria"
import { colors } from "../styles/styleObjects/colors"

const projectLink = css`
  width: 100%;
`
const projectsList = css`
  display: flex;
  flex-direction: column;
`
const projectImage = css`
  width: 100%;
  border-radius: 12px;
  img {
    border-radius: 12px;
  }
`
const title = css`
  :hover {
    box-shadow: inset 0 -1px 0 0 ${colors.content.black.primary};
  }
`
const label = css`
  position: relative;
`
const preview = css``
const iotas = css`
  margin-top: 0.5em;
`
const designColor = css``
const artColor = css``
const writingColor = css``

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
                preview
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
                    </>
                  )}

                  <div className={label}>
                    <div>
                      <span className={title}>{project.frontmatter.title}</span>{" "}
                      <span>{project.frontmatter.description}</span>
                    </div>
                    <div className={preview}>
                      <i>{project.frontmatter.preview}</i>
                    </div>
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
