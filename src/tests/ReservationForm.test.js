import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ReservationForm from '../components/ReservationForm';

const mockDispatch = jest.fn();
const mockSetSelectedTime = jest.fn();

describe('ReservationForm', () => {
  test('renders ReservationForm component', () => {
    render(<ReservationForm times={[]} selectedTime="" setSelectedTime={mockSetSelectedTime} dispatch={mockDispatch} />);

    expect(screen.getByText(/Reserve a table/i)).toBeInTheDocument();
  });

  test('should display required error when value is invalid', async () => {
    render(<ReservationForm times={[]} selectedTime="" setSelectedTime={mockSetSelectedTime} dispatch={mockDispatch} />);
    fireEvent.submit(screen.getByRole('button', {name: /Submit/i}));

    expect(await screen.findAllByText(/required/i)).toHaveLength(2);
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
