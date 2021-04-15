import React from "react";

export default function FeaturedContact() {
  return (
    <div className="row pt-5 pb-5 mb-5">
      <div className="col-md-6 tm-contact-l">
        <h3 className="tm-article-title tm-color-primary">
          Fusce consectetur justo urna
        </h3>
        <p className="mb-4">
          Phasellus scelerisque, leo id dictum consectetur, dui felis ultrices
          ligula, at tristique sem elit ac eros.
        </p>
        <ul className="tm-ul-hyphen">
          <li>Etiam varius faucibus elit, id ultrices</li>
          <li>Nam condimentum tortor id dui</li>
          <li>Quis faucibus lacus faucibus</li>
          <li>Sed urna est, vulputate quis efficitur</li>
        </ul>
      </div>
      <div className="col-md-6 tm-contact-r">
        <h3 className="tm-article-title tm-color-primary">
          Nulla euismod nisi in ligula
        </h3>
        <p className="mb-4">
          Etiam iaculis urna finibus ante pharetra eleifend. Nulla euismod nisi
          in ligula feugiat, in gravida erat tempus. Nullam velit ante, semper
          in rhoncus non, fringilla vel erat. In gravida dapibus massa non
          laoreet.
        </p>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </p>
      </div>
    </div>
  );
}
