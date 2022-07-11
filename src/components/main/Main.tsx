import axios from 'axios';
import { useState, useEffect } from 'react';
import { ICardItem } from '../../types';
import MySelect from '../UI/MySelect';
import CardList from './cardsList/CardList';
import './main.css';

const Main = () => {
  const [cards, setCards] = useState<ICardItem[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>('');

  async function fetchProduct() {
    const response = await axios.get('https://fakestoreapi.com/products/');
    console.log('response.data', response.data);
    setCards(response.data);
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  const sortPost: (sort: string) => void = (sort) => {
    setSelectedSort(sort);
    switch (sort) {
      case 'title':
        setCards([...cards].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case 'titleReversed':
        setCards([...cards].sort((a, b) => b.title.localeCompare(a.title)));
        break;
      case 'rating':
        setCards([...cards].sort((a, b) => a.price - b.price));
        break;
      case 'ratingReversed':
        setCards([...cards].sort((a, b) => b.price - a.price));
        break;
    }
  };

  return (
    <div className='main'>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue='Сортировка по'
          options={[
            { value: 'title', name: 'названию от А' },
            { value: 'titleReversed', name: 'названию от Я' },
            { value: 'rating', name: 'цене от самого дешевого' },
            { value: 'ratingReversed', name: 'цене от самого дорогого' },
          ]}
        />
      </div>

      {/* <form className='main__form'>
        <label>
          Найди нужный товар
          <input type='search' />
        </label>
        
      </form> */}
      <CardList card={cards} />
    </div>
  );
};

export default Main;
