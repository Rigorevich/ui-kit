import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import { Input } from './Input';

describe('Running Test for Input', () => {
  test('Check placeholder in Input', () => {
    render(<Input placeholder="Placeholder" />);
    expect(screen.getByPlaceholderText('Placeholder')).toHaveAttribute('placeholder', 'Placeholder');
  });

  test('renders the Input component', async () => {
    render(<Input role="input" placeholder="Placeholder" />);
    const input = screen.getByRole('input') as HTMLInputElement;
    await userEvent.type(input, 'Hello world!');
    await waitFor(() => expect(input.value).toBe('Hello world!'));
  });

  test('renders label if provided', () => {
    const label = 'Label';
    render(<Input label={label} />);
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  test('renders description if provided', () => {
    const description = 'Description';
    render(<Input description={description} />);
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
