import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';
import { ButtonVariantEnum, ButtonColorEnum, ButtonSizeEnum } from './Button.types';

describe('Running Test for Button', () => {
  test('Check Button Disabled', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeDisabled();
  });
  test('Check variant', () => {
    render(<Button variant={ButtonVariantEnum.Outlined}>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toHaveClass('Button__variant_outlined');
  });
  test('Check color', () => {
    render(<Button color={ButtonColorEnum.Primary}>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toHaveClass('Button__color_primary');
  });
  test('Check size', () => {
    render(<Button size={ButtonSizeEnum.Medium}>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toHaveClass('Button__size_large');
  });
});
