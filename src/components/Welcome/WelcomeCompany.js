import React from "react";

import Phasellus from "../../assets/img/img-3x1-01.jpg";
import Quisque from "../../assets/img/img-3x1-02.jpg";

export default function WelcomeCompany() {
  return (
    <section className="tm-welcome">
      <div className="row">
        <div className="col-12">
          <h2 className="tm-section-header tm-header-floating">
            About Our Company
          </h2>
        </div>
      </div>

      <div className="row tm-welcome-row">
        <div className="tm-about">
          <div className="col-12 tm-media tm-media-v-center">
            <i className="fab fa-5x fa-accusoft tm-about-icon"></i>
            <div>
              <p>
                <a
                  rel="nofollow"
                  target="_parent"
                  href="https://templatemo.com/tm-542-new-vision"
                >
                  New Vision HTML Template
                </a>{" "}
                is provided by TemplateMo for 100% free of charge. Vestibulum
                consectetur urna augue, in sagittis mi sodales ut. Maecenas at
                quam et ligula vulputate commodo. Integer tempor nec velit ut
                pulvinar. In hac habitasse platea dictumst.
              </p>
            </div>
          </div>
          <div className="col-12 tm-media tm-media-v-center">
            <i className="fas fa-5x fa-air-freshener tm-about-icon"></i>
            <div>
              <p>
                Curabitur et viverra purus, in ornare sem. Donec eu imperdiet
                felis, sed interdum leo. Mauris nisl mi, bibendum eu venenatis
                at, condimentum et dui. Proin mi enim, dapibus at metus semper,
                hendrerit faucibus nisi.
              </p>
            </div>
          </div>
          <div className="col-12 tm-media tm-media-v-center">
            <i className="fas fa-5x fa-fire-alt tm-about-icon"></i>
            <div>
              <p>
                Duis accumsan dolor feugiat dapibus ultrices. Vestibulum
                consectetur urna augue, in sagittis mi sodales ut. Maecenas at
                quam et ligula vulputate commodo. Integer tempor nec velit ut
                pulvinar. In hac habitasse platea dictumst.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row tm-welcome-row-2">
        <div className="col-12">
          <h2 className="tm-section-header tm-section-header-small mb-4">
            Our Background and Environment
          </h2>
        </div>
        <div className="col-md-6">
          <div className="tm-about-1">
            <img
              src={Phasellus}
              alt="welcome company"
              className="img-fluid mb-5"
            />
            <p className="tm-article-text">
              Phasellus blandit tortor vel odio hendrerit, eleifend ultricies
              odio temport. Etiam euismod, lectus convallis efficitur convallis,
              risus orci auctor orci.
            </p>
            <p>
              Cras imperdiet in ligula sit amet fringilla. Morbi posuere mattis
              ornare. Nunc iaculis porta ipsum. Aliquam vehicula egestas diam
              auctor ornare.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tm-about-1">
            <img
              src={Quisque}
              alt="welcome company"
              className="img-fluid mb-5"
            />
            <p className="tm-article-text">
              Quisque sed tortor sed metus vehicula pulvinar vel dictum tortor.
              Nivamus eu posuere arcu. Vivamus vel urna id mi congue convallis
              at sed augue.
            </p>
            <p>
              Praesent venenatis risus aliquet semper porta. Maecenas mollis
              nisi non hendrerit finibus. Ut eu convallis massa. Sed imperdiet
              arcu non egestas elementum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
