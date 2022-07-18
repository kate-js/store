import { describe, expect, it } from 'vitest';
import { render, screen } from '../../../../utils/test-utils';
import CardItem from './CardItem';

describe('cart', async () => {
  it('check item value button from cart', () => {
    render(
      <CardItem
        card={{
          num: '1',
          name: 'boll',
          count: '4',
          year: '2022',
          shape: 'boll',
          color: 'red',
          size: 'big',
          manufacturer: 'jfjfj',
          favorite: false,
        }}
        addToCart={() => console.log('ok')}
        removeFromCart={() => console.log('ok')}
        cart={['1']}
      />
    );

    expect(screen.getByText('В корзине') as HTMLElement).toBeInTheDocument();
  });
});
