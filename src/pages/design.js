import React from "react"
import HomeLayout from "../components/HomeLayout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import "../styles/projects.css"

export default function Design({ data }) {
  const projects = data.projects.nodes

  return (
    <HomeLayout>
      {projects.map(project => (
        <Link
          className="project"
          to={"/projects/" + project.frontmatter.slug}
          key={project.id}
        >
          <div>
            <GatsbyImage
              image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
              alt="home"
              className="projectImage"
            />
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
            <p>{project.frontmatter.date}</p>
          </div>
        </Link>
      ))}
    </HomeLayout>
  )
}

export const designProjectsQuery = graphql`
  query DesignQuery {
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
