import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';

describe('App', () => {
  it('renders snapshot', () =>{
    render(<App />);

    screen.debug();

    expect(screen.getByText('React GraphQL GitHub Client')).toBeInTheDocument();
  });
});
