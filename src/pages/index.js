import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as homeStyles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={homeStyles.header}>
        <h1>Hello world!</h1>
        <Link className={homeStyles.btn} to="/projects">
          My Portfolio
        </Link>
      </section>
    </Layout>
  )
}
