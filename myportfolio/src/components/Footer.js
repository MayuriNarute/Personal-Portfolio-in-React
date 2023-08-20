import React from "react";

const Footer = () => {
  return (
    <>
      <br />
      <br />
      <footer class="footer_area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="footer_top">
                <div class="footer_logo">
                  <h4 style={{textTransform:'none'}}>Stay Connected!🌐</h4>
                </div>
                <div class="footer_social">
                  <a href="#" className="social-icon">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i class="fa fa-github"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i class="fa fa-youtube"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i class="fa fa-envelope"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i class="fa fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row footer_bottom justify-content-center">
            <p class="col-lg-8 col-sm-12 footer-text">
              This portfolio is made with ❤️ by Mayuri Narute
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
