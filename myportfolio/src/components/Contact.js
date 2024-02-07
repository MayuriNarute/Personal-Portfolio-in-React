import React, { useEffect, useState } from "react";
import { useRef } from "react";

import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
   let result2;
    useEffect(()=> {
		document.title = 'Contact | Mayuri Narute';
	  },[]);
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s5ph5jd",
        "template_d5c4wci",
        form.current,
        "MEd16tMecYKwz3GBE"
      )
      .then(
        (result) => {
               
          //result2="Your message has been sent!";
          //return result2;
          setShowAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section class="banner_area">

      
        <section class="features_area section_gap">

          <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <div class="main_title">
                    <h3 style={{fontWeight:'600'}}>Contact Me<span className="handshake">🤝</span></h3>
                    <p>
                    Let's Connect! Reach out for opportunities, discussions, or just to say hello.
                    </p>
                  </div>
                </div>
              </div>
     
       
    
    <div class="container-fluid">
   
      <div class="row justify-content-center">
     

        <div class="col-md-6">
          <form class="mb-5" style={{fontWeight:'600'}} ref={form}
                onSubmit={sendEmail} id="contactForm" name="contactForm">
            <div class="row">
              
              <div class="col-md-12 form-group">
              {showAlert && (
            <div class="alert alert-success" role="alert">
               Your message has been successfully sent!              
            </div>
            )}
                <label for="name" class="col-form-label">👤 Name</label>
                <input style={{boxShadow:'0px 15px 30px rgba(77, 87, 222, 0.3)',height:'50px'}}type="text" class="form-control" name="from_name" id="name" required/>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group">
                <label for="email" class="col-form-label">📩 Email</label>
                <input style={{boxShadow:'0px 15px 30px rgba(77, 87, 222, 0.3)',height:'50px'}}type="text" class="form-control" name="email_id" id="email" required/>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group">
                <label for="email" class="col-form-label">📝 Subject</label>
                <input style={{boxShadow:'0px 15px 30px rgba(77, 87, 222, 0.3)',height:'50px'}}type="text" class="form-control" name="subject" id="subject" required/>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 form-group">
                <label for="message" class="col-form-label">🚀 Message</label>
                <textarea style={{boxShadow:'0px 15px 30px rgba(77, 87, 222, 0.3)'}}class="form-control" name="message" id="message" cols="30" rows="7" required></textarea>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-md-12">
              <button type="submit" value="submit" class="primary_btn">
                    <span style={{fontWeight:'600',padding:'0 42px',lineHeight:'45px'}}>Drop a Message</span>
                  </button>
                <span class="submitting"></span>
              </div>
            </div>
          </form>
        </div>

      
      
  </div>
    </div>
      </section>
      </section>
    </>
  );
};
export default Contact;
