import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "bootstrap/dist/css/bootstrap.css";
import { Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
const Badges = () => {
  useEffect(() => {
    document.title = "CP Milestones | Mayuri Narute";
  }, []);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isSkillsVisible2, setIsSkillsVisible2] = useState(false);
  const [isSkillsVisible3, setIsSkillsVisible3] = useState(false);
  const [isSkillsVisible4, setIsSkillsVisible4] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleHackerrankB = () => {
    setIsSkillsVisible(!isSkillsVisible);
  };
  const toggleHackerrankS = () => {
    setIsSkillsVisible2(!isSkillsVisible2);
  };
  const toggleLeetcode = () => {
    setIsSkillsVisible3(!isSkillsVisible3);
  };
  const toggleCodechef = () => {
    setIsSkillsVisible4(!isSkillsVisible4);
  };
  return (
    <>
      <section class="features_area section_gap  justify-content-center">
        <div class="container ">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="main_title ">
                <h3 style={{fontWeight:'600'}} className="text-center">
                  My CP Milestones<span class="badges">🏅</span>
                </h3>
                <p>
                  Conquering challenges, one milestone at a time. Journey
                  through my competitive programming <br />
                  achievements and see how I code my way to success.
                  <br />
                  
                </p><p>Find my Coding Profiles here:</p><br/>
                <div class="footer_logo">
                  <div class="footer_social text-center">
                    <a
                      href="https://www.codechef.com/users/mnarute"
                      className="social-icon "
                      style={{ color: "black" }}>
                      <Icon icon="simple-icons:codechef" width="25" />
                    </a>
                    <a
                      href="https://leetcode.com/Mayuri_60/"
                      className="social-icon"
                      style={{ color: "black" }}>
                      <Icon icon="simple-icons:leetcode" width="25" />
                    </a>
                    <a
                      href="https://github.com/MayuriNarute/"
                      className="social-icon"
                      style={{ color: "black" }}>
                      <Icon icon="mdi:github" width="25" />
                    </a>
                    <a
                      href="https://www.hackerrank.com/mayurinarute2003"
                      className="social-icon"
                      style={{ color: "black" }}>
                      <Icon icon="fa-brands:hackerrank" width="25" />
                    </a>
                    <a
                      href="https://auth.geeksforgeeks.org/user/mayurinarute2003"
                      className="social-icon"
                      style={{ color: "black" }}>
                      <Icon icon="simple-icons:geeksforgeeks" width="25" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
              <h4 class="mb-4">
                <li className="list-item">
                  <span>
                    <Icon icon="fa-brands:hackerrank" width="25" />
                    &nbsp;HackerRank Badges
                  </span>
                  <span class="span2" onClick={toggleHackerrankB}>
                View{" "}
                    {isSkillsVisible ? (
                      <FontAwesomeIcon icon={faAngleUp} />
                    ) : (
                      <FontAwesomeIcon icon={faAngleDown} />
                    )}
                  </span>
                </li>
              </h4>

              <Collapse in={isSkillsVisible}>
                <section class="features_area">
                  <div
                    class="row feature_inner"
                    style={{ textAlign: "center" }}>
                    <div class="col-lg-3 col-md-6">
                      <div
                        class="feature_item"
                        style={{
                          border: "2px solid #854fee",
                          borderRadius: "25px",
                        }}>
                        <img
                          src="img/badges/sql.jpg"
                          style={{ width: "250px", height: "140px" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div
                        class="feature_item"
                        style={{
                          border: "2px solid #854fee",
                          borderRadius: "25px",
                        }}>
                        <img
                          src="img/badges/30daysofCode.jpg"
                          style={{ width: "250px", height: "140px" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div
                        class="feature_item"
                        style={{
                          border: "2px solid #854fee",
                          borderRadius: "25px",
                        }}>
                        <img
                          src="img/badges/problem solving.jpg"
                          style={{ width: "250px", height: "140px" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div
                        class="feature_item"
                        style={{
                          border: "2px solid #854fee",
                          borderRadius: "25px",
                        }}>
                        <img
                          src="img/badges/java hackerrank badge.jpg"
                          style={{ width: "250px", height: "140px" }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </Collapse>
                        
              <h4 class="mb-4  ">
                <li class="list-item" >
                  <span>
                    <Icon icon="fa-brands:hackerrank" width="25" />
                    &nbsp;HackerRank Verified Skills
                  </span>
                  <span class="span3" onClick={toggleHackerrankS}>
                  View{" "}
                    {isSkillsVisible2 ? (
                      <FontAwesomeIcon icon={faAngleUp} />
                    ) : (
                      <FontAwesomeIcon icon={faAngleDown} />
                    )}
                  </span>
                </li>
              </h4>
              <Collapse in={isSkillsVisible2} className="drop">
                <section class="features_area">
                  <div
                    class="row feature_inner"
                    style={{ alignItems: "center" }}>
                    <div class="col-lg-3 col-md-6">
                      <div class="feature_item" style={{ textAlign: "center" }}>
                        <img
                          src="img/badges/sql1.png"
                          style={{ width: "100px", height: "150px" }}
                          alt=""
                        />
                        <h5>SQL (Basic)</h5>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="feature_item" style={{ textAlign: "center" }}>
                        <img
                          src="img/badges/sql2.png"
                          style={{ width: "100px", height: "150px" }}
                          alt=""
                        />
                        <h5>SQL (Intermediate)</h5>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="feature_item" style={{ textAlign: "center" }}>
                        <img
                          src="img/badges/sql3.png"
                          style={{ width: "100px", height: "150px" }}
                          alt=""
                        />
                        <h5>SQL (Advanced)</h5>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="feature_item" style={{ textAlign: "center" }}>
                        <img
                          src="img/badges/ps1.png"
                          style={{ width: "100px", height: "150px" }}
                          alt=""
                        />
                        <h5></h5>
                      </div>
                    </div>

                    <h4 style={{ textAlign: "center" }}>
                      Wanna view more skills ?{" "}
                      <a style={{ textAlign: "center" }} href="">
                        Follow me on HackerRank
                      </a>
                    </h4>
                  </div>
                </section>
              </Collapse>

              <h4 class="mb-4">
                <li class="list-item">
                  <span>
                    <Icon icon="simple-icons:leetcode" width="25" />
                    &nbsp;Leetcode Badges
                  </span>
                  <span class="span4" onClick={toggleLeetcode}>
                  &nbsp;View{" "}
                    {isSkillsVisible3 ? (
                      <FontAwesomeIcon icon={faAngleUp} />
                    ) : (
                      <FontAwesomeIcon icon={faAngleDown} />
                    )}
                  </span>
                </li>
              </h4>
              <Collapse in={isSkillsVisible3} className="drop">
                <section class="features_area">
                  <div class="row feature_inner justify-content-center">
                    <div class="col-lg-3 col-md-6">
                      <div
                        class="feature_item"
                        style={{
                          textAlign: "center",
                          border: "2px solid #854fee",
                          borderRadius: "25px",
                        }}>
                        <img
                          src="img/badges/leetcode badge1.png"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                        <h5>March 2523 Leetcoding Challenge</h5>
                      </div>
                    </div>
                  </div>
                </section>
              </Collapse>
              <h4 class="mb-4">
                <li class="list-item">
                  <span>
                    <Icon icon="simple-icons:codechef" width="25" />
                    &nbsp;Codechef Badges
                  </span>
                  <span class="span4" onClick={toggleCodechef}>
                    View{" "}
                    {isSkillsVisible4 ? (
                      <FontAwesomeIcon icon={faAngleUp} />
                    ) : (
                      <FontAwesomeIcon icon={faAngleDown} />
                    )}
                  </span>
                </li>
              </h4>
              <Collapse in={isSkillsVisible4} className="drop">
                <section class="features_area">
                  <div class="row feature_inner justify-content-center">
                    <div class="col-lg-3 col-md-6 ">
                      <div
                        class="feature_item text-center"
                        style={{
                          border: "2px solid #854fee",
                          borderRadius: "25px",
                        }}>
                        <img
                          src="img/badges/bronze 1v1.svg"
                          style={{ width: "250px", height: "100px" }}
                          alt=""
                        />
                        <h5>1v1 Challenge - Bronze Badge</h5>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div
                        class="feature_item text-center"
                        style={{
                          border: "2px solid #854fee",
                          borderRadius: "25px",
                        }}>
                        <img
                          src="img/badges/bronze code.svg"
                          style={{ width: "250px", height: "100px" }}
                          alt=""
                        />
                        <h5>Code Enthusiast - Bronze Badge</h5>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div
                        class="feature_item text-center"
                        style={{
                          border: "2px solid #854fee",
                          borderRadius: "25px",
                        }}>
                        <img
                          src="img/badges/bronze contest.svg"
                          style={{ width: "250px", height: "100px" }}
                          alt=""
                        />
                        <h5>Contest Contender - Bronze Badge</h5>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div
                        class="feature_item text-center"
                        style={{
                          border: "2px solid #854fee",
                          borderRadius: "25px",
                        }}>
                        <img
                          src="img/badges/gold ps.svg"
                          style={{ width: "250px", height: "100px" }}
                          alt=""
                        />
                        <h5>Problem Solver - Gold Badge</h5>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div
                        class="feature_item text-center"
                        style={{
                          border: "2px solid #854fee",
                          borderRadius: "25px",
                        }}>
                        <img
                          src="img/badges/silver daily.svg"
                          style={{ width: "250px", height: "100px" }}
                          alt=""
                        />
                        <h5>Daily Streak - Silver Badge</h5>
                      </div>
                    </div>
                  </div>
                </section>
              </Collapse>
            </div>
          </div>
          
      </section>
    </>
  );
};
export default Badges;
