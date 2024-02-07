import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";

import { faAngleLeft, faAngleRight,faRibbon,faAngleDown,faAngleUp} from "@fortawesome/free-solid-svg-icons";
//import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse } from "react-bootstrap";
const courses = [
  "img/portfolio/html1.png",
  "img/portfolio/aws1.png",
  "img/portfolio/jsp1.png",
  "img/portfolio/accenture1.png",
  "img/portfolio/SQL_certificate.jpg",
  "img/portfolio/C++_certificate.jpg",
  "img/portfolio/Web-Design_certificate.jpg",
  "img/portfolio/tcs.png",

];
const Internships = [
  "img/portfolio/linkcode1.png",
  "img/portfolio/letsgrowmore.png",
  "img/portfolio/completion.png",
  "img/portfolio/oasis.png",
  "img/portfolio/twowaits.png",
];
const Participation = [
  "img/portfolio/gpp.png",
  "img/portfolio/bluebit.png",
  "img/portfolio/spoken.png",
  "img/portfolio/fraz.png",
];
const Certificates = () => {
  const [isCourseVisible, setIsCourseVisible] = useState(false);
  const [isInternVisible, setIsInternVisible] = useState(false);
  const [isPartVisible, setIsPartVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndexs, setCurrentImageIndexs] = useState(0);
  const [currentImageIndexp, setCurrentImageIndexp] = useState(0);

 const toggleCourses=()=>{
  setIsCourseVisible(!isCourseVisible);

 }
 const toggleInternships=()=>{
  setIsInternVisible(!isInternVisible);
 }
 const toggleParticipation=()=>{
  setIsPartVisible(!isPartVisible);
 }
 const goToPrevImage = () => {
  setCurrentImageIndex((prevIndex) =>
    prevIndex === 0 ? courses.length - 1 : prevIndex - 1
  );
};
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };
  const goToPrevImage1 = () => {
    setCurrentImageIndexs((prevIndex) =>
      prevIndex === 0 ? Internships.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage1 = () => {
    setCurrentImageIndexs((prevIndex) =>
      prevIndex === Internships.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage2 = () => {
    setCurrentImageIndexp((prevIndex) =>
      prevIndex === 0 ? Participation.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage2 = () => {
    setCurrentImageIndexp((prevIndex) =>
      prevIndex === Participation.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    document.title = "Certificates | Mayuri Narute";
  }, []);
  return (
    <>
      <section class="features_area section_gap">
        <div class="container">
          <div class="row justify-content-center ">
            <div class="col-lg-8 text-center">
              <div class="main_title">
                <h3 style={{fontWeight:'600'}}>
                  My Certificates<span className="ribbon">🎗️</span>
                </h3>
                <p>
                Explore my certifications and qualifications, commitment to <br/>continuous
                 learning and expertise in various domains.
                </p>
              </div>
            </div>
          </div>
          <h4 class="mb-4 justify-content-center">
            <li className="list-item">
              <span>
              <FontAwesomeIcon icon={faRibbon} size="lg"></FontAwesomeIcon>
                &nbsp;Course Certificates
              </span>
              <span class="span2" onClick={toggleCourses}>
                View &nbsp;
                {isCourseVisible ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
              </span>
            </li>
          </h4>
          <Collapse in={isCourseVisible} className="drop">

          <section class="features_area" style={{paddingBottom:'5px'}}>
            <div class="row feature_inner justify-content-center">
              <div class="col-lg-4 col-mb-2">
                <div
                  class="feature_item courseimg"
                  style={{ textAlign:'center',border: "2px solid #854fee", borderRadius: "20px" }}>
                  
                  <img
                    src={courses[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    style={{ width: "320px", height: "290px" }}
                  />
                  <br/>
                  <FontAwesomeIcon icon={faAngleLeft} size="lg" onClick={goToPrevImage} />
                  &nbsp;&nbsp;                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={faAngleRight} size="lg"
                    onClick={goToNextImage}
                  />
                </div>
              </div>
            </div>
          </section>
          </Collapse>
          <h4 class="mb-4 justify-content-center">
            <li className="list-item">
              <span>
              <FontAwesomeIcon icon={faRibbon} size="lg"></FontAwesomeIcon>
                &nbsp;Internship Certificates
              </span>
              <span class="span3" onClick={toggleInternships}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View &nbsp;
                {isInternVisible ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
              </span>
            </li>
          </h4>
          <Collapse in={isInternVisible} className="drop">

          <section class="features_area">
            <div class="row feature_inner justify-content-center">
              <div class="col-lg-6 col-mb-2">
                <div
                  class="feature_item text-center"
                  style={{ textAlign:'center', border: "2px solid #854fee", borderRadius: "20px" ,height:'580px' }}>
                 
                  <img
                    src={Internships[currentImageIndexs]}
                    alt={`Image ${currentImageIndexs + 1}`}
                    style={{ width: "320px" }}
                  />
                  <br/>
                  <FontAwesomeIcon icon={faAngleLeft} size="lg" onClick={goToPrevImage1} />
                  &nbsp;&nbsp;                  &nbsp;&nbsp;

                  <FontAwesomeIcon
                    icon={faAngleRight} size="lg"
                    onClick={goToNextImage1}
                  />
                </div>
              </div>
            </div>
          </section>
          </Collapse>
          <h4 class="mb-4 justify-content-center">
            <li className="list-item">
              <span>
              <FontAwesomeIcon icon={faRibbon} size="lg"></FontAwesomeIcon>
                &nbsp;Participation Certificates
              </span>
              <span class="span3" onClick={toggleParticipation}>
              &nbsp;View &nbsp;
                {isPartVisible ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
              </span>
            </li>
          </h4>
          <Collapse in={isPartVisible} className="drop">

          <section class="features_area">
            <div class="row feature_inner justify-content-center">
              <div class="col-lg-4 col-mb-2">
                <div
                  class="feature_item text-center"
                  style={{ textAlign:'center', border: "2px solid #854fee", borderRadius: "20px"}}>
                 
                  <img
                    src={Participation[currentImageIndexp]}
                    alt={`Image ${currentImageIndexp + 1}`}
                    style={{ width: "320px",height:'260px' }}
                  />
                  <br/>
                  <FontAwesomeIcon icon={faAngleLeft} size="lg" onClick={goToPrevImage2} />
                  &nbsp;&nbsp;                  &nbsp;&nbsp;

                  <FontAwesomeIcon
                    icon={faAngleRight} size="lg"
                    onClick={goToNextImage2}
                  />
                </div>
              </div>
            </div>
          </section>
          </Collapse>
        </div>
      </section>
    </>
  );
};

export default Certificates;
