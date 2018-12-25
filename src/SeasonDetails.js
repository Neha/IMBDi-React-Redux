import React, { Component } from "react";

class SeasonDetail extends Component {
  constructor(props) {
    super(props);
  }

  makeList(props) {
    return this.props.seasonData.map((val, key) => {
      return val.data.Episodes.map((val, key) => {
        const { Title, imdbRating } = val;
        return (
          <li key={key}>
            <h2>{Title}</h2>
            <p>
              <span>Rating : </span>
              {imdbRating}
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
