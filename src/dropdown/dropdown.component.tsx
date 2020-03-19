import React from 'react';
import './dropdown.style.css';

type LocationState = {
  value: string;
};

export class Dropdown extends React.Component<{}, LocationState> {
  constructor(props: any) {
    super(props);
    this.state = { value: 'DEFAULT' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
    this.handleSubmit(event);
  }

  handleSubmit(event: any) {
    console.log('The current Location is: ' + event.target.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="DEFAULT" selected disabled hidden>
              Location
            </option>
            <option value="TH13">TH13</option>
            <option value="OVAL">OVAL</option>
            <option value="MOIN">MOIN</option>
          </select>
        </div>
      </form>
    );
  }
}
