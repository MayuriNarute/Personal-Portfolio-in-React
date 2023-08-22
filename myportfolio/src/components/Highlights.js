import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";

const images = [
  'img/banner/gfgshirt-min.jpg',
  'img/banner/gfg2-min.jpeg'
];
const images1 = [
  'img/banner/hackathon-min.JPG',
  'img/banner/hack_certificate-min.jpg'
];
const images2 = [
  'img/banner/gfgbackpack.jpeg',
  'img/banner/gfgbackpack2.jpeg'
];
const Highlights = () => {
  useEffect(() => {
    document.title = "Highlights | Mayuri Narute";
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndexs, setCurrentImageIndexs] = useState(0);
  const [currentImageIndexd, setCurrentImageIndexd] = useState(0);
  const goToPrevImage2 = () => {
    setCurrentImageIndexd((prevIndex) => (prevIndex === 0 ? images2.length - 1 : prevIndex - 1));
  };

  const goToNextImage2 = () => {
    setCurrentImageIndexd((prevIndex) => (prevIndex === images2.length - 1 ? 0 : prevIndex + 1));
  };
  const goToPrevImage1 = () => {
    setCurrentImageIndexs((prevIndex) => (prevIndex === 0 ? images1.length - 1 : prevIndex - 1));
  };

  const goToNextImage1 = () => {
    setCurrentImageIndexs((prevIndex) => (prevIndex === images1.length - 1 ? 0 : prevIndex + 1));
  };
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <section class="features_area section_gap">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <div class="main_title">
                <h3>My Achievments<span className="trophy">🏆</span></h3>
                <p>
                  Evidence of dedication and excellence. Explore my
                  achievements-a journey defined by <br />
                  hard work, growth, and pushing boundaries.
                </p>
              </div>
            </div>
          </div>
          <div class="row feature_inner">
            <div class="col-lg-4 col-md-6">
              <div class="feature_item" style={{ textAlign: "center",border:'2px solid #854fee',borderRadius:'20px'}}>

               <FontAwesomeIcon icon={faAngleLeft}size="lg" onClick={goToPrevImage1}/>&nbsp;&nbsp;
              <img src={images1[currentImageIndexs]} alt={`Image ${currentImageIndexs + 1}`} style={{ width: "280px", height: "280px" }}/>
              &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleRight} size="lg" onClick={goToNextImage1}/>


                <br />
                <p>
                  <b style={{ color: "black", fontSize: "17px" }}>
                    🥇Team Voltus 2.0 -
                  </b>{" "}
                  Winner of The Blue-Bit Hackathon organized by IT Department of
                  PCCOE, Pune as a part of Praxis-2k23 annual event.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="feature_item" style={{ textAlign: "center",border:'2px solid #854fee',borderRadius:'20px'}}>
              <FontAwesomeIcon icon={faAngleLeft} size="lg" onClick={goToPrevImage}/>&nbsp;&nbsp;
              <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ width: "250px", height: "250px" }}/>
              &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleRight} size="lg" onClick={goToNextImage}/>

                <br />
                <br />
                <p>
                  <b style={{ color: "black", fontSize: "17px" }}>
                    🎁GFG T-shirt -{" "}
                  </b>
                  Received this incredible reward from GeeksforGeeks upon
                  earning 100 geekbits by solving POTD challenges on their
                  platform.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="feature_item" style={{ textAlign: "center",border:'2px solid #854fee',borderRadius:'20px'}}>
              <FontAwesomeIcon icon={faAngleLeft} size="lg" onClick={goToPrevImage2}/>&nbsp;&nbsp;
              <img src={images2[currentImageIndexd]} alt={`Image ${currentImageIndexd + 1}`} style={{ width: "240px", height: "280px" }}/>
              &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleRight} size="lg" onClick={goToNextImage2}/>

                <br />
                <p>
                  <b style={{ color: "black", fontSize: "17px" }}>
                    🎁GFG BackPack -{" "}
                  </b>
                  Received this incredible reward from GeeksforGeeks upon
                  earning 200 geekbits by solving POTD challenges on their
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Highlights;
