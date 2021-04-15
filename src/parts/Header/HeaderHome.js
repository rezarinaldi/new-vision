import React from "react";

import NavbarHome from "../Navbar/NavbarHome";

export default function HeaderHome() {
  return (
    <div>
      <div className="tm-site-header">
        <div className="row">
          <div className="col-12 tm-site-header-col">
            <div className="tm-site-header-left">
              <i className="far fa-2x fa-eye tm-site-icon"></i>
              <h1 className="tm-site-name">New Vision</h1>
            </div>
            <div className="tm-site-header-right tm-menu-container-outer">
              <NavbarHome />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="tm-main-bg"></div>
        </div>
      </div>
    </div>
  );
}
