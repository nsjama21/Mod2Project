import React, { Component } from "react";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((reviews) => {
        this.setState({ reviews: reviews });
      });
  }

  render() {
    return (
      <>
        {this.state.reviews.map((review) => (
          <div>
            <h1>
              Title: {review.title}
            </h1>
            <h4>
              Review: {review.review}
            </h4>
            <img src={review.posterURL} alt="pic" width="200px" />
          </div>
        ))}
      </>
    );
  }
}

export default Reviews;