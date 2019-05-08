import React from 'react'

class Counter extends React.Component {

  constructor(props) {
      super(props);
      this.state = { count: 6 };
  }

  incrementCount = () => {
  this.setState(
          { count: this.state.count + 1 }
      );
};

  render() {
      return (
          <h1 onClick={ this.incrementCount }>
      Clicks: { this.state.count }
    </h1>
      );
  }
}

export default Counter