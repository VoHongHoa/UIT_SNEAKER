import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";
import SectionProducts from "./SectionProducts";
import OtherProducts from "./OtherProducts";
class HomePage extends Component {
  render() {
    return (
      <div>
        <div id="page">
          <Header />
          <Slider />
          <SectionProducts />
          <OtherProducts />
          <Footer />
          <div className="gototop js-top">
            <a href="#" className="js-gotop">
              <i className="ion-ios-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
