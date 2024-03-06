import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div>
        </div>
        
      </div>
      <Button variant="primary" className="cardbtn" href={githubUrl} target="_blank">View on GitHub</Button>
    </Col>
  );
};

