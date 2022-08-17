import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "linaria"
import React from "react"
import Layout from "../components/Layout"
import "../styles/normalize.css"
import { text } from "../styles/styleObjects/text"

const headerSty = css`
  ${text.complete.lg}
`

export default function Home() {
  return (
    <Layout>
      <section>
        <div>
          <p className={headerSty}>big paragraph</p>
          <div>
            <strong>Hello</strong>Hello world!
          </div>
          <Link to="/projects">My Portfolio</Link>
        </div>
        <div>
          <StaticImage src="../images/earthworm.jpg" alt="home" />
        </div>
      </section>
    </Layout>
  )
}
