import React from "react";

import partner1 from "../../assets/img/partner-01.png";
import partner2 from "../../assets/img/partner-02.png";
import partner3 from "../../assets/img/partner-03.png";
import partner4 from "../../assets/img/partner-04.png";
import partner5 from "../../assets/img/partner-05.png";

export default function FeaturedServices() {
  return (
    <section className="tm-featured">
      <div className="row">
        <div className="col-12">
          <h2 className="tm-section-header tm-section-header-small mb-3">
            Our Strategic Partners
          </h2>
        </div>
      </div>

      <div className="tm-partners mx-auto">
        <div>
          <img src={partner1} alt="partner" className="img-fluid" />
          <img src={partner2} alt="partner" className="img-fluid" />
          <img src={partner3} alt="partner" className="img-fluid" />
          <img src={partner4} alt="partner" className="img-fluid" />
          <img src={partner5} alt="partner" className="img-fluid" />
        </div>

        <p className="tm-partner-text">
          Etiam et odio ut nibh suscipit eleifend. Sed facilisis, enim nec
          auctor vehicula, dolor odio venenatis turpis, eu vehicula ipsum ligula
          a nisi. Nam vel nulla sed enim imperdiet fermentum. Mauris venenatis
          imperdiet ex, quis rutrum orci vestibulum tristique. Ut gravida est ac
          risus dignissim sollicitudin. #999
        </p>
      </div>
    </section>
  );
}
