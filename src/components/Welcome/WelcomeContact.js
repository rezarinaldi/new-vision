import React from "react";

export default function WelcomeContact() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="tm-section-header tm-header-floating">
            Contact Information
          </h2>
        </div>
      </div>

      <div className="row tm-welcome-row">
        <div className="col-lg-6 mb-5 tm-contact-box">
          <div className="tm-contact-form-wrap">
            <form
              id="contact-form"
              action="javascript:;"
              method="post"
              className="tm-contact-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  id="contact_name"
                  name="contact_name"
                  className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                  placeholder="Your Email"
                  required=""
                />
              </div>

              <div className="form-group">
                <textarea
                  rows="4"
                  id="contact_message"
                  name="contact_message"
                  className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                  placeholder="Message..."
                  required=""
                ></textarea>
              </div>

              <div className="form-group mb-0">
                <button
                  type="submit"
                  className="btn rounded-0 d-block ml-auto tm-btn-primary"
                >
                  Send It Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 mb-5 tm-contact-box">
          <div className="tm-double-border-1 tm-border-gray">
            <div className="tm-double-border-2 tm-border-gray tm-box-pad">
              <p className="mb-4">
                <a
                  rel="nofollow"
                  target="_parent"
                  href="https://templatemo.com/tm-542-new-vision"
                >
                  New Vision
                </a>{" "}
                HTML Template is free to download instantly from TemplateMo
                website. In dapibus dui vitae urna fringilla volupat.
              </p>
              <p className="mb-3">
                120-240 Rio de Janeiro - State of Rio de Janeiro, Brazil
              </p>
              <p className="mb-1">
                Tel:{" "}
                <a href="tel:0900100910" className="tm-link">
                  090-010-0910
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@company.com" className="tm-link">
                  info@company.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
