import './main.css';
import 'rc-slider/assets/index.css';

import axios from 'axios';
import { useState, useEffect, ChangeEvent } from 'react';
import Slider from 'rc-slider';

import { ICardItem } from '../../types';
import MySelect from '../UI/MySelect';
import CardList from './cardsList/CardList';

const Main = () => {
  const [cards, setCards] = useState<ICardItem[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayedCards, setDisplayedCards] = useState<ICardItem[]>([]);
  const [startValueRange, setStartValueRange] = useState<number>(0);
  const [endValueRange, setEndValueRange] = useState<number>(1000);
  const [startRateRange, setStartRateRange] = useState<number>(0);
  const [endRateRange, setEndRateRange] = useState<number>(5);

  async function fetchProduct() {
    const response = await axios.get('https://fakestoreapi.com/products/');
    setCards(response.data);
    setDisplayedCards([...response.data]);
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  const sortCard: (sort: string) => void = (sort) => {
    setSelectedSort(sort);
    switch (sort) {
      case 'title':
        setDisplayedCards([...displayedCards].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case 'titleReversed':
        setDisplayedCards([...displayedCards].sort((a, b) => b.title.localeCompare(a.title)));
        break;
      case 'rating':
        setDisplayedCards([...displayedCards].sort((a, b) => a.price - b.price));
        break;
      case 'ratingReversed':
        setDisplayedCards([...displayedCards].sort((a, b) => b.price - a.price));
        break;
    }
  };

  const changeRangePrice = (value: number | Array<number>) => {
    if (Array.isArray(value)) {
      const [start, end] = value;
      setStartValueRange(start);
      setEndValueRange(end);
    }
  };

  const changeRangeRate = (value: number | Array<number>) => {
    if (Array.isArray(value)) {
      const [start, end] = value;
      setStartRateRange(start);
      setEndRateRange(end);
    }
  };

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('event', event);
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filteredCards = cards.filter(
      (card) =>
        card.title.toLowerCase().includes(query) &&
        card.price >= startValueRange &&
        card.price <= endValueRange &&
        startRateRange <= card.rating.rate &&
        endRateRange >= card.rating.rate
    );
    setDisplayedCards(filteredCards);
  }, [startValueRange, endValueRange, searchQuery, startRateRange, endRateRange]);

  console.log('displayedCards', displayedCards, endValueRange, startValueRange);
  return (
    <div className="main">
      <div className="main__filter">
        <input
          type="search"
          placeholder="Введите название товара"
          value={searchQuery}
          onChange={handleChangeQuery}
          autoFocus
        />
        <MySelect
          value={selectedSort}
          onChange={sortCard}
          defaultValue="Сортировка по"
          options={[
            { value: 'title', name: 'названию от А' },
            { value: 'titleReversed', name: 'названию от Я' },
            { value: 'rating', name: 'цене от самого дешевого' },
            { value: 'ratingReversed', name: 'цене от самого дорогого' },
          ]}
        />
        <div className="main__range">
          <p>Цена:</p>
          <p>
            От {startValueRange} до {endValueRange}{' '}
          </p>
          <Slider range value={[startValueRange, endValueRange]} min={0} max={1000} onChange={changeRangePrice} />
        </div>
        <div className="main__range">
          <p>Рейтинг:</p>
          <p>
            От {startRateRange} до {endRateRange}{' '}
          </p>
          <Slider range value={[startRateRange, endRateRange]} min={0} max={5} onChange={changeRangeRate} />
        </div>
      </div>
      <CardList card={displayedCards} />
    </div>
  );
};

export default Main;
