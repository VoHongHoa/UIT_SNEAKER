import React, { Component } from "react";
import { Link } from "react-router-dom";
import img_bg_1 from "./assets/images/img_bg_1.jpg";
import img_bg_2 from "./assets/images/img_bg_2.jpg";
import img_bg_3 from "./assets/images/img_bg_3.jpg";
class Slider extends Component {
  render() {
    return (
      <>
        <aside id="colorlib-hero">
          <div className="flexslider">
            <ul className="slides">
              <li style={{ backgroundImage: `url(${img_bg_1})` }}>
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6 offset-sm-3 text-center slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 className="head-1">Bộ sưu tập</h1>
                          <h2 className="head-2">Giày</h2>
                          <h2 className="head-3">Nam</h2>
                          <p className="category">
                            <span>Mẫu giày thịnh hành</span>
                          </p>
                          <p>
                            <Link
                              to="/"
                              exact={true}
                              className="btn btn-primary"
                            >
                              Bộ sưu tập
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: `url(${img_bg_2})` }}>
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6 offset-sm-3 text-center slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 className="head-1">Huge</h1>
                          <h2 className="head-2">Sale</h2>
                          <h2 className="head-3">
                            <strong className="font-weight-bold">50%</strong>
                            Off
                          </h2>
                          <p className="category">
                            <span>Big sale sandals</span>
                          </p>
                          <p>
                            <Link
                              to="/"
                              exect={true}
                              className="btn btn-primary"
                            >
                              Bộ sưu tập
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: `url(${img_bg_3})` }}>
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6 offset-sm-3 text-center slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 className="head-1">New</h1>
                          <h2 className="head-2">Arrival</h2>
                          <h2 className="head-3">
                            up to{" "}
                            <strong className="font-weight-bold">30%</strong>{" "}
                            off
                          </h2>
                          <p className="category">
                            <span>New stylish shoes for men</span>
                          </p>
                          <p>
                            <Link
                              to="/"
                              exact={true}
                              className="btn btn-primary"
                            >
                              Bộ sưu tập
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        <div className="colorlib-intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="intro">
                  Nó bắt đầu với một ý tưởng đơn giản: Tạo ra những sản phẩm
                  chất lượng, thiết kế đẹp mà bản thân tôi muốn!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Slider;
