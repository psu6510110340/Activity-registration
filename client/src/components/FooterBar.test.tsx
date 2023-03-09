import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import FooterBar from './FooterBar';
    
    test('renders "Contact :" text', () => {
        render(<FooterBar />);
        const checkStatusText = screen.getByText(/Contact :/i);
        expect(checkStatusText).toBeInTheDocument();
    });