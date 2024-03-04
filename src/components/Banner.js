import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "computer engineering", "Undergraduate", "Fast Learner" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Theshika,`} <br></br><span className="txt-rotate" dataPeriod="10000" data-rotate='[ "A computer engineering" ,"undergraduate", "Fast Learner" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a Computer Engineering Undergraduate at the Faculty of Engineering University of Ruhuna.
                    I'm familiar with , <br/> <ul>
                        <li>Fullstack Web Development</li>
                        <li>UX/UI Design</li>
                        <li>Mobile App Development</li>
                        <li>Machine learning & AI</li>
                        <li>DevOps Engineering</li>
                        <li>Database Management</li>
                        <li>OOP Design Patterns</li>
                        <li>Data Structures and Algorithms</li>
                      </ul>

                      I am an innovative person with quick learning abilities. 
                      And also I am a good time Manager, hardworking, self motivated, 
                      open minded and positive attitude to to challenge and opportunities. </p>
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                   <img src={require('../assets/img/my.png')} alt="logo" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
