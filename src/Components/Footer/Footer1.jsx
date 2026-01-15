import { Link } from "react-router-dom";

const Footer1 = () => {
    return (
        <footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg" data-src="assets/img/footer_bg.jpg">
        <div className="container">
          <div className="cs_footer_newsletter cs_style_1">
            {/* <div className="cs_footer_newsletter_left cs_accent_bg cs_center">
              <img src="/assets/img/logo50.png" alt="Logo" className="wow fadeInLeft" />
            </div> */}
            {/* <div className="cs_footer_newsletter_right">
              <h3 className="cs_fs_24 cs_semibold cs_white_color mb-0">Subscribe now to get latest updates</h3>
              <form action="#" className="cs_footer_newsletter_form">
                <input type="text" placeholder="Enter Your Email" />
                <button className="cs_btn cs_style_1">
                  <span>Subscribe</span>
                </button>
              </form>
            </div> */}
          </div>
        </div>
        <div className="cs_main_footer cs_white_color">
          <div className="container">
            <div className="cs_footer_row">
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">About</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <div className="cs_text_widget">
                    <p>800 SPEEDY provides fast, reliable on-site tyre and battery assistance. From puncture repairs to battery replacement, our expert technicians ensure quick, safe, and hassle-free roadside support whenever you need it</p>
                  </div>
                  <div className="cs_social_btns cs_style_1">
                       <a href="https://www.facebook.com/800speedy" className="cs_social_btn cs_center">
                  <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/800speedy" className="cs_social_btn cs_center">
                  <i className="bi bi-linkedin"></i>
                  </a>
                   
                  {/* <a href="#" className="cs_social_btn cs_center">
                  <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                  <i className="bi bi-youtube"></i>
                  </a> */}
                 
<a href="https://www.instagram.com/800speedy" className="cs_social_btn cs_center">
  <i className="bi bi-instagram"></i>
</a>

<a href="https://www.tiktok.com/@800speedy" className="cs_social_btn cs_center">
  <i className="bi bi-tiktok"></i>
</a>
                  </div>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Explore</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_footer_menu">
                    <li>
                      <Link to="/service/tyre-repair">Repair Tyre</Link>
                    </li>
                    <li>
                      <Link to="/service/buy-new-tyre">New Tyres</Link>
                    </li>
                    <li>
                      <Link to="/service/new-battery-installation">New Battery</Link>
                    </li>
                    <li>
                      <Link to="/service/battery-health-check">Battery Health Check </Link>
                    </li>
                    <li>
                      <Link to="/service/spare-tyre-change">Spare Tyre Change</Link>
                    </li>
                     <li>
                      <Link to="/service/tyre-replacement"> Tyre Replacement</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Contact Us</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_footer_contact_list cs_mp_0">
                    <li>
                    <i className="bi bi-geo-alt-fill"></i>
                      Sajaya 7, Shop 14 B, Ras Al Khor, Dubai
                    </li>
                    <li>
                    <i className="bi bi-telephone-fill"></i>
                      <a href="tel:0543170355">0543170355</a> <br/>
                      <a href="tel:05431703559">0543170355</a>
                    </li>
                    <li>
                    <i className="bi bi-envelope-fill"></i>
                      <a href="mailto:800speeedy@gmail.com">800speeedy@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Working Hours:</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_working_hours">
                    <li>
                      <span>Thu - Fri</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </li>
                    <li>
                      <span>Mon - Wed</span>
                      <span>8:00 AM - 10:00 PM</span>
                    </li>
                    <li>
                      <span>Saturday</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <span>Close</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom cs_white_color">
          <div className="container">
            <div className="cs_footer_bottom_in">
              <div className="cs_footer_copyright">
               <a style={{color:"#fff"}} href="#">
                © 800speedy 2026 | All Rights Reserved </a>
              </div>
              {/* <div>
                <img src="/assets/img/payment_card.svg" alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer1;