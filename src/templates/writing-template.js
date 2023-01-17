import React from "react"
import { css, cx } from "linaria"
import { colors } from "../styles/styleObjects/colors.js"
import { text } from "../styles/styleObjects/text.js"
import Header from "../components/Header.js"
import { Spacers } from "../styles/styleObjects/spacers"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import BackToHomeButton from "../components/BackToHomeButton.js"

const mainBody = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* space for header */
  padding-top: 56px;
  div.container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 48px 24px;
    width: 100%;
    max-width: 700px;
  }
`

const titleSty = css`
  ${text.complete.lg};
  font-weight: 500;
  color: ${colors.black.darkest};
  width: 100%;
  div.divider {
    flex-grow: 1;
    height: 1px;
    background-color: ${colors.line.light};
  }
  div.iotas {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    ${text.complete.xs}
    font-weight: 400;
    color: ${colors.black.barely};
  }
`

const gatsbyImg = css`
  display: flex;
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 ${colors.line.dark};
  img {
    border-radius: 2px;
  }
`

const mainText = css`
  margin-top: 84px;
  p {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 28px;
    strong {
      font-weight: 600;
    }
  }
  h2 {
    ${text.complete.md};
    color: ${colors.black.darkest};
    font-weight: 500;
    margin-bottom: 28px;
    :not(:first-child) {
      margin-top: 56px;
    }
  }
`

const essayFirstLine = css`
  ::first-line {
    font-weight: 500;
    color: ${colors.black.darkest};
  }
`

export default function WritingTemplate({ data, location }) {
  const { html } = data.markdownRemark
  const { title, description, startDate, featuredImg } =
    data.markdownRemark.frontmatter

  return (
    <div>
      <Header />
      <div className={mainBody}>
        <div className="container">
          <div className={titleSty}>
            <div className="iotas">
              {description}, {startDate}
              <div className="divider"></div>
            </div>
            <Spacers.Vertical._8px />
            {title}
          </div>
          <div
            className={cx(description === "Essay" && essayFirstLine, mainText)}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {featuredImg && (
            <>
              <Spacers.Vertical._48px />
              <GatsbyImage
                image={featuredImg.childImageSharp.gatsbyImageData}
                alt={title}
                className={gatsbyImg}
              />
            </>
          )}
          <Spacers.Vertical._96px />
          <BackToHomeButton originPage={location.state} />
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query WritingTemplate($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        title
        startDate
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
