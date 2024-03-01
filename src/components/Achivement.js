import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import 'animate.css';
import './Achivement.css';


export const Achivement = () => {

  const achivement = [];

  return (
    <section className="Achivement" id="Achivements">
        <h1>Achivement</h1>
      <div className="Achi_container">
        
        <ul id="Acards">
          <li className="Acard" id="Acard1">
            <div className="Acard-body">
              <p className="Atopic"> 🏆HaXtreme 2.0: <br></br>A Coding Battle <br></br>for the Ages! 🚀 <br></br>October 25th, 2023,<br></br> will forever be etched in the<br></br> annals of competitive<br></br> programming history. 
              <br></br>🏆 4th place 💻
              
              </p>
              <img className="Aimg" src={require('../assets/img/haxtream.jpg')} alt="logo" />
            </div>
          </li>
          <li className="Acard" id="Acard2">
            <div className="Acard-body">
            <p className="Atopic1"> 📢 INSL 2023 🚀<br></br>
              IEEE INSL is a platform to <br></br>promote entrepreneurship and indigenous start-ups <br></br>in Sri Lanka.
              This is a <br></br>Pitch Competition of <br></br>industry-level business ideas.<br></br>
              🔔 Representing the <br></br>Southern Province 🔔
              </p>
              <img className="Aimg1" src={require('../assets/img/insl.jpeg')} alt="logo" />
            </div>
          </li>
          {/* <li className="Acard" id="Acard3">
            <div className="Acard-body">
              <h2>Card 3</h2>
            </div>
          </li>
          <li className="Acard" id="Acard4">
            <div className="Acard-body">
              <h2>Card 4</h2>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
  
}
