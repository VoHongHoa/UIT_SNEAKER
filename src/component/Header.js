import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <nav className="colorlib-nav" role="navigation">
        <div className="top-menu">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-md-9">
                <div id="colorlib-logo">
                  <h1>
                    <a href="/">UITSNEAKER</a>
                  </h1>
                </div>
              </div>
              <div className="col-sm-5 col-md-3">
                <form className="search-wrap">
                  <div className="form-group">
                    <input
                      type="search"
                      className="form-control search"
                      placeholder="Tìm kiếm"
                    />
                    <button
                      className="btn btn-primary submit-search text-center"
                      type="submit"
                    >
                      <i className="icon-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-left menu-1">
                <ul>
                  <li className="active">
                    <a href="/">Trang chủ</a>
                  </li>
                  <li className="has-dropdown">
                    <a href="/men">Nam</a>
                    <ul className="dropdown">
                      <li>
                        <a href={() => false}>Shopping Cart</a>
                      </li>
                      <li>
                        <a href={() => false}>Checkout</a>
                      </li>
                      <li>
                        <a href={() => false}>Order Complete</a>
                      </li>
                      <li>
                        <a href={() => false}>Wishlist</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="/women">Giày nữ</a>
                  </li>
                  <li>
                    <a href={() => false}>Blog</a>
                  </li>
                  <li>
                    <a href={() => false}>Liên hệ</a>
                  </li>
                  <li className="cart">
                    <a href={() => false}>
                      <i className="icon-shopping-cart"></i> Giỏ hàng [0]
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sale">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center">
                <div className="row">
                  <div className="owl-carousel2">
                    <div className="item">
                      <div className="col">
                        <h3>
                          <Link to="/" exact={true}>
                            Giảm giá 25% tất cả các loại giày! Với mã sale:
                            Summer Sale
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="item">
                      <div className="col">
                        <h3>
                          <Link to="/" exact={true}>
                            Ưu đãi lớn nhất lên đến 50% trong lễ hội mùa hè
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
