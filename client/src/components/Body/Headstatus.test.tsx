import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import ComplexGrid from './Headstatus';


    test('renders user name if user data exists in local storage', () => {
      const user = { username: 'testuser' };
      localStorage.setItem('user', JSON.stringify(user));
      render(<ComplexGrid />);
      const userNameElement = screen.getByText(user.username);
      expect(userNameElement).toBeInTheDocument();
    });
    
    test('renders "กิจกรรมที่เข้าร่วม" button', () => {
        render(<ComplexGrid />);
        const checkStatusButton = screen.getByText(/กิจกรรมที่เข้าร่วม/i);
        expect(checkStatusButton).toBeInTheDocument();
    });
      
    
    test('renders "รอดำเนินการ กำลังตรวจสอบ" button', () => {
        render(<ComplexGrid />);
        const checkStatusButton = screen.getByText(/รอดำเนินการ กำลังตรวจสอบ/i);
        expect(checkStatusButton).toBeInTheDocument();
    });
