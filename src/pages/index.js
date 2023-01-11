import { graphql, Link } from "gatsby"
import React from "react"
import HomeLayout from "../components/HomeLayout"
import ProjectCard from "../components/ProjectCard"
import { OpenSVG } from "../icons/OpenSVG"
import { ExternalLinkSVG } from "../icons/ExternalLinkSVG"

// Hello again Miles! File Structure:
// - Home: index.js (layout in HomeLayout.js)
// - Projects List: /components/ProjectsList.js
// - Project queries: /templates/project-details.js
// - Project layouts: /components/ProjectLayout.js

export default function Home({ data }) {
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
              to={project.frontmatter.category + "/" + project.frontmatter.slug}
              state={{ originPage: "Home" }}
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
  query HomeQuery {
    projects: allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: "y" } } }
      sort: { order: DESC, fields: frontmatter___sortDate }
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
