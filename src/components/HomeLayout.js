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

// Z-INDICES
// Navbar: 99

// Page Styles
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
  img {
    border-radius: 99px;
  }
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
        <span style={{ color: colors.blue }}> writer</span> in San Francisco.{" "}
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
            single-page mishmash of a website in that spirit.
            <br />
            <br />
            1—I’m a <strong>product designer</strong> who takes ideas from 0 to
            1, defining the user-facing backbone of a product with visual
            design, brand strategy, and writing. I’m learning frontend
            development (enough to build this site).
            <br />
            <br />
            2—I’m an <strong>artist</strong>. Ever since I can remember I’ve
            been drawing and painting.
            <br />
            <br />
            3—I’m a <strong>writer</strong>. My work bounces between practical,
            personal, artistic. Right now it’s my main artistic medium.
            <br />
            <br />I also like to play guitar, surf, and listen to music.
            <br />
            <br />
            Enjoy!
            <br />
            Miles
            <br />
            <br />
            <StaticImage
              src="../images/profile.jpg"
              alt="me"
              className={profile}
              width={192}
              aspectRatio={1}
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
