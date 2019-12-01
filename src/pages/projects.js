import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"

const Projects = () => (
  <Layout>
    <SEO title="Projekte" description="Diese Projekte haben wir bereits erfolgreich umgesetzt."/>
    <section>
      <Container>
        Projects
      </Container>
    </section>
  </Layout>
)

export default Projects