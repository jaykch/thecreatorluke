import React from "react"
import "./members.scss"
import { Container, Row, Col } from "react-bootstrap"
import { AiFillLinkedin, AiOutlinePlayCircle } from "react-icons/ai"

const Members = () => (
  <section id="members">
    <Container>
      <div className="title">
        <h2>Unser Team</h2>
        <span>Wer wir sind</span>
      </div>
      <Row>
        <Col md={{ span: 4, offset: 2 }} className="member">
          <div className="image-container">
            <AiOutlinePlayCircle/>
          </div>
          <h3>Member1</h3>
          <span>- function x -</span>
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
        <Col md={4} className="member">
          <div className="image-container">
            <AiOutlinePlayCircle/>
          </div>
          <h3>Member2</h3>
          <span>- function y -</span>
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="member">
          <div className="image-container">
            <AiOutlinePlayCircle/>
          </div>
          <h3>Member3</h3>
          <span>- function z -</span>
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
        <Col md={4} className="member">
          <div className="image-container">
            <AiOutlinePlayCircle/>
          </div>
          <h3>Member4</h3>
          <span>- function x -</span>
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
        <Col md={4} className="member">
          <div className="image-container">
            <AiOutlinePlayCircle/>
          </div>
          <h3>Member5</h3>
          <span>- function y -</span>
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Members