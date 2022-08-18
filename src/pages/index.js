import { StaticImage } from "gatsby-plugin-image"
import { css } from "linaria"
import React from "react"
import TextLink from "../components/buttons/TextLink"
import NavTabs from "../components/NavTabs"
import "../styles/global.css"
import "../styles/normalize.css"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints, pagePadding } from "../styles/styleObjects/layout"
import { Spacers } from "../styles/styleObjects/spacers"
import { text } from "../styles/styleObjects/text"

const pageWrapper = css`
  color: ${colors.content.black.primary};
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  ${pagePadding.complete.lg}
  ${breakpoints.md_sm} {
    ${pagePadding.complete.sm}
  }
`

const headerSty = css`
  position: relative;
  ${text.complete.lg}
  ${breakpoints.md_sm} {
    ${text.complete.md};
  }
`

// const buttonPosition = css`
//   position: absolute;
//   top: 0px;
//   right: 0px;
//   ${breakpoints.md_sm} {
//     position: fixed;
//     top: auto;
//     bottom: 8px;
//     right: 8px;
//   }
// `

export default function Home() {
  return (
    <section className={pageWrapper}>
      <header className={headerSty}>
        <strong>MILES KIM</strong>
        <br />
        <br />
        I’m a designer, artist, and writer based in San Francisco. Here’s a
        mishmash of my projects in all disciplines.{" "}
        <TextLink color="blackSecondary">More&nbsp;about&nbsp;me</TextLink>
        {/* <div className={buttonPosition}>
          <Button size="lg" color="white" svgFirst>
            Connect
          </Button>
        </div> */}
      </header>
      <Spacers.Vertical._96px />
      <NavTabs />
      <Spacers.Vertical._64px />
      <div>
        <StaticImage src="../images/earthworm.jpg" alt="home" />
      </div>
    </section>
  )
}
