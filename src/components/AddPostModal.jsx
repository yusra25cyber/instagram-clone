import { useContext, useState } from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { ProfileContext } from "../App.jsx";

import { ModalHeader } from "react-bootstrap";

export default function AddPosrModal({ show, handleClose }) {
  const { image, name } = useContext(ProfileContext);

  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [invalidUrl, setInvalidUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUrl) {
      setImageUrl("");
      setDescription("");
      handleClose();
    } else {
      setInvalidUrl(true);
    }
  };

  const handleImageError = () => {
    setInvalidUrl(true);
  };

  return (
    <Modal show={show} onHide={handleClose} size="ig">
      <ModalHeader>
        <Modal.Title> Create new post </Modal.Title>
      </ModalHeader>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col sm={7} style={{ margin: " 0px" }}>
              <Image
                src={image ? imageUrl : "http://sig1.co/img-placeholder-1"}
                alt="uploaded content"
                style={{ width: "100" }}
              />
            </Col>

            <Col sm={5}>
              <Image
                src={image}
                alt="uploader"
                style={{ width: "32px" }}
                roundedCircle
              />
              <span className="ms-3">{name}</span>
              <Form.Control
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="my-3"
                placeholder="Add image url"
              />
              {invalidUrl && (
                <div className="text-danger">
                  InvalidUrl or failed to load image
                </div>
              )}
              <Form.Control
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="my-3"
                as="textarea"
                rows={3}
                placehplder="write a caption..."
              />
              <Button type="submit" style={{ width: "100" }}>
                Share
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
