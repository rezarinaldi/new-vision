import React from "react";

import team1 from "../../assets/img/team-img-01.jpg";
import team2 from "../../assets/img/team-img-02.jpg";
import team3 from "../../assets/img/team-img-03.jpg";
import team4 from "../../assets/img/team-img-04.jpg";

export default function FeaturedCompany() {
  return (
    <section className="tm-featured">
      <div className="row">
        <div className="col-12">
          <h2 className="tm-section-header tm-section-header-small mb-3">
            Our Team Members
          </h2>
        </div>
      </div>

      <div className="grid tm-carousel">
        <figure className="effect-zoe">
          <img src={team1} alt="Featured Item" />
          <figcaption>
            <h2>John Stone</h2>
            <p className="icon-links">
              <a href="https://fb.com">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </p>
          </figcaption>
        </figure>
        <figure className="effect-zoe">
          <img src={team2} alt="Featured Item" />
          <figcaption>
            <h2>Jane Meldrum</h2>
            <p className="icon-links">
              <a href="https://fb.com">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </p>
          </figcaption>
        </figure>
        <figure class="effect-zoe">
          <img src={team3} alt="Featured Item" />
          <figcaption>
            <h2>Trevor Virtue</h2>
            <p class="icon-links">
              <a href="https://fb.com">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com">
                <i class="fab fa-instagram"></i>
              </a>
            </p>
          </figcaption>
        </figure>
        <figure class="effect-zoe">
          <img src={team4} alt="Featured Item" />
          <figcaption>
            <h2>Emily Moore</h2>
            <p class="icon-links">
              <a href="https://fb.com">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com">
                <i class="fab fa-instagram"></i>
              </a>
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
