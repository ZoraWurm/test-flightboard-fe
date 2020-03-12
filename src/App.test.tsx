import React from 'react';
import { render } from '@testing-library/react';
import Mainpage from './Mainpage';

test('renders learn react link', () => {
  const { getByText } = render(<Mainpage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
