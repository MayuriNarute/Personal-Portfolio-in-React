import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const images = ["img/banner/gfgshirt-min.jpg", "img/banner/gfg2-min.jpeg"];
const images1 = [
  "img/banner/hackathon-min.JPG",
  "img/banner/hack_certificate-min.jpg",
];
const images2 = ["img/banner/gfgbackpack.jpeg", "img/banner/gfgbackpack2.jpeg"];
const images3 = ["img/banner/SIH2.jpeg", "img/banner/SIH1.jpeg"];
const Highlights = () => {
  useEffect(() => {
    document.title = "Highlights | Mayuri Narute";
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndexs, setCurrentImageIndexs] = useState(0);
  const [currentImageIndexd, setCurrentImageIndexd] = useState(0);
  const goToPrevImage3 = () => {
    setCurrentImageIndexd((prevIndex) =>
      prevIndex === 0 ? images3.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage3 = () => {
    setCurrentImageIndexd((prevIndex) =>
      prevIndex === images3.length - 1 ? 0 : prevIndex + 1
    );
  };
  const goToPrevImage2 = () => {
    setCurrentImageIndexd((prevIndex) =>
      prevIndex === 0 ? images2.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage2 = () => {
    setCurrentImageIndexd((prevIndex) =>
      prevIndex === images2.length - 1 ? 0 : prevIndex + 1
    );
  };
  const goToPrevImage1 = () => {
    setCurrentImageIndexs((prevIndex) =>
      prevIndex === 0 ? images1.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage1 = () => {
    setCurrentImageIndexs((prevIndex) =>
      prevIndex === images1.length - 1 ? 0 : prevIndex + 1
    );
  };
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section class="features_area section_gap">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <div class="main_title">
                <h3 style={{ fontWeight: "600" }}>
                  My Achievments<span className="trophy">🏆</span>
                </h3>
                <p>
                  Evidence of dedication and excellence. Explore my
                  achievements-a journey defined by <br />
                  hard work, growth, and pushing boundaries.
                </p>
              </div>
            </div>
          </div>
          <div class="row feature_inner">
            <div className="col-lg-4 col-md-6">
              <div
                className="feature_item"
                style={{
                  textAlign: "center",
                  border: "2px solid #854fee",
                  borderRadius: "20px",
                  padding: "20px",
                }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    size="lg"
                    onClick={goToPrevImage1}
                    style={{ cursor: "pointer" }}
                  />
                  <img
                    src={images1[currentImageIndexs]}
                    alt={`Image ${currentImageIndexs + 1}`}
                    style={{
                      width: "200px",
                      height: "200px",
                      margin: "0 10px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size="lg"
                    onClick={goToNextImage1}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <br />
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}>
                  <b>🥇Team Voltus 2.0 -</b> Winner of The Blue-Bit Hackathon
                  organized by IT Department of PCCOE, Pune as a part of
                  Praxis-2k23 annual event.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="feature_item"
                style={{
                  textAlign: "center",
                  border: "2px solid #854fee",
                  borderRadius: "20px",
                  padding: "20px",
                }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    size="lg"
                    onClick={goToPrevImage}
                    style={{ cursor: "pointer" }}
                  />
                  <img
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      margin: "0 10px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size="lg"
                    onClick={goToNextImage}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <br />
                <br />
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}>
                  <b>🎁GFG T-shirt -</b> Received this incredible reward from
                  GeeksforGeeks upon earning 100 geekbits by solving POTD
                  challenges on their platform.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="feature_item"
                style={{
                  textAlign: "center",
                  border: "2px solid #854fee",
                  borderRadius: "20px",
                  padding: "20px",
                }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    size="lg"
                    onClick={goToPrevImage2}
                    style={{ cursor: "pointer" }}
                  />
                  <img
                    src={images2[currentImageIndexd]}
                    alt={`Image ${currentImageIndexd + 1}`}
                    style={{
                      maxWidth: "200px",
                      maxHeight: "240px",
                      margin: "0 10px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size="lg"
                    onClick={goToNextImage2}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <br />
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}>
                  <b>🎁GFG BackPack -</b> Received this reward from
                  GeeksforGeeks upon earning 200 geekbits by solving POTD
                  challenges on their platform.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="feature_item"
                style={{
                  textAlign: "center",
                  border: "2px solid #854fee",
                  borderRadius: "20px",
                  padding: "20px",
                }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    size="lg"
                    onClick={goToPrevImage3}
                    style={{ cursor: "pointer" }}
                  />
                  <img
                    src={images3[currentImageIndexd]}
                    alt={`Image ${currentImageIndexd + 1}`}
                    style={{
                      maxWidth: "300px",
                      maxHeight: "200px",
                      margin: "0 10px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size="lg"
                    onClick={goToNextImage3}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <br />
                <p
                  style={{
                    color: "black",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}>
                  <b>🏆Team Uphaar(SIH'23) -</b> Honored with a certificate and
                  a fantastic trophy as a finalist and participant in Smart
                  India Hackathon 2023.
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
