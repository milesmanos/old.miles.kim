const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            category
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/" + node.frontmatter.category + "/" + node.frontmatter.slug,
      component: path.resolve(
        "./src/templates/" + node.frontmatter.category + "-template.js"
      ),
      context: { slug: node.frontmatter.slug },
    })
  })
}
