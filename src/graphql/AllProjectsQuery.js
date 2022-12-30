// export const AllProjectsQuery = graphql`
//   query AllProjectsQuery {
//     projects: allMarkdownRemark(
//       sort: { order: DESC, fields: frontmatter___sortDate }
//     ) {
//       nodes {
//         frontmatter {
//           title
//           description
//           preview
//           category
//           startDate
//           endDate
//           sortDate
//           slug
//           thumb {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED)
//             }
//           }
//         }
//         id
//       }
//     }
//     contact: site {
//       siteMetadata {
//         contact
//       }
//     }
//   }
// `
