import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  const projects = data.projects.nodes

  return (
    <Layout>
      {projects.map(project => (
        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
          <div>
            <GatsbyImage
              image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
              alt="home"
            />
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
            <p>{project.frontmatter.date}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
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
