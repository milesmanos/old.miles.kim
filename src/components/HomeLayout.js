import { css } from "linaria"
import React from "react"
import "../styles/global.css"
import "../styles/normalize.css"
import Header from "./Header"
import Tabs from "../components/Tabs"
import Footer from "../components/Footer"

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
  padding: 104px 24px 72px 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 72px;
`

export default function ProjectLayout({ children }) {
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
        {children}
      </div>
      <Footer />
    </div>
  )
}
