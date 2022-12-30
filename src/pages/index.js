import { StaticImage } from "gatsby-plugin-image"
import { css } from "linaria"
import React from "react"
import Navbar from "../components/Navbar"
import ProjectsList from "../components/ProjectsList"

const pageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const hero = css`
  height: 100vh;
`

const mainBody = css`
  max-width: 1000px;
  padding: 24px;
`

// File Structure
// - Home: index.js
// - Projects List: /components/ProjectsList.js
// - Project queries: /templates/project-details.js
// - Project layouts: /components/ProjectLayout.js

export default function Home() {
  return (
    <div className={pageWrapper}>
      <Navbar />
      <StaticImage
        src="../images/art/electrode.jpg"
        alt="Electrode — Painting"
        className={hero}
        quality={100}
      />
      <div className={mainBody}>
        <ProjectsList />
      </div>
    </div>
  )
}
