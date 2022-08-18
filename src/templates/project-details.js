import React from "react"
import ProjectLayout from "../components/ProjectLayout.js"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <ProjectLayout>
      <div>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div>
          <GatsbyImage
            image={featuredImg.childImageSharp.gatsbyImageData}
            alt={title}
          />
        </div>
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
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
