import { css, cx } from "linaria"
import React, { useState } from "react"
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

const scrollDisabledCss = css`
  overflow: hidden;
`

export default function ProjectLayout({ children }) {
  const [scrollDisabled, setScrollDisabled] = useState(false)

  return (
    <div className={cx(pageWrapper, scrollDisabledCss)}>
      <Header />
      <div className={mainBody}>
        <Tabs />
        {children}
      </div>
      <Footer />
    </div>
  )
}
