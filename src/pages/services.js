import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Clients from "../components/clients"
import ServicesComponent from "../components/services"

const Services = () => (
  <Layout>
    <SEO title="Leistungen" description="Wie wir arbeiten und was wir anbieten."/>
    <ServicesComponent/>
    <Clients/>
  </Layout>
)

export default Services