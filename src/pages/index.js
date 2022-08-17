import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "linaria"
import React from "react"
import TextLink from "../components/buttons/TextLink"
import "../styles/global.css"
import "../styles/normalize.css"
import { breakpoints, pagePadding } from "../styles/styleObjects/layout"
import { Spacers } from "../styles/styleObjects/spacers"
import { text } from "../styles/styleObjects/text"

const pageWrapper = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  ${pagePadding.complete.lg}
  ${breakpoints.md_sm} {
    ${pagePadding.complete.sm}
  }
`

const headerSty = css`
  ${text.complete.lg}
  ${breakpoints.md_sm} {
    ${text.complete.md};
  }
`

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
      </header>
      <Spacers.Vertical._96px />
      <div>
        <StaticImage src="../images/earthworm.jpg" alt="home" />
      </div>
    </section>
  )
}
