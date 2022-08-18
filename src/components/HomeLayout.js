import { css } from "linaria"
import React, { useState } from "react"
import "../styles/global.css"
import "../styles/normalize.css"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints, pagePadding } from "../styles/styleObjects/layout"
import { text } from "../styles/styleObjects/text"
import LineHeightSpacer from "./structure/LineHeightSpacer"
import TextButton from "./buttons/TextButton"
import NavTabs from "./NavTabs"
import { StaticImage } from "gatsby-plugin-image"
// import Navbar from "./Navbar"

// Z-INDICES
// Navbar: 99

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
  ${text.complete.lg}
  ${breakpoints.md_sm} {
    ${text.complete.md};
  }
  span {
    font-weight: ${text.weight.bold};
  }
`
const hiddenDragon = css`
  /* crouching tiger */
`
const profile = css`
  border-radius: 99px;
  height: 192px;
  width: 192px;
`

export default function HomeLayout({ children }) {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className={pageWrapper}>
      {/* <Navbar /> */}
      <header className={headerSty}>
        <strong>MILES KIM</strong>
        <LineHeightSpacer />^{" "}
        <span style={{ color: colors.red }}> Designer</span>,
        <span style={{ color: colors.green }}> artist</span>, &{" "}
        <span style={{ color: colors.blue }}> writer</span> @ San Francisco.{" "}
        <TextButton
          onClick={() => setShowAbout(!showAbout)}
          color="blackSecondary"
        >
          {!showAbout ? "(...)" : "(hide)"}
        </TextButton>
        {showAbout && (
          <div className={hiddenDragon}>
            <br />
            I’m a bit all over the place as a person and thought I’d build a
            single-page mishmash of a website in that spirit. Breaking things up
            into categories helps people parse, but I really only divide what I
            do in two ways.
            <br />
            <br />
            1—I’m a product designer who takes ideas from 0 to 1, with branding,
            messaging, architecture, and graphics. I like being the only
            designer (or one of a few) defining the user-facing backbone of a
            product.
            <br />
            <br />
            2—I’m an artist. This one’s a bit harder to pin down, but ever since
            I can remember I’ve been scribbling away, trying to get at...
            something. Lately, writing has been my medium, though it shifts.
            <br />
            <br />I also like to play guitar, surf, and listen to music.
            <br />
            <br />
            <StaticImage
              src="../images/profile.jpg"
              alt="me"
              className={profile}
            />
            <br />
            <br />
            <TextButton
              onClick={() => setShowAbout(!showAbout)}
              color="blackSecondary"
            >
              (hide)
            </TextButton>
          </div>
        )}
        <LineHeightSpacer isTwoLines />
      </header>

      {/* Tabs */}
      <NavTabs />
      {children}
    </div>
  )
}
