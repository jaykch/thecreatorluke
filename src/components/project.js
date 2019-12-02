import React from "react"
import "./project.scss"
import { Col, Modal } from "react-bootstrap"
import { IoMdClose } from "react-icons/io"


const Project = ({ data }) => {
  const [show, setShow] = React.useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const style = {
    backgroundImage: "url(" + data.photo.file.url + ")",
  }

  return (
    <Col lg={4} className="project">
      <div className="project-wrapper" onClick={handleShow} style={style}>
        <div className="details">
          <h3>{data.title}</h3>
          <p><span>{data.category}</span> - <span>{data.type}</span></p>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
          <IoMdClose onClick={handleClose} className="modal-close"/>
        <Modal.Header>
          <Modal.Title>
            <h3>{data.title}</h3>
            <p><span>{data.category}</span> - <span>{data.type}</span></p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="560" height="315" src={data.video} frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen title={data.title}/>
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default Project