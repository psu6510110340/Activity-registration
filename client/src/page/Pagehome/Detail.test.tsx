import React from 'react';
import { render, screen } from '@testing-library/react';
import Detailpage from './Detail';

describe('Main Component', () => {
  test('renders Detail title', () => {
    render(<Detailpage />);
    const detailTitle = screen.getByText('รายละเอียด');
    expect(detailTitle).toBeInTheDocument();
  });

  test('renders button with correct text', () => {
    render(<Detailpage />);
    const button = screen.getByText('สมัคร');
    expect(button).toBeInTheDocument();
  });
});