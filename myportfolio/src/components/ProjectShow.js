import React from "react";
import { useState } from "react";
import Projects from "./Projects";
import AllData from "./AllProjects";
const ProjectShow = () => {
  const [images, setImage] = useState(AllData);

  const allItem = () => {
    const finalData = AllData.filter((value) => {
      return value;
    });
    setImage(finalData);
  };

  const onlyJava = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });

    setImage(finalData);
  };
  const onlyPHP = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });

    setImage(finalData);
  };
  const onlyPython = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });

    setImage(finalData);
  };
  const onlyReact = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });

    setImage(finalData);
  };

  return (
    <>
      <section class="banner_area">
        <section class="portfolio_area">
          <section class="features_area section_gap">
            <div class="container justify-content-center">
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <div class="main_title">
                    <h3 style={{fontWeight:'600'}} class="text-center">
                      Checkout my work!<span class="bulb">💡</span>
                    </h3>
                    <p>
                      Elevating ideas through code, each project a testament to
                      creativity and problem-solving.
                      <br />
                      Explore a showcase of my coding journey and digital
                      creations.
                    </p>
                  </div>
                </div>

                <div class="filters portfolio-filter">
                  <ul>
                    <li className="active" onClick={allItem}>
                      all
                    </li>
                    <li onClick={() => onlyJava("Java")}>Java Full Stack</li>
                    <li onClick={() => onlyPHP("PHP")}> PHP</li>
                    <li onClick={() => onlyPython("Python")}>Python</li>
                    <li onClick={() => onlyReact("React")}>React JS</li>
                  </ul>
                </div>
                <div class="filters-content ">
                  <div class="row portfolio-grid justify-content-center ">
                    {images.map((value) => {
                      return (
                        <>
                          <Projects  
                            image={value.image}
                            name={value.name}
                            description={value.description}
                            link={value.link}
                            yt={value.yt}
                            git={value.git}
                            techstack={value.techstack}
                            techstack2={value.techstack2}
                            techstack3={value.techstack3}
                            techstack4={value.techstack4}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};
export default ProjectShow;
