import React, { Component } from "react";
import { connect } from "react-redux";
import fetchSeasonDetails from "./actions/fetchSeasonDetails";
import SeasonDetails from "./SeasonDetails";

class SeasonsButton extends Component {
  constructor(props) {
    super();
  }
  calculateSeason() {
    const numberOfSeasons = parseInt(this.props.seasonNumber);
    let tempHTML = [];
    for (let i = 1; i <= numberOfSeasons; i++) {
      tempHTML.push(
        <li
          onClick={e => {
            this.props.fetchSeasonDetails(i);
          }}
        >
          Season {i}
        </li>
      );
    }
    return tempHTML;
  }
  render() {
    return (
      <div>
        <ul className="list">{this.calculateSeason()}</ul>

        {this.props.seasonsData.detail && (
          <SeasonDetails seasonData={this.props.seasonsData.data} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    seasonsData: state.seasonsData
  };
};

export default connect(
  mapStateToProps,
  { fetchSeasonDetails }
)(SeasonsButton);
