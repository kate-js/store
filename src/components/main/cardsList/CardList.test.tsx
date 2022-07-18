import { describe, expect, it } from 'vitest';
import { render, screen } from '../../../utils/test-utils';
import CardList from './CardList';

describe('card list', async () => {
  it('should error', () => {
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
});
