import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SectionProducts from "./SectionProducts";
import OtherProducts from "./OtherProducts";
class MenPage extends Component {
  render() {
    return (
      <>
        <div id="page">
          <Header />
          <div class="breadcrumbs">
            <div class="container">
              <div class="row">
                <div class="col">
                  <p class="bread">
                    <span>
                      <a href="/">Home</a>
                    </span>
                    / <span>Men</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SectionProducts />
          <OtherProducts />
          <Footer />
          <div className="gototop js-top">
            <a href="#" className="js-gotop">
              <i className="ion-ios-arrow-up"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default MenPage;
