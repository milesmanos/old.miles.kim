import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as homeStyles from "../styles/home.module.css"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={homeStyles.header}>
        <div>
          <h1>Hello world!</h1>
          <Link className={homeStyles.btn} to="/projects">
            My Portfolio
          </Link>
        </div>
        <div>
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="home"
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query DynamicImage {
    file(relativePath: { eq: "earthworm.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
