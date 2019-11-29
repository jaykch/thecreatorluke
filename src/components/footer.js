import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "gatsby"
import "./footer.scss"

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col md={6}>
          <h3>Company Name</h3>
          <ul>
            <li>Company Description</li>
            <li>email email</li>
            <li>Linkedin</li>
          </ul>
        </Col>
        <Col md={3}>
          <h3>Sitemap</h3>
          <ul>
            <li><Link to="/" activeClassName="active">About</Link></li>
            <li><Link to="/projects" activeClassName="active">Projects</Link></li>
            <li><Link to="/services" activeClassName="active">Services</Link></li>
            <li><Link to="/" activeClassName="active">Contact</Link></li>
          </ul>
        </Col>
        <Col md={3}>
          <h3>Rechtliches</h3>
          <ul>
            <li>Impressum</li>
            <li>Datenschutz</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer