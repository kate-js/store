import './main.css';
import 'rc-slider/assets/index.css';

import { useState, useEffect, ChangeEvent } from 'react';
import Slider from 'rc-slider';

import { ICardItem } from '../../types';
import MySelect from '../UI/MySelect';
import CardList from './cardsList/CardList';
import data from '../../data/products';

const Main = () => {
  const [cards, setCards] = useState<ICardItem[]>(data);
  const [selectedSort, setSelectedSort] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayedCards, setDisplayedCards] = useState<ICardItem[]>(data);
  const [startValueRange, setStartValueRange] = useState<number>(1900);
  const [endValueRange, setEndValueRange] = useState<number>(2022);
  const [startRateRange, setStartRateRange] = useState<number>(0);
  const [endRateRange, setEndRateRange] = useState<number>(50);

  // useEffect(() => {
  //   setCards(data);
  //   setDisplayedCards(data);
  // }, []);

  const sortCard: (sort: string) => void = (sort) => {
    setSelectedSort(sort);
    switch (sort) {
      case 'title':
        setDisplayedCards([...displayedCards].sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case 'titleReversed':
        setDisplayedCards([...displayedCards].sort((a, b) => b.name.localeCompare(a.name)));
        break;
      case 'rating':
        setDisplayedCards([...displayedCards].sort((a, b) => parseInt(a.year) - parseInt(b.year)));
        break;
      case 'ratingReversed':
        setDisplayedCards([...displayedCards].sort((a, b) => parseInt(b.year) - parseInt(a.year)));
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
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filteredCards = cards.filter(
      (card) =>
        card.name.toLowerCase().includes(query) &&
        parseInt(card.year) >= startValueRange &&
        parseInt(card.year) <= endValueRange &&
        startRateRange <= parseInt(card.count) &&
        endRateRange >= parseInt(card.count)
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
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: ' по названию от А до Я' },
            { value: 'titleReversed', name: ' по названию от Я до A' },
            { value: 'rating', name: 'по году выпуска по возрастанию' },
            { value: 'ratingReversed', name: 'по году выпуска по убыванию' },
          ]}
        />
        <div className="main__range">
          <p>Цена:</p>
          <p>
            От {startValueRange} до {endValueRange}{' '}
          </p>
          <Slider range value={[startValueRange, endValueRange]} min={1900} max={2022} onChange={changeRangePrice} />
        </div>
        <div className="main__range">
          <p>Рейтинг:</p>
          <p>
            От {startRateRange} до {endRateRange}{' '}
          </p>
          <Slider range value={[startRateRange, endRateRange]} min={0} max={20} onChange={changeRangeRate} />
        </div>
      </div>
      <CardList card={displayedCards} />
    </div>
  );
};

export default Main;
