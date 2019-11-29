import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">CX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="navbar">
          <Nav className="m-auto main-nav">
            <Navbar.Text><Link to="/" activeClassName="active">Home</Link></Navbar.Text>
            <Navbar.Text><Link to="/projects" activeClassName="active">Projects</Link></Navbar.Text>
            <Navbar.Text><Link to="/services" activeClassName="active">Services</Link></Navbar.Text>
            <Navbar.Text><Link to="/team" activeClassName="active">Team</Link></Navbar.Text>
          </Nav>
          <Nav className="ml-auto">
            <Navbar.Text>
              <a href="mailto:email@email.com?subject=Mail from Our Site">email@email.com</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
