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
                  <a href="https://www.linkedin.com/in/mayuri-narute-556995216/" className="social-icon">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/mayuri_n28" className="social-icon">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/mayuu_0928" className="social-icon">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="https://github.com/MayuriNarute/" className="social-icon">
                    <i class="fa fa-github"></i>
                  </a>
                  <a href="https://www.youtube.com/@mayuricodehub/featured" className="social-icon">
                    <i class="fa fa-youtube"></i>
                  </a>
                  
                  <a href="https://wa.me/7558232254" className="social-icon">
                    <i class="fa fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row footer_bottom justify-content-center">
            <p class="col-lg-8 col-sm-12 footer-text">
             Made with ❤️ by Mayuri Narute
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
