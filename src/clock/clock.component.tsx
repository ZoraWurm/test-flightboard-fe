import React from 'react';

type ClockState = {
  time: Date;
};

class Clock extends React.Component<{}, ClockState> {
  constructor(props: any) {
    super(props);
    this.state = { time: new Date() };
  }

  currentTime() {
    this.setState({
      time: new Date(),
    });
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return <span>{this.state.time.toLocaleTimeString()}</span>;
  }
}

export default Clock;
