import React from 'react';
import './dropdown.style.css';

interface Props {
  handleChange: (value: string) => void;
}

export const Dropdown = (props: Props) => {
  const handleChange = (event: any) => {
    props.handleChange(event.target.value);
  };

  return (
    <form>
      <div>
        <select onChange={handleChange}>
          <option value="DEFAULT" disabled hidden>
            Location
          </option>
          <option value="TH13">TH13</option>
          <option value="OVAL">OVAL</option>
          <option value="MOIN">MOIN</option>
        </select>
      </div>
    </form>
  );
};
