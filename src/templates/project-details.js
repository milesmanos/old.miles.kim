import React from "react"
import ArtLayout from "../components/ProjectLayouts/ArtLayout.js"
import { graphql, Link, navigate } from "gatsby"
import { Spacers } from "../styles/styleObjects/spacers.js"
import { css } from "linaria"
import { colors } from "../styles/styleObjects/colors.js"
import { text } from "../styles/styleObjects/text.js"
import { GatsbyImage } from "gatsby-plugin-image"

// Content styles in ../components/ProjectLayout.js

export default function ProjectDetails({ data }) {
  // const { html } = data.markdownRemark
  // const { title, place, startDate, subType, featuredImg } =
  //   data.markdownRemark.frontmatter

  return (
    <ArtLayout>
      children
      {/* <div className={mainContent}>
        {sessionStorage.getItem("@@scroll|/|initial") ? (
          <button className={linkButton} onClick={() => navigate(-1)}>
            <span>x</span>
          </button>
        ) : (
          <Link className={linkButton} to="/">
            <span>x</span>
          </Link>
        )}

        <h1>{title}</h1>
        <Spacers.Vertical._8px />
        <div className={iotas}>
          {place}
          {startDate}
          {subType}
        </div>
        {featuredImg && (
          <>
            <GatsbyImage
              image={featuredImg.childImageSharp.gatsbyImageData}
              alt={title}
            />
          </>
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div> */}
    </ArtLayout>
  )
}

// export const query = graphql`
//   query ProjectDetails($slug: String) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         description
//         title
//         category
//         place
//         startDate
//         subType
//         featuredImg {
//           childImageSharp {
//             gatsbyImageData(layout: CONSTRAINED)
//           }
//         }
//       }
//     }
//   }
// `
