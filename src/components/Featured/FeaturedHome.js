import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCarousels } from "../../services/CarouselService";

class FeaturedHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      carousels: null,
      error: null,
    };
  }

  componentDidMount() {
    this.props.fetchCarousels();
  }

  render() {
    return (
      <section className="tm-featured">
        <div className="row">
          <div className="col-12">
            <h2 className="tm-section-header tm-section-header-small">
              Featured Carousel Items
            </h2>
          </div>
        </div>

        {!this.props.carousels.loading ? (
          <div className="grid tm-carousel">
            {this.props.carousels.carousels.map((carousel) => (
              <figure className="effect-honey" key={carousel.id}>
                <img src={carousel.image} alt="Featured Item" />
                <figcaption>
                  <h4>
                    <i>{carousel.caption}</i>
                  </h4>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carousels: state.carousels,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCarousels: () => dispatch(fetchCarousels()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedHome);
