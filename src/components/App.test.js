import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';

describe('App', () => {
  it('renders snapshot', () =>{
    const { container } = render(<App />);

    screen.debug();

    expect(container.firstChild).toMatchSnapshot();
  });
});
