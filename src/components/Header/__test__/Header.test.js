import { render,screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
    it('renders a heading with the same text passed to the component Header', () => {
        render(<Header title="Todo"/>);
        const headingElement = screen.getByText(/Todo/i);
        expect(headingElement).toBeInTheDocument();
    })
})


// Path: src/components/Header/__test__/Header.test.js