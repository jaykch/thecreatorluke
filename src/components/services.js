import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { AiOutlineEye, AiOutlineAppstore } from "react-icons/ai"
import { MdShowChart } from "react-icons/md"
import "./services.scss"

const Services = () => (
  <section id="services">
    <Container>
      <div className="title">
        <h2>Unsere Leistungen</h2>
        <span>Was wir machen</span>
      </div>
      <Row className="services-with-icons">
        <Col md={4}>
          <h4><AiOutlineEye/>Visuals</h4>
          <ul>
            <li>_text1</li>
            <li>_text2</li>
            <li>_text3</li>
            <li>_text4</li>
          </ul>
        </Col>
        <Col md={4}>
          <h4><AiOutlineAppstore/>Design</h4>
          <ul>
            <li>_text1</li>
            <li>_text2</li>
            <li>_text3</li>
          </ul>
        </Col>
        <Col md={4}>
          <h4><MdShowChart/>Strategy</h4>
          <ul>
            <li>_text1</li>
            <li>_text2</li>
            <li>_text3</li>
            <li>_text4</li>
            <li>_text5</li>
          </ul>
        </Col>
      </Row>
      <Row className="service-container">
        <h3>We Create</h3>
        <Col xs={6} style={{ borderRight: "1.5px solid #e6e6e6" }}>
          <div className="service">
            <h4>Zielsetzung</h4>
            <ul>
              <li>Werbeziele</li>
              <li>Zielgruppe</li>
            </ul>
          </div>
          <div className="service">
            <h4>Budgetierung</h4>
            <ul>
              <li>Angebot</li>
            </ul>
          </div>
        </Col>
        <Col xs={6}>
          <div className="service">
            <h4>Konzeption</h4>
            <ul>
              <li>Storyboarding</li>
              <li>Content Strategy</li>
            </ul>
          </div>
          <div className="service">
            <h4>Umsetzung</h4>
            <ul>
              <li>Produktion</li>
              <li>Post-Produktion</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    <div className="banner">
      <h2>We tell your story</h2>
        <Col md={6} className="m-auto">
          <p>Wir sind professionell, aber locker und offen.
            <br/>
            Wir arbeiten für noch so kleine Details.
            <br/>
            Wir arbeiten in einem kreativen und kollaborativen Umfeld.
            <br/>
            Wir sind vielfältig.
            <br/>
            Wir lieben, was wir machen.</p>
        </Col>
    </div>
  </section>
)

export default Services