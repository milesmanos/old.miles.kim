import React from "react"
import { graphql, Link, navigate } from "gatsby"
import { css } from "linaria"
import { GatsbyImage } from "gatsby-plugin-image"
import { colors } from "../styles/styleObjects/colors"
import Header from "../components/Header"
import { text } from "../styles/styleObjects/text"
import { breakpoint } from "../styles/styleObjects/layout"
import Button from "../components/Button"
import { CloseSVG } from "../icons/CloseSVG"

const hero = css`
  height: 100vh;
  background-color: ${colors.black.darkest};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 24px;
`

const gatsbyImg = css`
  max-height: 100%;
  img {
    max-height: 100%;
    border-radius: 2px;
  }
`

const mainBody = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  div.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 24px;
    gap: 48px;
    width: 100%;
    max-width: 1000px;
  }
  div.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    width: 100%;
    ${breakpoint} {
      grid-template-columns: 1fr;
    }
  }
`

const titleSty = css`
  ${text.complete.lg};
  font-weight: 500;
  color: ${colors.black.darkest};
`

const descSty = css`
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  div.row {
    display: flex;
    gap: 16px;
  }
  div.label {
    color: ${colors.black.secondary};
    width: 50px;
    flex-shrink: 0;
  }
`

export default function ArtTemplate({ data }) {
  const { title, startDate, description, size, featuredImg } =
    data.markdownRemark.frontmatter

  return (
    <div>
      <Header isClear />
      <div className={hero}>
        <GatsbyImage
          image={featuredImg.childImageSharp.gatsbyImageData}
          alt={title}
          className={gatsbyImg}
          objectFit="contain"
        />
      </div>
      <div className={mainBody}>
        <div className="container">
          <div className="content">
            <div className={titleSty}>{title}</div>
            <div className={descSty}>
              <div className="row">
                <div className="label">type</div>
                {description}
              </div>
              <div className="row">
                <div className="label">size</div>
                {size}
              </div>
              <div className="row">
                <div className="label">date</div>
                {startDate}
              </div>
            </div>
          </div>

          {sessionStorage.getItem("@@scroll|/|initial") ? (
            <Button isFullWidth onClick={() => navigate(-1)}>
              <div className="text">Back to All Projects </div>
              <div className="icon">
                <CloseSVG size={16} />
              </div>
            </Button>
          ) : (
            <Link style={{ width: "100%" }} to="/">
              <Button isFullWidth>
                <div className="text">Back to All Projects </div>
                <div className="icon">
                  <CloseSVG size={16} />
                </div>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        title
        startDate
        size
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
`
