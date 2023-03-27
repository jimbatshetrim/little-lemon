import { render, screen } from "@testing-library/react";
import Reservations from '../components/reservations';

test('Renders the Reservations heading', () => {
	render(<Reservations />);
	const headingElement = screen.getByText('Reserve A Table');
	expect(headingElement).toBeInTheDocument();
})
