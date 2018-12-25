import React, { Component } from "react";
import SeasonsButton from "./SeasonsButton";
import { connect } from "react-redux";
import fetchData from "./actions/fetchData";

class LandingPage extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  getData() {
    return this.props.data.map(val => {
      return (
        <div>
          <section className="Left">
            <h1>{val.data.Title}</h1>
            <figure>
              <img src={val.data.Poster} />
            </figure>
          </section>
          <section className="right">
            <p>
              <span>Rating :</span> {val.data.imdbRating}
            </p>
            <p>
              <span>Released Date :</span> {val.data.Released}
            </p>
            <p>
              <span>Writer :</span> {val.data.Writer}
            </p>
            <p>
              <span>Genre :</span> {val.data.Genre}
            </p>
            <SeasonsButton seasonNumber={val.data.totalSeasons} />
          </section>
        </div>
      );
    });
  }

  render() {
    return <div>{this.getData()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(LandingPage);
