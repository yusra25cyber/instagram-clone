import { useSelector } from "react-redux";
import { Row, Col, Image, Button } from "react-bootstrap";
import { ProfileContext } from "../App";
import { useState } from "react";
import updatePostModal from "./UpdatePostModal";

export default function ImageGrid() {
  const posts = useSelector((state) => state.posts);
  const [show, setShow] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const handleClose = () => {
    setCurrentPost(null);
    setShow(false);
  };
  const handleShow = (post) => {
    setCurrentPost(post);
    setShow(true);
  };
  const renderImages = () => {
    return posts.map((posts) => (
      <Col md={4} key={posts.id} className="mb-4">
        <Image src={posts.image} fluid />
        <Button onClick={() => handleShow(post)} variant="online-primery">
          <i className="bi bi-pencil-square"></i>
        </Button>

        <Button variant="outline-danger">
          <i className="bi bi-trash"></i>
        </Button>
      </Col>
    ));
  };
  return <Row>{renderImages()}</Row>;
}
