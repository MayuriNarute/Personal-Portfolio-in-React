import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

const Projects = ({ image, name, description,link,yt,git}) => {
	 useEffect(()=> {
		document.title = 'Projects | Mayuri Narute';
	  },[]);
  return (
    <>
      <div class="col-lg-4 col-md-6">
        <div class="portfolio_box justify-content-center">
          <div class="single_portfolio">
            <img class="img-fluid w-80" src={image} alt="" />
            <div class="overlay"></div>
            
              <div class="icon">
                <span><a href={git}><Icon icon="mdi:github" width="30" /></a></span>
                <span><a href={link}><Icon icon="ph:link-bold" width="30" /></a></span>
                <span><a href={yt}><Icon icon="ri:youtube-fill" width="30" /></a></span>

              </div>
          </div>
          <div class="short_info">
            <h5 style={{color:'#854fee'}}>
              <a href="#">{name}</a>
            </h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
