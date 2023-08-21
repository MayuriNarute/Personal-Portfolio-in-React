import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
  useEffect(()=> {
		document.title = 'Home | Mayuri Narute';
	  },[]);
  return (
    <>
      <section class="home_banner_area">
        <div class="banner_inner">
          <div class="container">
            <div class="row">
            <div class="col-lg-5" id="profile">
              <div
                  class="feature_item text-center"
                  style={{ border: "2px solid #854fee", borderRadius: "50%",paddingBottom:'0px'}}>
                  <img
                    class="photo"
                    src="img/banner/Photo-min.png"
                    alt="My Photo"
                  />
                </div>
                  
              </div>
              <div class="col-lg-7">
                <div class="banner_content" id="hometext" style={{background:'#fff'}}>
                  <br />
                  <h3>Hello<span className="wave-emoji">👋</span>, I am</h3>
                  <h1>Mayuri Narute</h1>
                  <h5>Full Stack Java Developer | Exploring MERN Stack</h5>
                  <div class="d-flex align-items-center">
                    <Link class="primary_btn" style={{textDecoration:'none'}} to="/contact">
                      <span>Hire Me</span>
                    </Link>
                    <a class="primary_btn tr-bg" style={{textDecoration:'none'}}  href="img/banner/Mayuri's resume.pdf" download>
                      <span>Get Resume</span>
                    </a>
                    <br></br>
                    
                  </div>
                  <footer class="footer_area" style={{background:'#fff'}}>

                  <div class="footer_top" style={{background:'#fff'}}>
                
                  <div class="footer_social" style={{textAlign:'left',marginTop:'0px'}}>
                  <a href="#" className="social-icon" style={{textAlign:'center'}}>
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-icon" style={{textAlign:'center'}}>
                    <i class="fa fa-twitter"></i>
                  </a>
                  
                  <a href="#" className="social-icon" style={{textAlign:'center'}}>
                    <i class="fa fa-youtube"></i>
                  </a>
                  <a href="#" className="social-icon" style={{textAlign:'center'}}>
                    <i class="fa fa-envelope"></i>
                  </a>
                  <a href="#" className="social-icon" style={{textAlign:'center'}}>
                    <i class="fa fa-whatsapp"></i>
                  </a>
                </div>
                </div>
                </footer>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
