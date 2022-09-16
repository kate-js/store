import { describe, expect, it } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { render } from './utils/test-utils';

import App from './App';

describe('App.tsx', async () => {
  it('should add and remove items to cart', () => {
    const container = render(<App />);

    const counter = container.getByTestId('cart-counter');
    expect(counter).toHaveTextContent('0');
    const button = container.getByTestId('button-1');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(counter).toHaveTextContent('1');
    fireEvent.click(button);
    expect(counter).toHaveTextContent('0');
  });
});
