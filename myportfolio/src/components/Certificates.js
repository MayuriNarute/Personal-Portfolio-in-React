import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
//import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const courses = [
  'img/portfolio/html1.png',
  'img/portfolio/p2.jpg'
];
const Certificates = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndexs, setCurrentImageIndexs] = useState(0);

  // const goToPrevImage1 = () => {
  //   setCurrentImageIndexs((prevIndex) => (prevIndex === 0 ? images1.length - 1 : prevIndex - 1));
  // };

  // const goToNextImage1 = () => {
  //   setCurrentImageIndexs((prevIndex) => (prevIndex === images1.length - 1 ? 0 : prevIndex + 1));
  // };
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1));
  };
   let result2;
   const [numPages, setNumPages] = useState(null);
   //const [pageNumber, setPageNumber] = useState(1);
   const [pageNumber, setPageNumber] = useState(1);

   const goToPrevPage = () =>
       setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

   const goToNextPage = () =>
       setPageNumber(
           pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
       );
   const onDocumentLoadSuccess = ({ numPages }) => {
       setNumPages(numPages);
   };
    useEffect(()=> {
		document.title = 'Certificates | Mayuri Narute';
	  },[]);
      return(
        <>
        <section class="features_area section_gap">
        <div class="container">
          <div class="row justify-content-center ">
            <div class="col-lg-8 text-center">
              <div class="main_title">
                <h3>My Certificates🏅</h3>
                <p>
                Conquering challenges, one milestone at a time. Journey through my competitive programming <br/>achievements and see how I code my way to success. 
                </p>
              </div>
            </div>
            </div>
        <h4 class="mb-4 justify-content-left">
            <li className="list-item">
              <span>
                {/* <Icon icon="fa-brands:hackerrank" width="30" /> */}
                &nbsp;Course Certificates
              </span>
              {/* <span class="span2" onClick={toggleHackerrankB}>
                View
                <FontAwesomeIcon
                  onClick={toggleHackerrankB}
                  icon={faAngleDown}
                />
              </span> */}
            </li>
          </h4>
        <section class="features_area">

<div class="row feature_inner justify-content-center">
<div class="col-lg-6 col-md-6">

                <div
                  class="feature_item text-center"
                  style={{ border: "2px solid #854fee", borderRadius: "20px" }}>
                  <FontAwesomeIcon icon={faAngleLeft} onClick={goToPrevImage}/>&nbsp;&nbsp;
              <img src={courses[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ width: "500px", height: "400px" }}/>
              &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleRight} onClick={goToNextImage}/>

                </div>
</div>
</div>
</section>
</div></section>
        </>
    
      )}
    
export default Certificates