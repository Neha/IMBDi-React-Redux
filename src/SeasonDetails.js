import React, { Component } from "react";

class SeasonDetail extends Component {
  constructor(props) {
    super(props);
  }

  makeList(props) {
    let tempList = [];
    for (let val in this.props.seasonData[0].data.Episodes) {
      tempList.push(
        <li>
          <h2>{this.props.seasonData[0].data.Episodes[val].Title}</h2>
          <p>
            <span>Rating : </span>
            {this.props.seasonData[0].data.Episodes[val].imdbRating}
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
