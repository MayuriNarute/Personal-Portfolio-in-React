import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faLaptopCode,
  faDatabase,
  faGears,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
 

  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isSkillsVisible2, setIsSkillsVisible2] = useState(false);
  const [isSkillsVisible3, setIsSkillsVisible3] = useState(false);
  const [isSkillsVisible4, setIsSkillsVisible4] = useState(false);

  const toggleFrontendSkills = () => {
    setIsSkillsVisible(!isSkillsVisible);
  };
  const toggleBasicSkills = () => {
    setIsSkillsVisible2(!isSkillsVisible2);
  };
  const toggleDatabaseSkills = () => {
    setIsSkillsVisible3(!isSkillsVisible3);
  };
  const toggleToolsSkills = () => {
    setIsSkillsVisible4(!isSkillsVisible4);
  };
  useEffect(() => {
    document.title = "About | Mayuri Narute";
  }, []);
  return (
    <>
      <section class="about_area ">

        <section class="features_area">
        <div class="container">

      <div class="row justify-content-center">
            <div class="col-lg-8 text-center wow animate__animated animate__fadeInUp animate__delay-0s custom-fadeinup">
              <div class="main_title">
              <h3>About me<span class="sparkles">✨</span></h3>
              </div>
            </div>
            <div class="col-lg-6 text-center wow animate__animated animate__fadeInUp animate__delay-0s custom-fadeinup" style={{paddingTop:'80px'}}>
            <div
                  class="feature_item justify-content-center " id="aboutimg" 
                  style={{ border: "2px solid #854fee", borderRadius: "50%"}}>
                  <img
                    class="photo"
                    src="img/banner/Photo.png"
                    alt="My Photo"
                  />
                </div>
            </div>

            <div class="col-lg-5" id="abouttext" >
              <div class="text-left" >
                <p class="about wow animate__animated animate__fadeInUp animate__delay-0.5s custom-fadeinup">
                📌Hey, I'm Mayuri Narute. Professionally, a Full Stack Java
                  Developer, learning and working in IT field since 2019, when I
                  started my Diploma in Information Technology.
                </p>
                <p class="about wow animate__animated animate__fadeInUp animate__delay-0.5s custom-fadeinup">
                📌Currently I'm pursuing my Bachelor's Degree in Information
                  Technology from Pimpri Chinchwad College of Engineering, Pune.
                 & Exploring the MERN Stack and working hard to sharpen my Problem-solving skills.
                </p>
                <p class="about wow animate__animated animate__fadeInUp animate__delay-0.5s custom-fadeinup">
                📌I spend most of my programming
                  time at Leetcode and GeeksForGeeks and sometimes on
                  HackerRank.  <br></br></p>
                <p class="about wow animate__animated animate__fadeInUp animate__delay-0.5s custom-fadeinup">
                  📌I'm open to part-time
                  internships & freelancing projects. So, let's join hands and build something extraordinary together!
                </p>
                <a class="primary_btn" style={{textDecoration:'none'}}  href="#">
                  <span>Download CV/Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="features_area section_gap_bottom" style={{paddingTop:'0px'}}>
        <div class="container">
          <div class="row justify-content-center ">
            <div class="col-lg-8 text-center wow animate__animated animate__fadeInUp animate__delay-0s custom2">
              <div class="main_title" >
                <h3>My Skills<span class="biceps">💪</span> </h3>
                <p>
                  From frontend elegance to backend robustness, my coding skills
                  bring ideas to life. <br />
                  Proficient in creating responsive web apps & optimizing user
                  experiences through efficient code.
                </p>
              </div>
            </div>
          </div>
          <div class="row feature_inner" style={{paddingTop:'60px'}}>
            <div class="col-lg-3 col-md-6">
              <div class="feature_item" style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faComputer} size="4x" color="#854fee" />
                <br />
                <br />
                <h5 onClick={toggleBasicSkills}>
                  Basic Programming{" "}
                  <FontAwesomeIcon
                    onClick={toggleBasicSkills}
                    icon={faAngleDown}
                    color="#854fee"
                  />
                </h5>
                {isSkillsVisible2 && (
                  <div className="skills-images2">
                    <img
                      src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
                      alt="C"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
                      alt="C++"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)"
                      alt="Java"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
                      alt="Python"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
                      alt="php"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/android-%2320232a.svg?style=for-the-badge&logo=android&logoColor=%a4c639"
                      alt="android"
                    />
                  </div>
                )}
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="feature_item" style={{ textAlign: "center" }}>
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  size="4x"
                  color="#854fee"
                />
                <br />
                <br />
                <h5 onClick={toggleFrontendSkills}>
                  Frontend Technologies{" "}
                  <FontAwesomeIcon
                    onClick={toggleFrontendSkills}
                    icon={faAngleDown}
                    color="#854fee"
                  />
                </h5>

                {isSkillsVisible && (
                  <div className="skills-images">
                    <img
                      src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                      alt="HTML5"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                      alt="CSS3"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                      alt="javascript"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"
                      alt="jquery"
                    />
                  </div>
                )}
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="feature_item" style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faDatabase} size="4x" color="#854fee" />
                <br />
                <br />
                <h5 onClick={toggleDatabaseSkills}>
                  Backend Technologies{" "}
                  <FontAwesomeIcon
                    onClick={toggleDatabaseSkills}
                    icon={faAngleDown}
                    color="#854fee"
                  />
                </h5>
                {isSkillsVisible3 && (
                  <div className="skills-images">
                    <img
                      src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"
                      alt="oracle"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
                      alt="MySQL"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"
                      alt="sqlite"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/Servlet-%23FFA500.svg?style=for-the-badge&logo=Servlet&logoColor=white"
                      alt="servlet"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white"
                      alt="apache"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                      alt="NodeJS"
                    />
                  </div>
                )}
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="feature_item" style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faGears} size="4x" color="#854fee" />
                <br />
                <br />
                <h5 onClick={toggleToolsSkills}>
                  Tools & frameworks{" "}
                  <FontAwesomeIcon
                    onClick={toggleToolsSkills}
                    icon={faAngleDown}
                    color="#854fee"
                  />
                </h5>
                {isSkillsVisible4 && (
                  <div className="skills-images">
                    <img
                      src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
                      alt="django"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white"
                      alt="react"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
                      alt="bootstrap"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/JSP-%23FFA500.svg?style=for-the-badge&logo=jsp&logoColor=white"
                      alt="jsp"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
                      alt="figma"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white"
                      alt="canva"
                    />
                    &nbsp;
                    <img
                      src="https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white"
                      alt="arduino"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        </section>
        
        </section>
    </>
  );
};
export default About;
