import React, { Component } from "react";
import SeasonsButton from "./SeasonsButton";
import { connect } from "react-redux";
import fetchData from "./actions/fetchData";

class LandingPage extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  getData() {
    return this.props.data.map((val, key) => {
      const {
        imdbRating,
        Released,
        Writer,
        Genre,
        Poster,
        Title,
        totalSeasons
      } = val.data;
      return (
        <div key={key}>
          <section className="Left">
            <h1>{Title}</h1>
            <figure>
              <img src={Poster} />
            </figure>
          </section>
          <section className="right">
            <p>
              <span>Rating :</span> {imdbRating}
            </p>
            <p>
              <span>Released Date :</span> {Released}
            </p>
            <p>
              <span>Writer :</span> {Writer}
            </p>
            <p>
              <span>Genre :</span> {Genre}
            </p>
            <SeasonsButton seasonNumber={totalSeasons} />
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
