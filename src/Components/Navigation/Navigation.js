import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="container fixed-top">
      <div className="row align-items-center justify-content-between p-3">
        {/* logo部分 */}
        <div className="col-1 fs-5">LOGO</div>

        {/* 導覽列部分 */}
        <div className="col-7">
          <div className="row  justify-content-end">
            {/* 基本導覽列連結 */}
            <div className="col-6">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* 登入+購物車 連結 */}
            <div className="col-3 border-start">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
