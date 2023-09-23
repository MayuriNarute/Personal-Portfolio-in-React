import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

const Projects = ({ image, name, description,link,yt,git,techstack,techstack2,techstack3,techstack4}) => {
	 useEffect(()=> {
		document.title = 'Projects | Mayuri Narute';
	  },[]);
  return (
    <>
      <div class="col-lg-4 col-md-6">
        <div class="portfolio_box ">
          <div class="single_portfolio wow animate__animated animate__fadeInUp animate__delay-0.5s custom-fadeinup">
            <img class="img-fluid w-80 " src={image} alt="" />
            <div class="overlay"></div>
            
              <div class="icon">
                <span><a href={git}><Icon icon="mdi:github" width="30" /></a></span>
                <span><a href={link}><Icon icon="ph:link-bold" width="30" /></a></span>
                <span><a href={yt}><Icon icon="ri:youtube-fill" width="30" /></a></span>

              </div>
          </div>
          <div class="short_info wow animate__animated animate__fadeInUp animate__delay-0.2s custom-fadeinup" >
            <h5 style={{color:'#854fee'}}>
              <a style={{textDecoration:'none'}}>{name}</a>
            </h5>
            <span style={{backgroundColor:'#854fee'}} class="badge badge-primary">{techstack}</span>&nbsp;
            <span style={{backgroundColor:'#854fee'}} class="badge badge-primary">{techstack2}</span>&nbsp;
            <span style={{backgroundColor:'#854fee'}} class="badge badge-primary">{techstack3}</span>&nbsp;
            <span style={{backgroundColor:'#854fee'}} class="badge badge-primary">{techstack4}</span>

            <p>{description}</p>

          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
