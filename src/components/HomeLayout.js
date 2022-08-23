import { css } from "linaria"
import React, { useState } from "react"
import "../styles/global.css"
import "../styles/normalize.css"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints, pagePadding } from "../styles/styleObjects/layout"
import { text } from "../styles/styleObjects/text"
import TextButton from "./buttons/TextButton"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "./Navbar"

// Z-INDICES
// Navbar: 99

// Page Styles
const pageWrapper = css`
  ${text.complete.md}
  color: ${colors.content.black.primary};
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  ${pagePadding.complete.lg}
  ${breakpoints.md_sm} {
    ${pagePadding.complete.sm}
    ${text.complete.mobText}
  }
`
const headerSty = css`
  span {
    font-weight: ${text.weight.bold};
  }
`
const mk = css`
  ${text.complete.xxl}
  ${breakpoints.md_sm} {
    ${text.complete.xl}
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
      <Navbar />
      <header className={headerSty}>
        <strong className={mk}>Miles Kim</strong>
        <div>
          ^<span style={{ color: colors.red }}> Designer</span>,
          <span style={{ color: colors.green }}> artist</span>, &{" "}
          <span style={{ color: colors.blue }}> writer</span> in San Francisco.{" "}
          <TextButton
            onClick={() => setShowAbout(!showAbout)}
            color="blackSecondary"
          >
            {!showAbout ? "(...)" : "(hide)"}
          </TextButton>
        </div>
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
              width={128}
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
      </header>
      {children}
    </div>
  )
}
