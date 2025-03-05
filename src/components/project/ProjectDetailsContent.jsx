import Image from "next/image";
import React from "react";
import SocialShare from "../utilities/SocialShare";

const ProjectDetailsContent = ({ projectInfo }) => {
  const { thumbFull, projectData } = projectInfo;

  return (
    <>
      <div className="project-details-area default-padding">
        <div className="container">
          <div className="project-details-items">
            <div className="thumb">
              <Image src={`/assets/img/gallery/${thumbFull}`} alt="Thumb" width={1920} height={825} />
            </div>
            <div className="top-info">
              <div className="row">
                <div className="col-xl-4 col-lg-5 order-lg-last right-info">
                  <div className="project-info mt-15" style={{ backgroundImage: `url(/assets/img/shape/41.png)` }}>
                    <h4 className="title">Contact Us for more detail info</h4>
                    <ul>
                      <li>
                        Phone <span>+62 812 9831 9944</span>
                      </li>
                      <li>
                        Email <span>incfasel@gmail.com</span>
                      </li>
                      <li>
                        Address <span>Bogor, Indonesia</span>
                      </li>
                    </ul>
                    <ul className="social">
                      <SocialShare />
                    </ul>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 pr-35 pr-md-15 pr-xs-15 left-info mt-md-10">
                  <h2>FASEL Crafting Collaboration</h2>
                  <p>
                    Collaboration is not just about working together—it's about creating a strong synergy within the team. <b>FASEL Crafting Collaboration</b> is designed to build trust, strengthen communication, and foster a more solid
                    work culture through an <b>experiential learning approach</b>.
                  </p>
                  <ul className="check-list">
                    {projectData.map((list) => (
                      <li key={list.id}>
                        <h4>{list.title}</h4>
                        <p>{list.info}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="main-content">
              <p>
                A strong company is built by individuals who share the same vision, motivation, and values. <b>FASEL Crafting Impact</b> is an inspiring event designed to align company <b>core values</b>, strengthen employee engagement, and cultivate
                <b>leadership and enthusiasm</b> in every individual.
              </p>
              <p>
                <b>"Great teams aren't just built—they are crafted with purpose." </b>
              </p>
              <p>
              🚀 Ready to take your team to the next level with <b>FASEL.inc?</b> Let’s create an unforgettable and impactful experience!
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <Image src="/assets/img/gallery/faselevent1.jpg" alt="Thumb" width={800} height={600} />
                </div>
                <div className="col-lg-6 col-md-6">
                  <Image src="/assets/img/gallery/faselindoor1.jpg" alt="Thumb" width={800} height={600} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
