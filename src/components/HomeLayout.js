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
      <div className={mainBody}>
        <Tabs />
        {children}
        <Tabs />
      </div>
      <Footer />
    </div>
  )
}
