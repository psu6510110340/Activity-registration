import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import Admincheck from './Admincheck';

    test('renders "รายชื่อผู้เข้าร่วมกิจกรรม" text', () => {
        render(<Admincheck />);
        const checkStatusButton = screen.getByText(/รายชื่อผู้เข้าร่วมกิจกรรม/i);
        expect(checkStatusButton).toBeInTheDocument();
    });



