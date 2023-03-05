import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Announcement';

describe('Main Component', () => {
  test('renders announcement title', () => {
    render(<Main />);
    const announcementTitle = screen.getByText('TAKE CAMP🌍');
    expect(announcementTitle).toBeInTheDocument();
  });

  test('renders button with correct text', () => {
    render(<Main />);
    const buttonElement = screen.getByRole('link', { name: 'COMMING TO TAKECAMP' });
    expect(buttonElement).toBeInTheDocument();
  });

  test('removes user data from local storage', () => {
    localStorage.setItem('user', 'test user data');
    render(<Main />);
    expect(localStorage.getItem('user')).toBeNull();
  });
});
