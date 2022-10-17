import React from "react";

class Card extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Title: {data.id}</h1>
      </div>
    );
  }
}

export default Card;
