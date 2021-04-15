import React from "react";

import services1 from "../../assets/img/services-1.jpg";
import services2 from "../../assets/img/services-2.jpg";
import services3 from "../../assets/img/services-3.jpg";
import services4 from "../../assets/img/services-4.jpg";

export default function WelcomeServices() {
  return (
    <section className="tm-welcome">
      <div className="row">
        <div className="col-12">
          <h2 className="tm-section-header tm-header-floating">
            Our Digital Services
          </h2>
        </div>
      </div>

      <div className="row tm-welcome-row tm-services">
        <div className="col-md-3 col-sm-6">
          <figure className="tm-services-img">
            <img src={services1} alt="welcome services" className="img-fluid" />
            <figcaption className="tm-service-description">
              Business Strategy
            </figcaption>
          </figure>
        </div>
        <div className="col-md-3 col-sm-6">
          <figure className="tm-services-img">
            <img src={services2} alt="welcome services" className="img-fluid" />
            <figcaption className="tm-service-description">
              Digital Marketing
            </figcaption>
          </figure>
        </div>
        <div class="col-md-3 col-sm-6">
          <figure class="tm-services-img">
            <img src={services3} alt="welcome services" class="img-fluid" />
            <figcaption class="tm-service-description">
              Social Platforms
            </figcaption>
          </figure>
        </div>
        <div class="col-md-3 col-sm-6">
          <figure class="tm-services-img">
            <img src={services4} alt="welcome services" class="img-fluid" />
            <figcaption class="tm-service-description">New Media</figcaption>
          </figure>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="tm-section-header tm-section-header-small mb-5">
            Our unique approaches for you
          </h2>
        </div>
      </div>
      <div className="row tm-approach-row">
        <div className="col-md-6">
          <div className="tm-approach-box">
            <div className="tm-media tm-media-2 tm-media-v-center tm-solid-border">
              <i className="fab fa-4x fa-acquisitions-incorporated tm-service-icon"></i>
              <div>
                <p>
                  <a
                    rel="nofollow"
                    target="_parent"
                    href="https://templatemo.com/tm-542-new-vision"
                  >
                    New Vision
                  </a>{" "}
                  Template is provided by TemplateMo website for 100% free of
                  charge. You can use this CSS template for any purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tm-approach-box">
            <div className="tm-media tm-media-2 tm-media-v-center tm-solid-border">
              <i className="fas fa-4x fa-certificate tm-service-icon"></i>
              <div>
                <p>
                  Nam condimentum tortor id dui maximus, quis faucibus lacus
                  faucibus. Sed urna est, vulputate quis efficitur et, laoreet
                  nec mi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tm-approach-box">
            <div className="tm-media tm-media-2 tm-media-v-center tm-solid-border">
              <i className="fas fa-4x fa-chart-pie tm-service-icon"></i>
              <div>
                <p>
                  Nam condimentum tortor id dui maximus, quis faucibus lacus
                  faucibus. Sed urna est, vulputate quis efficitur et, laoreet
                  nec mi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tm-approach-box">
            <div className="tm-media tm-media-2 tm-media-v-center tm-solid-border">
              <i className="fas fa-4x fa-anchor tm-service-icon"></i>
              <div>
                <p>
                  Nam condimentum tortor id dui maximus, quis faucibus lacus
                  faucibus. Sed urna est, vulputate quis efficitur et, laoreet
                  nec mi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
