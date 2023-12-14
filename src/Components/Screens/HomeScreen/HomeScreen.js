import React from "react";
import "./_HomeScreen.scss";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../Video/Video";
import CategoriesBar from "../../CategoriesBar/CategoriesBar";

const HomeScreen = () => {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
