import React from 'react';

class Clock extends React.Component{
  constructor() {
    super();
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.ticker = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  tick() {
    const time = new Date();
    this.setState( {time} );
  }

  render() {
    const { time } = this.state;
    const dayMap = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return (
      <div className="clock-container">
        <div className="row">
          <h1>Time: </h1>
          <h2>
              {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
          </h2>
        </div>
        <div className="row">
          <h1>Date: </h1>
          <h2>
              {dayMap[time.getDay()]} {time.getMonth()} / {time.getDate()} / {time.getFullYear()}
          </h2>
        </div>
      </div>
    );
  }
}

export default Clock;
