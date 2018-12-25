import React, { Component } from "react";

class SeasonDetail extends Component {
  constructor(props) {
    super(props);
  }

  makeList(props) {
    console.log(this.props.seasonData);
    return this.props.seasonData.map((val, key) => {
      return val.data.Episodes.map((val, key) => {
        return (
          <li key={key}>
            <h2>{val.Title}</h2>
            <p>
              <span>Rating : </span>
              {val.imdbRating}
            </p>
          </li>
        );
      });
    });
  }
  render() {
    return <ul className="contentDetails">{this.makeList()}</ul>;
  }
}

export default SeasonDetail;
