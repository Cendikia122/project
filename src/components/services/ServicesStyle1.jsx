import React from "react";
import shape10 from "@/assets/img/shape/10.png";
import Services1TabData from "@/assets/jsonData/services/Services1TabData.json";
import SingleServices1 from "./SingleServices1";
import Image from "next/image";

const ServicesStyle1 = () => {
  return (
    <>
      <div className="services-style-one-area default-padding bg-gray">
        <div className="triangle-shape">
          <Image src={shape10} alt="Shape" />
        </div>
        <div className="center-shape" style={{ backgroundImage: `url(/assets/img/shape/5.png)` }}></div>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5 mb-md-60">
              <div className="service-nav-info">
                <h4 className="sub-title">What we do</h4>
                <h2>Excellent service and support for you</h2>
                <div className="nav nav-tabs service-tab-navs" id="nav-tab" role="tablist">
                  <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="40" height="32">
                      <path d="M6.96,14c2.21,0,4-1.79,4-4s-1.79-4-4-4-4,1.79-4,4,1.79,4,4,4Zm0-7c1.65,0,3,1.35,3,3s-1.35,3-3,3-3-1.35-3-3,1.35-3,3-3Zm7,16v.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-.5c0-3.31-2.69-6-6-6S.96,19.69,.96,23v.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-.5c0-3.86,3.14-7,7-7s7,3.14,7,7ZM24,4.5l-.04,9c0,2.48-2.02,4.5-4.5,4.5h-5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5c1.93,0,3.5-1.57,3.5-3.5l.04-9c0-1.93-1.57-3.5-3.5-3.5H9.46c-1.6,0-2.99,1.08-3.39,2.62-.07,.27-.34,.43-.61,.36-.27-.07-.43-.34-.36-.61,.51-1.99,2.3-3.38,4.36-3.38h10.04c2.48,0,4.5,2.02,4.5,4.5Zm-9.64,6.4l4.9-4.9h-3.79c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h4c.83,0,1.5,.67,1.5,1.5v4c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-3.79l-4.9,4.9c-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44l-.29-.29c-.2-.2-.2-.51,0-.71s.51-.2,.71,0l.29,.29c.2,.19,.51,.19,.71,0Z" />
                    </svg>
                    <i className="flaticon-tr-chart-user"></i>
                    Training
                  </button>
                  <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="40" height="32">
                      <path d="m3.5,14c-1.135,0-2.152.674-2.532,1.677-.098.259-.386.386-.645.291-.258-.098-.388-.387-.291-.645.527-1.39,1.92-2.323,3.468-2.323s2.941.934,3.468,2.323c.098.258-.032.547-.291.645-.059.021-.118.032-.177.032-.202,0-.392-.123-.468-.323-.38-1.003-1.397-1.677-2.532-1.677ZM10,2c0-1.103.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2Zm1,0c0,.552.449,1,1,1s1-.448,1-1-.449-1-1-1-1,.448-1,1Zm5.5,1h2c1.378,0,2.5,1.121,2.5,2.5,0,.276.224.5.5.5s.5-.224.5-.5c0-1.93-1.57-3.5-3.5-3.5h-2c-.276,0-.5.224-.5.5s.224.5.5.5Zm6,7c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm-1,0c0-.552-.449-1-1-1s-1,.448-1,1,.449,1,1,1,1-.448,1-1Zm-9.5,10c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Zm0-1c.551,0,1-.448,1-1s-.449-1-1-1-1,.448-1,1,.449,1,1,1Zm0-14c-1.547,0-2.941.934-3.468,2.323-.098.258.032.547.291.645.258.096.546-.032.645-.291.38-1.003,1.397-1.677,2.532-1.677s2.152.674,2.532,1.677c.076.2.266.323.468.323.059,0,.119-.011.177-.032.258-.098.388-.387.291-.645-.527-1.39-1.92-2.323-3.468-2.323ZM3.5,12c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Zm0-1c.551,0,1-.448,1-1s-.449-1-1-1-1,.448-1,1,.449,1,1,1Zm20.468,4.323c-.527-1.39-1.92-2.323-3.468-2.323s-2.941.934-3.468,2.323c-.098.258.032.547.291.645.259.095.547-.032.645-.291.38-1.003,1.397-1.677,2.532-1.677s2.152.674,2.532,1.677c.076.2.266.323.468.323.059,0,.119-.011.177-.032.258-.098.388-.387.291-.645Zm-2.468,1.677c-.276,0-.5.224-.5.5v1c0,1.379-1.122,2.5-2.5,2.5h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c1.93,0,3.5-1.57,3.5-3.5v-1c0-.276-.224-.5-.5-.5Zm-14,4h-2c-1.378,0-2.5-1.121-2.5-2.5v-1c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1c0,1.93,1.57,3.5,3.5,3.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm0-19h-2c-1.93,0-3.5,1.57-3.5,3.5,0,.276.224.5.5.5s.5-.224.5-.5c0-1.379,1.122-2.5,2.5-2.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm4.5,19c-1.547,0-2.941.934-3.468,2.323-.098.258.032.547.291.645.258.096.546-.032.645-.291.38-1.003,1.397-1.677,2.532-1.677s2.152.674,2.532,1.677c.076.2.266.323.468.323.059,0,.119-.011.177-.032.258-.098.388-.387.291-.645-.527-1.39-1.92-2.323-3.468-2.323Z" />
                    </svg>
                    <i className="flaticon-team-building"></i>
                    Team Building
                  </button>
                  <button className="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                    <i className="flaticon-save-money"></i>
                    Leadership Camp
                  </button>
                  <button className="nav-link" id="nav-id-4" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                    <i className="flaticon-save-money"></i>
                    Capacity Building
                  </button>
                  <button className="nav-link" id="nav-id-4" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                    <i className="flaticon-save-money"></i>
                    Consulting
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-7 pl-50 pl-md-15 pl-xs-15">
              <div className="tab-content services-tab-content" id="nav-tabContent">
                {Services1TabData.map((service) => (
                  <div className={`tab-pane fade ${service.tabClass}`} id={service.tabId} role="tabpanel" aria-labelledby={service.ariaLabelled} key={service.id}>
                    <div className="row">
                      {service.tabData.map((data) => (
                        <div className="col-lg-6 col-md-6 mt-60 mt-md-30 mt-xs-30" key={data.id}>
                          <SingleServices1 data={data} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyle1;
