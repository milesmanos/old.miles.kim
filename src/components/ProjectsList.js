import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link, StaticQuery } from "gatsby"
import { css, cx } from "linaria"
import { colors } from "../styles/styleObjects/colors"
import { OpenIcon } from "../icons/OpenIcon"
import { text } from "../styles/styleObjects/text"
import { breakpoint } from "../styles/styleObjects/layout"
import Tabs from "./Tabs"

const projectsList = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 72px;
`

const projectLink = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 8px;
  border: none;
  border-top: 1px solid ${colors.line.light};
  margin-top: -1px;
  div.inherit {
    color: ${colors.black.secondary};
  }
  div.icon {
    display: flex;
    justify-content: flex-end;
    color: ${colors.line.dark};
  }
  :hover {
    color: ${colors.black.darkest};
    border: none;
    border-top: 1px solid ${colors.line.dark};
    div.inherit {
      color: ${colors.black.primary};
    }
    div.icon {
      color: ${colors.black.barely};
    }
  }
  :active {
    color: ${colors.black.secondary};
    border: none;
    border-top: 1px solid ${colors.line.light};
    div.inherit {
      color: ${colors.black.secondary};
    }
    div.icon {
      color: ${colors.line.dark};
    }
  }
`

const projectContent = css`
  color: ${colors.black.primary};
  display: flex;
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 ${colors.line.dark};
  img {
    border-radius: 2px;
  }
`
const title = css`
  ${text.complete.md};
  color: ${colors.black.darkest};
  font-weight: 500;
`
const theRest = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 48px;
  ${breakpoint} {
    flex-direction: column;
    gap: 24px;
  }
`

const label = css`
  margin-top: 5px;
  color: inherit;
  display: flex;
  flex-direction: column;
  width: 225px;
  flex-shrink: 0;
  ${text.complete.xs}
  gap: 8px;
  ${breakpoint} {
    width: 100%;
  }
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
                preview
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
            <Tabs />
            {projects.map(project => (
              <div key={project.id}>
                <Link
                  className={projectLink}
                  to={"/projects/" + project.frontmatter.slug}
                >
                  <div>
                    <div className="icon">
                      <OpenIcon size={16} />
                    </div>
                    <div className={title}>{project.frontmatter.title}</div>
                  </div>
                  <div className={theRest}>
                    {project.frontmatter.thumb ? (
                      <>
                        <GatsbyImage
                          image={
                            project.frontmatter.thumb.childImageSharp
                              .gatsbyImageData
                          }
                          alt={project.frontmatter.title}
                          className={projectContent}
                        />
                      </>
                    ) : (
                      <div>
                        {project.frontmatter.preview}
                        <div className="inherit">...</div>
                      </div>
                    )}
                    <div className={cx(label, "inherit")}>
                      <div>{project.frontmatter.description}</div>
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
