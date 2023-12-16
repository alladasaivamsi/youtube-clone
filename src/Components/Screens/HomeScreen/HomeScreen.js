import React, { useEffect } from "react";
import "./_HomeScreen.scss";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../Video/Video";
import CategoriesBar from "../../CategoriesBar/CategoriesBar";
import { useDispatch, useSelector } from "react-redux";
import { getPouplarVideos } from "../../../Redux/Actions/videoAction";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPouplarVideos());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.homeVideos);
  console.log(videos);
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4} key={video.id}>
            <Video video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
