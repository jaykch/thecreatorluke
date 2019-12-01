import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Values from "../components/values"
import Members from "../components/members"

const Team = () => (
  <Layout>
    <SEO title="Team"
         description="Wir greifen auf ein Team aus Design, Film, Foto, Web Development, Content und vielen anderen Bereichen zurück."/>
    <Members/>
    <Values/>
  </Layout>
)

export default Team