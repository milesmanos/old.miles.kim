import { css } from "linaria"
import React from "react"
import "../styles/global.css"
import "../styles/normalize.css"
import Header from "./Header"
import Tabs from "../components/Tabs"
import Footer from "../components/Footer"
import { colors } from "../styles/styleObjects/colors"

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

const divider = css`
  height: 1px;
  border-bottom: 1px solid ${colors.line.light};
`

export default function ProjectLayout({ children }) {
  return (
    <div className={pageWrapper}>
      <Header />
      <div className={mainBody}>
        <Tabs />
        {children}
        <div className={divider} />
        <Tabs />
      </div>
      <Footer />
    </div>
  )
}
