import { graphql, Link } from "gatsby"
import { css } from "linaria"
import React from "react"
import Header from "../components/Header"
import Tabs from "../components/Tabs"
import ProjectCard from "../components/ProjectCard"
import { OpenSVG } from "../icons/OpenSVG"
import { ExternalLinkSVG } from "../icons/ExternalLinkSVG"
import Footer from "../components/Footer"
// import { StaticImage } from "gatsby-plugin-image"

// Hello again Miles! File Structure:
// - Home: index.js
// - Projects List: /components/ProjectsList.js
// - Project queries: /templates/project-details.js
// - Project layouts: /components/ProjectLayout.js

const pageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

// const hero = css`
//   height: 100vh;
// `

const mainBody = css`
  max-width: 1000px;
  padding: 104px 24px 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 72px;
`

export default function Home({ data }) {
  const projects = data.projects.nodes
  return (
    <div className={pageWrapper}>
      <Header />

      {/* <StaticImage
        src="../images/art/electrode.jpg"
        alt="Electrode — Painting"
        className={hero}
        quality={100}
      /> */}

      <div className={mainBody}>
        <Tabs />
        {projects.map(project =>
          project.frontmatter.url ? (
            <a href={project.frontmatter.url} target="_blank">
              <ProjectCard project={project}>
                <ExternalLinkSVG size={16} />
              </ProjectCard>
            </a>
          ) : (
            <Link to={"/projects/" + project.frontmatter.slug}>
              <ProjectCard project={project}>
                <OpenSVG size={16} />
              </ProjectCard>
            </Link>
          )
        )}
      </div>
      <Footer />
    </div>
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
