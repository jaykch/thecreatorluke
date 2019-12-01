import React from "react"
import "./banner.scss"
import { Container, Row, Col } from "react-bootstrap"
import PremiumButton from "./buttons/PremiumButton"

const Banner = () => (
  <section id="banner">
    <Container>
      <Row>
        <Col md={6}>
          <span>Brand Digital and Motion</span>
          <h3>subtitle</h3>
          <p>Als eine hybride Werbeproduktion aus Köln entwickeln wir kreative
            Lösungen für deine Marke, dein Unternehmen oder dein Projekt.
            Unser Fokus liegt auf Qualität und individueller Zusammenarbeit</p>
          <PremiumButton to="/projects" text="Zu unserem Portfolio"/>
        </Col>
        <Col md={6}>

        </Col>
      </Row>
    </Container>
  </section>
)

export default Banner