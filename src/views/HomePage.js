import React, { Component } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Slider from "../component/Slider";
import SectionProducts from "../component/SectionProducts";
import OtherProducts from "../component/OtherProducts";
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
