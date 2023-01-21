import React, { useState } from 'react'; 
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { PDFObject } from 'react-pdfobject';
import icon_html from '../../assets/icons/frontend/icon-html.svg';
import icon_css from '../../assets/icons/frontend/icon-css.svg';
import icon_javascript from '../../assets/icons/frontend/icon-javascript.svg';
import icon_bootstrap from '../../assets/icons/frontend/icon-bootstrap.svg';
import icon_handlebars from '../../assets/icons/frontend/icon-handlebars.svg';
import icon_react from '../../assets/icons/frontend/icon-react.svg';
import icon_nodejs from '../../assets/icons/backend/icon-nodejs.svg';
import icon_jest from '../../assets/icons/backend/icon-jest.svg';
import icon_mysql from '../../assets/icons/backend/icon-mysql.svg';
import icon_mongo from '../../assets/icons/backend/icon-mongo.svg';
import icon_heroku from '../../assets/icons/backend/icon-heroku.svg';
import icon_bash from '../../assets/icons/tools/icon-bash.svg';
import icon_github from '../../assets/icons/tools/icon-github-bootstrap.svg';
import icon_npm from '../../assets/icons/tools/icon-npm.svg';
import resume from '../../assets/resume/DavidOliverio2022.pdf';

function Resume() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const skills = {
        frontend: [
          {
            id: "html",
            name: "HTML",
            image: icon_html
          },
          {
            id: "css",
            name: "CSS",
            image: icon_css
          },
          {
            id: "javascript",
            name: "JavaScript",
            image: icon_javascript
          },
          {
            id: "bootstrap",
            name: "Bootstrap",
            image: icon_bootstrap
          },
          {
            id: "handlebars",
            name: "Handlebars",
            image: icon_handlebars
          },
          {
            id: "react",
            name: "React",
            image: icon_react
          }
        ],
        backend: [
          {
            id: "nodejs",
            name: "NodeJS",
            image: icon_nodejs
          },
          {
            id: "jest",
            name: "Jest",
            image: icon_jest
          },
          {
            id: "mysql",
            name: "MySQL",
            image: icon_mysql
          },
          {
            id: "mongodb",
            name: "MongoDB",
            image: icon_mongo
          },
          {
            id: "heroku",
            name: "Heroku",
            image: icon_heroku
          },
        ],
        tools: [
          {
            id: "gitbash",
            name: "Git Bash",
            image: icon_bash
          },
          {
            id: "github",
            name: "GitHub",
            image: icon_github
          },
          {
            id: "npm",
            name: "npm",
            image: icon_npm
          },
        ]
      }
    
    return(
      <>
      
      
          
          <h1 className="resume">RESUME</h1>
          <div className='resume-btn-div'>
            <Button className="resume-btn" onClick={handleShow}>
              Open Resume
            </Button>
          </div>
            <Modal
              show={show}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>Resume</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <PDFObject url={resume}/>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          <div class="resume-intro">
              <Row>
                  <Col lg={8} md={12}>
                      Full Stack Web Developer who possesses technical skills within the MERN stack. <br></br>
                      <br></br>
                      Always continuously learning and trying to do better.
                  </Col>
              </Row>
          </div>

        <div class="resume-container">
            <Row>
                <Col lg={4} md={12}>
                <div className="row">
                <h2 className="resume">FRONT END PROFICIENCIES</h2>
                    <div className='front-end'>
                        {skills.frontend.map( frontend => {
                            return (
                            <React.Fragment key={frontend.id}>
                                <div className="col">
                                    <img className="code-icon" src={frontend.image} alt={frontend.name} />
                                    <label className="skill-name">{frontend.name}</label>
                                </div>
                            </React.Fragment>
                            )
                            })}
                    </div>        
                </div>
                </Col>
        
                <Col lg={4} md={12}>
                    <h2 class="resume">BACK END PROFICIENCIES</h2>
                        <div className="row row-cols-auto back-end">
                            {skills.backend.map( backend => {
                            return (
                                <React.Fragment key={backend.id}>
                                <div className="col">
                                    <img className="code-icon" src={backend.image} alt={backend.name} />
                                    <label className="skill-name">{backend.name}</label>
                                </div>
                                </React.Fragment>
                            )
                            })}
                        </div>
                </Col>
                <Col lg={4} md={12}>
                <h2 className="resume">TOOLS</h2>
                <div className="row row-cols-auto tools">
                    {skills.tools.map( tools => {
                        return (
                            <React.Fragment key={tools.id}>
                            <div className="col">
                                <img className="code-icon" src={tools.image} alt={tools.name} />
                                <label className="skill-name">{tools.name}</label>
                            </div>
                            </React.Fragment>
                        )
                        })}
                </div>
                </Col>
            </Row>
            </div>
        </>
)}
  
export default Resume;
