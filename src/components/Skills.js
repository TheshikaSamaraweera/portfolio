import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp2 from '../assets/img/color-sharp2.png';
import './Carousel.css';
import './Skills.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Card = ({ id, title, description, checked }) => (
  <label htmlFor={id} className="card">
    <div className="row">
      <div className="icon">{id}</div>
      <div className="description">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  </label>
);

export const Skills = () => {

  return (
    <section className="Skill" id="Skills">
      <Container>
        <Row>
          <h2>Skills</h2>
          <p>this is the description of my skills</p>
        </Row>

        <Row>
        <Col>
            <div className="wrapper">
              <div className="skillcontainer">
                <input type="radio" name="slide" id="c1" defaultChecked />
                <Card id="c1" />
                <input type="radio" name="slide" id="c2" />
                <Card id="c2"  />
                <input type="radio" name="slide" id="c3" />
                <Card id="c3"  />
                <input type="radio" name="slide" id="c4" />
                <Card id="c4"  />
                <input type="radio" name="slide" id="c5" />
                <Card id="c5"  />
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="Skillc">
              
              <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounceIn" : ""}>
                   <img src={require('../assets/img/skill2.png')} alt="logo" />
                </div>}
            </TrackVisibility>
              
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};
