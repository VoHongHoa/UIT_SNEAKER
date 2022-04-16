import React, { Component } from "react";
import men from "../assets/images/men.jpg";
import women from "../assets/images/men_2.jpg";
class SectionProducts extends Component {
  render() {
    return (
      <div className="colorlib-product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-center">
              <div className="featured">
                <a
                  href={() => false}
                  className="featured-img"
                  style={{ backgroundImage: `url(${men})` }}
                >
                  {" "}
                </a>
                <div className="desc">
                  <h2>
                    <a href="/men">Shop Men's Collection</a>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <div className="featured">
                <a
                  href={() => false}
                  className="featured-img"
                  style={{ backgroundImage: `url(${women})` }}
                >
                  {" "}
                </a>
                <div className="desc">
                  <h2>
                    <a href="/women">Shop Women's Collection</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SectionProducts;
