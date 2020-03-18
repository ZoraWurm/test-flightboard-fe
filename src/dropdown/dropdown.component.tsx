import React from 'react';

type LocationState = {
  value: string;
};

export class Dropdown extends React.Component<{}, LocationState> {
  constructor(props: any) {
    super(props);
    this.state = { value: 'TH13' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
    this.handleSubmit(event);
  }

  handleSubmit(event: any) {
    alert('Your Location is: ' + event.target.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your Location:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="TH13">TH13</option>
            <option value="OVAL">OVAL</option>
            <option value="MOIN">MOIN</option>
          </select>
        </label>
      </form>
    );
  }
}
