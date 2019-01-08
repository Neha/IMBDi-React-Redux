import React, { Component } from "react";

class SeasonDetail extends Component {
  constructor(props) {
    super(props);
  }

  makeList(props) {
    let tempList = [];
    let episodesData = this.props.seasonData[0].data.Episodes;
    for (let val in episodesData) {
      tempList.push(
        <li>
          <h2>{episodesData[val].Title}</h2>
          <p>
            <span>Rating : </span>
            {episodesData[val].imdbRating}
          </p>
        </li>
      );
    }
    return tempList;
  }
  render() {
    return <ul className="contentDetails">{this.makeList()}</ul>;
  }
}

export default SeasonDetail;
