import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as homeStyles from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={homeStyles.header}>
        <div>
          <h1>Hello world!</h1>
          <Link className={homeStyles.btn} to="/projects">
            My Portfolio
          </Link>
          <b>{title}</b>
          <p>{description}</p>
        </div>
        <div>
          <img
            src="/earthworm.jpg"
            alt="earthworm"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
