import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import StarRating from "react-bootstrap-star-rating";
import "./Home.css";

const Home = () => {
  return (
    <div className="top">
      <Navbar collapseOnSelect expand="lg" bg="#FF00FF" variant="white">
        <Container>
          <Navbar.Brand>
            <div>CHERR</div>
            <div>LEARN</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="book">Home</Nav.Link>
              <Nav.Link className="book">About</Nav.Link>
              <Nav.Link className="book">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Row>
          <Col sm={6}>
            <div>
              <h2 className="std">
                <h2 className="one">1</h2> to <h2 className="five">5</h2>{" "}
                Standard{" "}
              </h2>
            </div>
            <div>
              <h2 className="act">Activity Based</h2>
            </div>
            <div className="cherry">
              CherryLearn Education interesting activities in English and
              Kannada based{" "}
            </div>
            <div className="cherry">
              on textbooks, technology systems to complement modern education
              grammar t
            </div>
            <div className="cherry">o boost confidence,</div>
            <div className="cherry">Choose Your Medium</div>
            <div>
              <button className="english">English</button>
              <button className="kanada">Kannada</button>
            </div>
          </Col>
          <Col sm={6}></Col>
        </Row>
        <Row className="secondrow">
          <Col sm={3}>
            <div>
              <h6 className="number">30000+</h6>
              <div className="student">Number of Students</div>
            </div>
          </Col>
          <Col sm={3}>
            <div>
              <h6 className="number">25000+</h6>
              <div className="student">Number of Topics</div>
            </div>
          </Col>
          <Col sm={3}>
            <div>
              <h6 className="number">25+</h6>
              <div className="student">No. of Cities Reached</div>
            </div>
          </Col>
          <Col sm={3}>
            <div>
              <h6 className="number">5</h6>
              <div className="student">App Rate</div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col sm={12}>
            <div className="what">What's inside the ?</div>
          </Col>
        </Row>
      </div>
      <Row className="third">
        <Col sm={4}>
          <div className="price">
            Text based activities
            <div className="child">
              Children can learn the text through thousands of interactive
              activities while playing
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="price">
            Interesting scenery
            <div className="child">
              Animated visuals make it easier for children to understand the
              content of the text
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="price">
            Mock tests
            <div className="child">
              Hundreds of text-based mock tests remove test fear in kids
            </div>
          </div>
        </Col>
      </Row>
      <Row className="fourth">
        <Col sm={6}>
          <div>
            <h2 className="encour">
              Encouraging <h2 className="learn">children's</h2>
            </h2>
          </div>
          <div>
            <h2 className="learn2">
              learning <h2 className="potent">potential</h2>
            </h2>
          </div>
          <div></div>
          <div>CherryLearn has thousands of interactive and interesting </div>
          <div>
            activities in English and Kannada based on textbooks, technology{" "}
          </div>
          <div>
            systems to complement modern education, mock tests and useful{" "}
          </div>
          <div>quizzes and grammar to boost confidence</div>
          <div>
            <button className="down">Download</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <div className="An">An interesting</div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <div className="design">design for learning</div>
        </Col>
      </Row>
      <Row className="six">
        <Col sm={6}>
          <div></div>
        </Col>
        <Col sm={6}>
          <div>
            <h1>Support Child Education</h1>
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
          <div>
            Lorem Ipsum has been the industry s standard dummy text ever since
            the{" "}
          </div>
          <div>
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a{" "}
          </div>
          <div>type specimen book. It has survived not only five centuries</div>
          <div>
            <button className="readmore">Read more</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <div className="parent">parent talk's</div>
        </Col>
      </Row>
      <Row className="third">
        <Col sm={4}>
          <div className="price">
            Tulsi(mother)
            <div>Parents</div>
            <div className="child">
              My son had left behibd the lessons he had leared is school
              <div>
                She used to be in defferent to curling up near the bookat{" "}
              </div>
              <div>home Hence Kaita patha was going to die there after</div>
              <div>
                downloading Cherrylearn you can learn the lessin taught at
              </div>
              <div>school by playing the game at</div>
              <span class="fa fa-star "></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="price">
            Tulsi(mother)
            <div>Parents</div>
            <div className="child">
              My son had left behibd the lessons he had leared is school
              <div>
                She used to be in defferent to curling up near the bookat{" "}
              </div>
              <div>home Hence Kaita patha was going to die there after</div>
              <div>
                downloading Cherrylearn you can learn the lessin taught at
              </div>
              <div>school by playing the game at</div>
              <span class="fa fa-star "></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="price">
            Tulsi(mother)
            <div>Parents</div>
            <div className="child">
              My son had left behibd the lessons he had leared is school
              <div>
                She used to be in defferent to curling up near the bookat{" "}
              </div>
              <div>home Hence Kaita patha was going to die there after</div>
              <div>
                downloading Cherrylearn you can learn the lessin taught at
              </div>
              <div>school by playing the game at</div>
              <span class="fa fa-star "></span>
              <span class="fa fa-star"></span>
              {/* <div>  <StarRating
        defaultValue={5}
        min={0}
        max={10}
        step={0.5} /></div> */}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <div></div>
        </Col>
        <Col sm={6}>
          <div className="freq">Frequently Asked Questions</div>
          <div className="cherrys">What is CherryLearn?</div>
          <div className="thousand">
            CherryLearn has thousands of interactive and interesting activities{" "}
          </div>
          <div className="thousand">
            textbooks, technology systems to complement modern education, mock
            tests{" "}
          </div>
          <div className="thousand">grammar to boost confidence</div>
          <div className="howmuch">
            {" "}
            How much does it cost annually to use CherryLearn
          </div>
          <div className="howmuch">
            Do children need their own mobile to use CherryLearn?
          </div>
          <div className="howmuch">
            Can CherryLearn be used on any mobile from the entered number?
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Home;
