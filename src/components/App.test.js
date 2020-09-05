import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';

describe('App', () => {
  it('renders snapshot', () =>{
    const { container } = render(
      <App />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
