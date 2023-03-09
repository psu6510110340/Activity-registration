import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import RegisterPage from './Register';

describe('RegisterPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders the registration form', () => {
    render(<RegisterPage />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
  });
})