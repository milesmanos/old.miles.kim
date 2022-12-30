import { StaticImage } from "gatsby-plugin-image"
import { css } from "linaria"
import React, { useState } from "react"
import Navbar from "../components/Navbar"
import ProjectsList from "../components/ProjectsList"
import { colors } from "../styles/styleObjects/colors"
import { breakpoint } from "../styles/styleObjects/layout"
import { XIcon } from "../icons/XIcon"
import { Link } from "gatsby"
import Button from "../components/Button"

// Hello again Miles! File Structure:
// - Home: index.js
// - Projects List: /components/ProjectsList.js
// - Project queries: /templates/project-details.js
// - Project layouts: /components/ProjectLayout.js

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
  padding: 48px 24px;
`

// info box
const infoOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  z-index: 2;
`
const clickOutToClose = css`
  height: 100vh;
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.25);
`
const infoBox = css`
  position: relative;
  background-color: white;
  width: 500px;
  ${breakpoint} {
    width: 100%;
  }
  height: 100vh;
  top: 0;
  left: 0;
  overflow-y: auto;
`
const infoContent = css`
  padding: 32px 24px 24px 24px;
  color: ${colors.black.primary};
  display: flex;
  flex-direction: column;
  gap: 48px;
`
const infoText = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const profPic = css`
  border-radius: 2px;
  img {
    border-radius: 2px;
  }
`

// mocknav
const mockNav = css`
  position: sticky;
  background-color: white;
  display: flex;
  align-items: center;
  top: 0px;
  right: 0px;
  left: 0px;
  padding: 16px 24px;
  color: ${colors.black.darkest};
`
const flexGrow = css`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
`
const miles = css`
  flex-grow: 0;
  font-weight: 500;
  cursor: pointer;
`

export default function Home() {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className={pageWrapper}>
      <Navbar onClick={() => setShowInfo(!showInfo)} />
      <StaticImage
        src="../images/art/electrode.jpg"
        alt="Electrode — Painting"
        className={hero}
        quality={100}
      />
      <div className={mainBody}>
        <ProjectsList />
      </div>
      {showInfo && (
        <>
          <div className={infoOverlay}>
            <div className={infoBox}>
              <div className={mockNav}>
                <div className={flexGrow}>
                  <Link to="/" className={miles}>
                    Miles Kim
                  </Link>
                </div>
                <Button onClick={() => setShowInfo(false)}>
                  <div className="text">Close</div>
                </Button>
              </div>
              <div className={infoContent}>
                <div className={infoText}>
                  <div>
                    ... designs interfaces, lives in San Francisco, writes
                    often, paints sometimes. Loves music, surfing, hiking, and
                    nature docs.
                  </div>
                  <div>
                    Graduated Yale class of 2020 with a B.A. in studio art. Has
                    worked as a designer and (sometimes) frontend developer for
                    startups over the past years.
                  </div>
                  <div>
                    <div style={{ textDecoration: "line-through" }}>
                      Is always looking for new ways to think and create, is
                      itching for new projects.
                    </div>
                    Is working at Ahoy Labs.
                  </div>
                </div>
                <StaticImage
                  src="../images/square-prof-pic.jpg"
                  alt="Me"
                  aspectRatio={1 / 1}
                  className={profPic}
                />
                <Button isFullWidth onClick={() => setShowInfo(false)}>
                  <div className="text">Close</div>
                  <div className="icon">
                    <XIcon size={16} />
                  </div>
                </Button>
              </div>
            </div>
            <button
              className={clickOutToClose}
              onClick={() => setShowInfo(!showInfo)}
            />
          </div>
        </>
      )}
    </div>
  )
}
