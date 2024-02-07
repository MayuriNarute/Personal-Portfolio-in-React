import React, { useEffect } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
const Experience = () => {
  useEffect(() => {
    document.title = "Experience | Mayuri Narute";
  }, []);
  const tooltip = (
    <Tooltip id="tooltip">
      Completed Diploma Course in IT from GP, Pune with the aggregate of 91.33%.
    </Tooltip>
  );
  const tooltips = (
    <Tooltip id="tooltip">
      Currently pursuing in Third year of my B.Tech Course in IT at PCCOE, Pune
    </Tooltip>
  );

  const tooltip1 = (
    <Tooltip id="tooltip">
      Completed 1-month Project based Virtual Internship at The Sparks
      Foundation
    </Tooltip>
  );
  const tooltipp = (
    <Tooltip id="tooltip">
      Completed 1-month Project based Virtual Internship at Oasis Infobyte
    </Tooltip>
  );
  const tooltip2 = (
    <Tooltip id="tooltip">
      Completed 1-month Project based Virtual Internship at LetsGrowMore
    </Tooltip>
  );
  const tooltip3 = (
    <Tooltip id="tooltip" style={{ textAlign: "left" }}>
      Completed 6 weeks Java Full Stack based Internship at Linkcode
      Technologies, Pune
    </Tooltip>
  );
  
  const tooltip5 = (
    <Tooltip id="tooltip" style={{ textAlign: "left" }}>
      Completed my SSC from Tukdoji Vidyalaya,Daund with the aggregate of
      89.00%.
    </Tooltip>
  );
  return (
    <>
      <section class="banner_area">
        <section class="features_area section_gap">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <div class="main_title">
                <h3 style={{fontWeight:'600'}}>
                  My Expedition<span class="book">📚</span>
                </h3>
                <p>
                  Charting my journey through learning and growth, one
                  experience at a time.
                </p>
              </div>
            </div>
          </div>
          <div class="container" style={{ paddingTop: 0, marginTop: 0 }}>
            <div class="row feature_inner justify-content-center ">
              <div class="col-lg-5 col-md-6 ">
                <div class="feature_item text-center wow animate__animated animate__fadeInUp animate__delay-0.8s custom-fadeinup">
                  <a class="primary_btn " href="#">
                    <span style={{fontWeight:'600',padding:'0 42px',lineHeight:'45px'}}>
                      <FontAwesomeIcon icon={faClock} />
                      &nbsp;&nbsp;Experience
                    </span>
                  </a>
                  <div class="col-lg-10 col-12">
                    <h4 class="mb-4">
                      <i class="icon icon-history"></i>
                    </h4>

                    <div class="timeline text-left">
                      <div class="timeline-wrapper">
                        <div class="timeline-yr">
                          <span>2022-Jan</span>
                        </div>
                        <div
                          class="timeline-info"
                          style={{ paddingLeft: "10px", paddingTop: "25px" }}>
                          <h5>
                            <span>Web Developer Intern</span>
                            <small
                              style={{
                                fontSize: 12,
                                fontWeight: "bold",
                                marginLeft: "20px",
                              }}>
                              <br />
                              <OverlayTrigger
                                placement="bottom"
                                overlay={tooltipp}>
                                <a href="#">@Oasis Infobyte</a>
                              </OverlayTrigger>
                            </small>
                          </h5>
                          <p>
                            <br />
                          </p>{" "}
                          <br></br>
                        </div>
                      </div>
                      <div class="timeline-wrapper">
                        <div class="timeline-yr">
                          <span>2021-Nov</span>
                        </div>
                        <div
                          class="timeline-info"
                          style={{ paddingLeft: "10px", paddingTop: "25px" }}>
                          <h5>
                            <span>Web Developer Intern</span>
                            <small
                              style={{
                                fontSize: 12,
                                fontWeight: "bold",
                              }}>
                              <OverlayTrigger
                                placement="bottom"
                                overlay={tooltip1}>
                                <a href="#">@The Sparks Foundation</a>
                              </OverlayTrigger>
                            </small>
                          </h5>
                          <p>
                            <br />
                          </p>{" "}
                          <br></br>
                        </div>
                      </div>
                      <div class="timeline-wrapper">
                        <div class="timeline-yr">
                          <span>2021-Aug</span>
                        </div>
                        <div
                          class="timeline-info"
                          style={{ paddingLeft: "10px", paddingTop: "25px" }}>
                          <h5>
                            <span> Web Developer Intern</span>
                            <small
                              style={{
                                fontSize: 12,
                                fontWeight: "bold",

                                marginLeft: "25px",
                              }}>
                              <OverlayTrigger
                                placement="bottom"
                                overlay={tooltip2}>
                                <a href="#">&nbsp;@LetsGrowMore</a>
                              </OverlayTrigger>
                            </small>
                          </h5>
                          <p>
                            <br></br>
                          </p>{" "}
                          <br></br>
                        </div>
                      </div>
                      <div class="timeline-wrapper">
                        <div class="timeline-yr">
                          <span>2021-Aug</span>
                        </div>
                        <div
                          class="timeline-info"
                          style={{ paddingLeft: "10px", paddingTop: "25px" }}>
                          <h5>
                            <span>Java Full Stack Intern</span>
                            <small>
                              <OverlayTrigger
                                placement="bottom"
                                overlay={tooltip3}>
                                <a href="#">@Linkcode Technologies, Pune</a>
                              </OverlayTrigger>
                            </small>
                          </h5>
                          <p>
                            <br></br>
                          </p>
                          <br></br>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="feature_item text-center wow animate__animated animate__fadeInUp animate__delay-0.5s custom-fadeinup">
                  <a class="primary_btn" href="#">
                    <span style={{fontWeight:'600',padding:'0 42px',lineHeight:'45px'}}>
                      <FontAwesomeIcon icon={faGraduationCap} />
                      &nbsp;&nbsp;Education
                    </span>
                  </a>
                  <div class="col-lg-10 col-12">
                    <h4 class="mb-4 mobile-mt-2">
                      <i class="icon icon-graduation-cap"></i>{" "}
                    </h4>

                    <div class="timeline text-left">
                      <div class="timeline-wrapper">
                        <div class="timeline-yr">
                          <span>2022-Present</span>
                        </div>
                        <div
                          class="timeline-info"
                          style={{ paddingLeft: "10px", paddingTop: "25px" }}>
                          <h5>
                            <span>B.Tech (Information Technology)</span>
                            <small
                              style={{
                                fontSize: 12,
                                fontWeight: "bold",
                                content: "",
                                display: "block",
                                marginLeft: "40px",
                                marginTop: "0.5rem",
                              }}>
                              <OverlayTrigger
                                placement="bottom"
                                overlay={tooltips}>
                                <a href="#">@PCCOE, Pune</a>
                              </OverlayTrigger>
                            </small>
                          </h5>
                          <p>
                            <br></br>
                          </p>
                          <br></br>
                        </div>
                      </div>

                      <div class="timeline-wrapper">
                        <div class="timeline-yr">
                          <span>2019-22</span>
                        </div>
                        <div
                          class="timeline-info"
                          style={{ paddingLeft: "10px", paddingTop: "25px" }}>
                          <h5>
                            <span>Diploma (Information Technology)</span>
                            <small
                              style={{
                                fontSize: 12,
                                fontWeight: "bold",
                                content: "",
                                display: "block",
                                marginLeft: "0px",
                                marginTop: "0.5rem",
                              }}>
                              <OverlayTrigger
                                placement="bottom"
                                overlay={tooltip}>
                                <a href="#">@Government Polytechnic, Pune</a>
                              </OverlayTrigger>
                            </small>
                          </h5>
                          <p>
                            <br></br>
                          </p>
                          <br></br>
                        </div>
                      </div>

                      <div class="timeline-wrapper">
                        <div class="timeline-yr">
                          <span>2018-19</span>
                        </div>
                        <div
                          class="timeline-info"
                          style={{ paddingLeft: "10px" }}>
                          <h5>
                            <br></br>
                            <span>Secondary School Education </span>
                            <br />
                            <small
                              style={{
                                fontSize: 12,
                                fontWeight: "bold",
                                content: "",
                                display: "block",
                                marginLeft: "20px",
                                marginTop: "0.5rem",
                              }}>
                              <OverlayTrigger
                                placement="bottom"
                                overlay={tooltip5}>
                                <a href="#">@Tukdoji Vidyalaya, Daund</a>
                              </OverlayTrigger>
                            </small>
                          </h5>
                          <p>
                            <br></br>
                          </p>
                          <br></br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default Experience;
