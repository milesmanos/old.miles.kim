import { graphql, Link } from "gatsby"
import React from "react"
import HomeLayout from "../components/HomeLayout"
import ProjectCard from "../components/ProjectCard"
import { OpenSVG } from "../icons/OpenSVG"
import { ExternalLinkSVG } from "../icons/ExternalLinkSVG"

export default function Writing({ data }) {
  const projects = data.projects.nodes
  return (
    <HomeLayout>
      {projects.map(project => (
        <div key={project.frontmatter.slug}>
          {project.frontmatter.url ? (
            <a href={project.frontmatter.url} target="_blank" rel="noreferrer">
              <ProjectCard project={project}>
                <ExternalLinkSVG size={16} />
              </ProjectCard>
            </a>
          ) : (
            <Link
              to={project.frontmatter.slug}
              state={{ originPage: "Writing" }}
            >
              <ProjectCard project={project}>
                <OpenSVG size={16} />
              </ProjectCard>
            </Link>
          )}
        </div>
      ))}
    </HomeLayout>
  )
}

export const query = graphql`
  query WritingQuery {
    projects: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "writing" } } }
      sort: { frontmatter: { sortDate: DESC } }
    ) {
      nodes {
        frontmatter {
          category
          description
          endDate
          featured
          length
          preview
          slug
          size
          startDate
          title
          url
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`
