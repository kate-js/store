import { describe, expect, it } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import MySelect from './MySelect';

describe('Select', async () => {
  it('should render the select', () => {
    render(
      <MySelect
        options={[{ value: 'title', name: ' по названию от А до Я' }]}
        defaultValue="Сортировка"
        value="По возрастанию"
        onChange={() => console.log('ok')}
      />
    );
    expect(screen.getByText('Сортировка') as HTMLElement).toBeInTheDocument();
  });

  it('should render array options', () => {
    render(
      <MySelect
        options={[
          { value: 'title', name: '1' },
          { value: 'titleReversed', name: '2' },
          { value: 'rating', name: '3' },
          { value: 'ratingReversed', name: '4' },
        ]}
        defaultValue="Сортировка"
        value="По возрастанию"
        onChange={() => console.log('ok')}
      />
    );
    expect(screen.getByRole('option', { name: '1' }) as HTMLElement).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '2' }) as HTMLElement).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '3' }) as HTMLElement).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '4' }) as HTMLElement).toBeInTheDocument();
  });
});
