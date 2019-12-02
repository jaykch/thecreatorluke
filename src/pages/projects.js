import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container, Row } from "react-bootstrap"
import Project from "../components/project"

const Projects = ({ data }) => {
  const { edges } = data.allContentfulProject
  const projectArray = edges.map((edge) => {
    return <Project key={edge.node.title} data={edge.node}/>
  })

  return (
    <Layout>
      <SEO title="Projekte" description="Diese Projekte haben wir bereits erfolgreich umgesetzt."/>
      <section className="projects">
        <Container>
          <Row>
            {projectArray}
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulProject {
      edges {
        node {
          title
          category
          type
          photo {
            file {
              url
            }
          }
          video
        }
      }
    }
}
`

export default Projects