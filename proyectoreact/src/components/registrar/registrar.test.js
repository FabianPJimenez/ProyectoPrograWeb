import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Registrar from './Registrar';

describe('<Registrar />', () => {
  test('it should mount', () => {
    render(<Registrar />);
    
    const registrar = screen.getByTestId('Registrar');

    expect(registrar).toBeInTheDocument();
  });
});