import { GatsbyImage } from "gatsby-plugin-image"
import { css, cx } from "linaria"
import React from "react"
import { colors } from "../styles/styleObjects/colors"
import { breakpoint } from "../styles/styleObjects/layout"
import { text } from "../styles/styleObjects/text"

const projectContent = css`
  color: ${colors.black.primary};
  display: flex;
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 ${colors.line.dark};
  img {
    border-radius: 2px;
  }
`
const title = css`
  ${text.complete.md};
  color: ${colors.black.darkest};
  font-weight: 500;
`
const theRest = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 48px;
  ${breakpoint} {
    flex-direction: column;
    gap: 24px;
  }
`
const label = css`
  margin-top: 5px;
  color: inherit;
  display: flex;
  flex-direction: column;
  width: 225px;
  flex-shrink: 0;
  ${text.complete.xs}
  gap: 8px;
  ${breakpoint} {
    width: 100%;
  }
`

const projectLink = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 4px;
  border: none;
  border-top: 1px solid ${colors.line.light};
  margin-top: -1px;
  div.inherit {
    color: ${colors.black.secondary};
  }
  div.icon {
    display: flex;
    justify-content: flex-end;
    color: ${colors.line.dark};
  }
  :hover {
    color: ${colors.black.darkest};
    div.inherit {
      color: ${colors.black.primary};
    }
    div.icon {
      color: ${colors.black.secondary};
    }
  }
  :active {
    color: ${colors.black.secondary};
    div.inherit {
      color: ${colors.black.secondary};
    }
    div.icon {
      color: ${colors.line.dark};
    }
  }
`

const ProjectCard = ({ project, children }) => {
  return (
    <div className={projectLink} key={project.id}>
      <div>
        <div className="icon">{children}</div>
        <div className={title}>{project.frontmatter.title}</div>
      </div>
      <div className={theRest}>
        {project.frontmatter.thumb ? (
          <>
            <GatsbyImage
              image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
              alt={project.frontmatter.title}
              className={projectContent}
            />
          </>
        ) : (
          <div>
            {project.frontmatter.preview}
            <div className="inherit">...</div>
          </div>
        )}
        <div className={cx(label, "inherit")}>
          <div>{project.frontmatter.description}</div>
          {project.frontmatter.length && (
            <div>{project.frontmatter.length}</div>
          )}
          {project.frontmatter.size && <div>{project.frontmatter.size}</div>}
          <div style={{ display: "inline-block" }}>
            {project.frontmatter.startDate}&nbsp;
            {project.frontmatter.endDate}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
