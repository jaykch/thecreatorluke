import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import Banner from "../components/banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Banner/>
  </Layout>
)

export default IndexPage
