import React from 'react';

type LocationState = {
  location: string;
};

export class Dropdown extends React.Component<{}, LocationState> {
  constructor(props: any) {
    super(props);
    this.state = { location: 'TH13' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ location: event.target.location });
  }

  handleSubmit(event: any) {
    // alert('Your favorite flavor is: ' + this.state.location);
    // TODO - Display Rooms
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your Location:
          <select location={this.state.location} onChange={this.handleChange}>
            <option location="TH13">TH13</option>
            <option location="OVAL">OVAL</option>
            <option location="MOIN">MOIN</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
