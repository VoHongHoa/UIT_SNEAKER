import React, { Component } from "react";
import brand1 from "../assets/images/brand-1.jpg";
import brand2 from "../assets/images/brand-2.jpg";
import brand3 from "../assets/images/brand-3.jpg";
import brand4 from "../assets/images/brand-4.jpg";
import brand5 from "../assets/images/brand-5.jpg";
class Footer extends Component {
  render() {
    return (
      <>
        <div className="colorlib-partner">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                <h2>Trusted Partners</h2>
              </div>
            </div>
            <div className="row">
              <div className="col partner-col text-center">
                <img
                  src={brand1}
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
              <div className="col partner-col text-center">
                <img
                  src={brand2}
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
              <div className="col partner-col text-center">
                <img
                  src={brand3}
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
              <div className="col partner-col text-center">
                <img
                  src={brand4}
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
              <div className="col partner-col text-center">
                <img
                  src={brand5}
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
            </div>
          </div>
        </div>
        <footer id="colorlib-footer" role="contentinfo">
          <div className="container">
            <div className="row row-pb-md">
              <div className="col footer-col colorlib-widget">
                <h4>About Footwear</h4>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life
                </p>
                <p>
                  <ul className="colorlib-social-icons">
                    <li>
                      <a href={() => false}>
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={() => false}>
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={() => false}>
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href={() => false}>
                        <i className="icon-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
              <div className="col footer-col colorlib-widget">
                <h4>Customer Care</h4>
                <p>
                  <ul className="colorlib-footer-links">
                    <li>
                      <a href={() => false}>Contact</a>
                    </li>
                    <li>
                      <a href={() => false}>Returns/Exchange</a>
                    </li>
                    <li>
                      <a href={() => false}>Gift Voucher</a>
                    </li>
                    <li>
                      <a href={() => false}>Wishlist</a>
                    </li>
                    <li>
                      <a href={() => false}>Special</a>
                    </li>
                    <li>
                      <a href={() => false}>Customer Services</a>
                    </li>
                    <li>
                      <a href={() => false}>Site maps</a>
                    </li>
                  </ul>
                </p>
              </div>
              <div className="col footer-col colorlib-widget">
                <h4>Information</h4>

                <ul className="colorlib-footer-links">
                  <li>
                    <a href={() => false}>About us</a>
                  </li>
                  <li>
                    <a href={() => false}>Delivery Information</a>
                  </li>
                  <li>
                    <a href={() => false}>Privacy Policy</a>
                  </li>
                  <li>
                    <a href={() => false}>Support</a>
                  </li>
                  <li>
                    <a href={() => false}>Order Tracking</a>
                  </li>
                </ul>
              </div>

              <div className="col footer-col">
                <h4>News</h4>
                <ul className="colorlib-footer-links">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href={() => false}>Press</a>
                  </li>
                  <li>
                    <a href={() => false}>Exhibitions</a>
                  </li>
                </ul>
              </div>

              <div className="col footer-col">
                <h4>Contact Information</h4>
                <ul className="colorlib-footer-links">
                  <li>
                    291 South 21th Street, <br /> Suite 721 New York NY 10016
                  </li>
                  <li>
                    <a href={() => false}>+ 1235 2355 98</a>
                  </li>
                  <li>
                    <a href={() => false}>info@yoursite.com</a>
                  </li>
                  <li>
                    <a href={() => false}>yoursite.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copy">
            <div className="row">
              <div className="col-sm-12 text-center">
                <p>
                  <span>
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="icon-heart" aria-hidden="true"></i> by{" "}
                    <a href={() => false} target="_blank" rel="noreferrer">
                      Colorlib
                    </a>
                  </span>
                  <span className="block">
                    Demo Images:{" "}
                    <a href={() => false} target="_blank" rel="noreferrer">
                      Unsplash
                    </a>{" "}
                    ,{" "}
                    <a href={() => false} target="_blank" rel="noreferrer">
                      Pexels.com
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
export default Footer;
