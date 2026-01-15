import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/faq.json';

const ServiceDetails = ({service}) => {
  console.log("Service in Component:", service);

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };
    useEffect(() => {
      if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);


    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_60">
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
                <img src={service?.main} alt="Service Banner" />
                <h2>{service?.heading_title}</h2>
                <p>{service?.p1}</p>
                <p>{service?.p2}  </p>
                <div className="row">
                  <div className="col-md-6">
                    <img src={service?.img1} alt="Post Image" />
                  </div>
                  <div className="col-md-6">
                    <img src={service?.img2} alt="Post Image" />
                  </div>
                </div>
                {/* <p>Share repair tips, showcase completed projects, and engage with your audience on platforms like Facebook, Instagram an and YouTube flyers, billboards, or local radio to promote your services in the community Encourage current customers to refer friends by offering discounts on future services team up with local businesses such as car dealerships or insurance companies to generate referrals </p> */}
                <h2>Service Quality</h2>
                <p>{service?.pS}</p>
                <div className="row">
                  <div className="col-xl-6">
                    <img src={service?.img3} alt="Post Image" />
                  </div>
                  <div className="col-xl-6">
                    <ul className="cs_list cs_style_1 cs_fs_18 cs_semibold cs_heading_font cs_mp_0">
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>{service?.point1}</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>{service?.point2}</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>{service?.point3}</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>{service?.point4}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="cs_height_20 cs_height_lg_20"></div>
              <div className="cs_accordians_wrapper cs_style_1 p-0">

              {
              
              
              
              service?.faqs?.map((item, index)=>(
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : "" }`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <h2 className="cs_fs_18 cs_semibold mb-0">{item.title}</h2>
                    <span className="cs_accordian_toggle">
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-eye-slash"></i>
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
                ))
                
                
                
                }

              </div>
            </div>
            <aside className="col-xl-4 col-lg-5">
              <div className="cs_sidebar cs_style_1">
                <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                  <div className="cs_separator"></div>
                  <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">All Services</h3>
                  <ul className="cs_categories cs_fs_18 cs_semibold cs_mp_0">
                    <li><Link to="/service/service-details">
                      <span>Structural Mastery</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link></li>
                    <li><Link to="/service/service-details">
                      <span>Foundation Forte</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link></li>
                    <li><Link to="/service/service-details">
                      <span>Build Smart Solutions</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link></li>
                    <li><Link to="/service/service-details">
                      <span>Precision Builds</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link></li>
                    <li><Link to="/service/service-details">
                      <span>Apex Remodeling</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link></li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_accent_bg">
                  <div className="cs_card cs_style_6">
                    <h3 className="cs_fs_30 cs_white_color cs_mb_30">Emergency Car Repair Services</h3>
                    <div className="cs_card_icon cs_center cs_mb_32">
                      <img src="/assets/img/icons/phone-call_2.svg" alt="Phone Icon" />
                    </div>
                    <p className="cs_white_color cs_mb_5">Requesting A Call</p>
                    <a href="tel:+111(564)56825" className="cs_call_text cs_fs_30 cs_bold cs_heading_font cs_mb_23">0543170355</a>
                    <p className="cs_card_subtitle cs_white_color cs_mb_33">Invest in high-quality diagnostic tools, lifts, and other essential repair equipment certified mechanics and provide</p>
                    <Link to="/about" className="cs_card_btn">
                      <span>Read more</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
        </section>
    );
};

export default ServiceDetails;