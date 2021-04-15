import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../../services/PostService";

class WelcomeHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: null,
      error: null,
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <section className="tm-welcome">
        <div className="row">
          <div className="col-12">
            <h2 className="tm-section-header tm-header-floating">
              Welcome to New Vision
            </h2>
          </div>
        </div>

        {!this.props.posts.loading ? (
          <div className="row tm-welcome-row">
            {this.props.posts.posts.map((post) => (
              <article className="col-lg-6 tm-media" key={post.id}>
                <img
                  src={post.image}
                  alt="welcome home"
                  className="img-fluid tm-media-img"
                />
                <div className="tm-media-body">
                  <a href="#" className="tm-article-link">
                    <h3 className="tm-article-title text-uppercase">
                      {post.title}
                    </h3>
                  </a>
                  <p>{post.content}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}

        <div className="row tm-welcome-row-2">
          <div className="col-lg-4 tm-dotted-box-container">
            <article className="tm-dotted-box">
              <i className="fas fa-3x fa-binoculars tm-article-icon"></i>
              <h3 className="tm-article-title">Template Usage</h3>
              <p className="tm-article-text">
                You can feel free to edit and use New Vision template for your
                commercial websites. Title color is #333
              </p>
              <a className="tm-btn tm-btn-rounded tm-article-link" href="#">
                More Details
              </a>
            </article>
          </div>
          <div className="col-lg-4 tm-dotted-box-container">
            <article className="tm-dotted-box">
              <i className="fas fa-3x fa-microscope tm-article-icon"></i>
              <h3 className="tm-article-title">New Vision</h3>
              <p className="tm-article-text">
                <a
                  rel="nofollow"
                  target="_parent"
                  href="https://templatemo.com/tm-542-new-vision"
                >
                  New Vision
                </a>{" "}
                comes with 4 different HTML pages and provided free of charge by
                TemplateMo. You can add more pages if you need. Text color is
                #666
              </p>
            </article>
          </div>
          <div className="col-lg-4 tm-dotted-box-container">
            <article className="tm-dotted-box">
              <i className="fas fa-3x fa-glasses tm-article-icon"></i>
              <h3 className="tm-article-title">Download Sites</h3>
              <p className="tm-article-text">
                Do not re-distribute our template ZIP file on your website. Or
                contact us first. Button color is #C99
              </p>
              <a className="tm-btn tm-article-link" href="#">
                Read More...
              </a>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeHome);
