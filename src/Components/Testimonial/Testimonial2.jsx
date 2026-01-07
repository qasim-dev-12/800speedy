import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Testimonial2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    const [isActive, setIsActive] = useState('tab2');

    return (
        <section className="cs_tabs cs_style_2 cs_bg_filed position-relative" data-background="/assets/img/testimonial_bg_2.jpg">
        <div className="cs_tabs_overlay cs_heading_bg position-absolute"></div>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-10">
              <div className="cs_tab_body p-0">
                <div className={`cs_tab ${isActive === 'tab1' ? 'active' : ''}`} >
                    <TestimonialCard
                        img="/assets/img/avatar_1.png"
                        name="Rohit Sharma"
                        designation="IT Professional"
                        subtile="Testimonial"
                        title="Clients say About Us"
                        content="My car battery died suddenly late at night, and 800 SPEEDY responded very fast. The technician arrived quickly and explained everything clearly. Battery replacement was smooth and professional. Highly reliable service when you really need help."
                    ></TestimonialCard>
                </div>
                <div className={`cs_tab ${isActive === 'tab2' ? 'active' : ''}`} >
                <TestimonialCard
                        img="/assets/img/avatar_2.png"
                        name="Sophia Laurent"
                        designation="Project Manager"
                        subtile="Testimonial"
                        title="Clients say About Us"
                        content="I had a punctured tyre on the road and didn’t know what to do. 800 SPEEDY arrived on time and fixed it on the spot. The technician was skilled and well-equipped. Excellent service and very professional experience."
                    ></TestimonialCard>
                </div>
                <div className={`cs_tab ${isActive === 'tab3' ? 'active' : ''}`} >
                <TestimonialCard
                        img="/assets/img/avatar_3.png"
                        name="Ahmed Al Mansoori"
                        designation="Business Owner"
                        subtile="Testimonial"
                        title="Clients say About Us"
                        content="My tyre went flat during peak hours, and help arrived very fast. The spare tyre was changed safely and professionally. The team was polite and experienced. I will definitely recommend 800 SPEEDY to others."
                    ></TestimonialCard>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <ul className="cs_tab_links cs_style_2 cs_mp_0">
                <li className={`${isActive === 'tab1' ? 'active' : ''}`} onClick={() => setIsActive('tab1')}><a><img src="/assets/img/avatar_1.png" alt="Avatar" /></a></li>
                <li className={`${isActive === 'tab2' ? 'active' : ''}`} onClick={() => setIsActive('tab2')} ><a><img src="/assets/img/avatar_2.png" alt="Avatar" /></a></li>
                <li className={`${isActive === 'tab3' ? 'active' : ''}`} onClick={() => setIsActive('tab3')}><a><img src="/assets/img/avatar_3.png" alt="Avatar" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Testimonial2;