import { describe, expect, it } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import { fireEvent } from '@testing-library/react';

import CardList from './cardsList/CardList';
import App from '../../App';

describe('main section', async () => {
  it('correct message without carts', () => {
    render(
      <CardList
        card={[]}
        addToCart={() => console.log('ok')}
        removeFromCart={() => console.log('ok')}
        cart={['1', '2', '3']}
      />
    );
    expect(screen.getByText('Извините, совпадений не обнаружено!') as HTMLElement).toBeInTheDocument();
  });

  it('should change search value', async () => {
    const container = render(<App />);
    const searchbox = container.getByRole('searchbox');
    expect(searchbox).toBeInTheDocument();
    fireEvent.change(searchbox, {
      target: { value: 'Шар' },
    });
    expect(searchbox).toHaveValue('Шар');
  });

  it('change cards count after change value checkbox popular goods', async () => {
    const container = render(<App />);
    const checkbox = container.getByLabelText('Популярные товары');

    expect(await container.findAllByTestId('product-card')).toHaveLength(60);
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(await container.findAllByTestId('product-card')).toHaveLength(13);
  });

  it('unchecked/checked all color filter', async () => {
    const container = render(<App />);
    const checkbox = container.getByLabelText('Большой');
    const checkbox1 = container.getByLabelText('Средний');
    const checkbox2 = container.getByLabelText('Маленький');
    const cards = container.findAllByTestId('product-card');

    expect(await cards).toHaveLength(60);
    expect(checkbox).toBeChecked();
    expect(checkbox1).toBeChecked();
    expect(checkbox2).toBeChecked();
    fireEvent.click(checkbox);
    fireEvent.click(checkbox1);
    fireEvent.click(checkbox2);
    expect(checkbox).not.toBeChecked();
    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).not.toBeChecked();
    expect(await cards).not.toBe('');
    fireEvent.click(checkbox);
    fireEvent.click(checkbox1);
    fireEvent.click(checkbox2);
    expect(await cards).toHaveLength(60);
  });

  it('check working button reset ', async () => {
    const container = render(<App />);
    const button = container.getByRole('button', { name: /очистить/i });
    const checkbox = container.getByLabelText('Популярные товары');

    fireEvent.click(button);
    fireEvent.click(checkbox);
    expect(await container.findAllByTestId('product-card')).toHaveLength(13);
    fireEvent.click(button);
    expect(await container.findAllByTestId('product-card')).toHaveLength(60);
  });
});
