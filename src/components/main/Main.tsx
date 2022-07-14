import './main.css';
import 'rc-slider/assets/index.css';

import { useState, useEffect, ChangeEvent } from 'react';
import Slider from 'rc-slider';

import { Colors, ICardItem, Manufacturer, Size } from '../../types';
import MySelect from '../UI/MySelect';
import CardList from './cardsList/CardList';
import data from '../../data/products';
import MyButton from '../UI/button/MyButton';

const COLORS = {
  Yellow: 'желтый',
  Green: 'зелёный',
  White: 'белый',
  Blue: 'синий',
  Red: 'красный',
};

const SIZE = {
  big: 'большой',
  middle: 'средний',
  little: 'малый',
};

const MANUFACTURER = {
  snow: 'ООО Снегурочка',
  robin: 'ООО Малиновка',
  ivan: 'ООО Иванушка',
};

const Main = () => {
  const [cards, setCards] = useState<ICardItem[]>(data);
  const [selectedSort, setSelectedSort] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayedCards, setDisplayedCards] = useState<ICardItem[]>(data);
  const [startValueRange, setStartValueRange] = useState<number>(1930);
  const [endValueRange, setEndValueRange] = useState<number>(2022);
  const [startRateRange, setStartRateRange] = useState<number>(0);
  const [endRateRange, setEndRateRange] = useState<number>(20);
  const [favorite, setFavorite] = useState(false);
  const [color, setColor] = useState<Colors>({
    Yellow: true,
    Green: true,
    White: true,
    Blue: true,
    Red: true,
  });
  const [size, setSize] = useState<Size>({
    big: true,
    middle: true,
    little: true,
  });
  const [manufacturer, setManufacturer] = useState<Manufacturer>({
    snow: true,
    robin: true,
    ivan: true,
  });

  useEffect(() => {
    sortCard(selectedSort);
  }, [displayedCards]);

  useEffect(() => {
    const color = localStorage.getItem('Color');
    if (color) {
      setColor(JSON.parse(color));
    }
    const manufacturer = localStorage.getItem('Manufacturer');
    if (manufacturer) {
      setManufacturer(JSON.parse(manufacturer));
    }
    const size = localStorage.getItem('Size');
    if (size) {
      setSize(JSON.parse(size));
    }
    const favorite = JSON.parse(String(localStorage.getItem('Favorite')));
    setFavorite(favorite);

    const endRateRange = JSON.parse(String(localStorage.getItem('EndRateRange')));
    setEndRateRange(endRateRange);

    const startRateRange = JSON.parse(String(localStorage.getItem('StartRateRange')));
    setStartRateRange(startRateRange);

    const endValueRange = JSON.parse(String(localStorage.getItem('EndValueRange')));
    setEndValueRange(endValueRange);

    const startValueRange = JSON.parse(String(localStorage.getItem('StartValueRange')));
    setStartValueRange(startValueRange);

    const selectedSort = JSON.parse(String(localStorage.getItem('SelectedSort')));
    setSelectedSort(selectedSort);
  }, []);

  useEffect(() => {
    localStorage.setItem('Color', JSON.stringify(color));
    localStorage.setItem('Manufacturer', JSON.stringify(manufacturer));
    localStorage.setItem('Size', JSON.stringify(size));
    localStorage.setItem('Favorite', JSON.stringify(favorite));
    localStorage.setItem('EndRateRange', JSON.stringify(endRateRange));
    localStorage.setItem('StartRateRange', JSON.stringify(startRateRange));
    localStorage.setItem('EndValueRange', JSON.stringify(endValueRange));
    localStorage.setItem('StartValueRange', JSON.stringify(startValueRange));
    localStorage.setItem('SelectedSort', JSON.stringify(selectedSort));
  }, [color, manufacturer, size, favorite, endRateRange, startRateRange, endValueRange, startValueRange, selectedSort]);

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

  const changeColor = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setColor((prevColors) => {
      return {
        ...prevColors,
        [value]: prevColors[value as keyof Colors] ? false : true,
      };
    });
  };

  const changeSize = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.id;
    setSize((prevColors) => {
      return {
        ...prevColors,
        [value]: prevColors[value as keyof Size] ? false : true,
      };
    });
  };

  const changeManufacturer = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.id;
    setManufacturer((prevColors) => {
      return {
        ...prevColors,
        [value]: prevColors[value as keyof Manufacturer] ? false : true,
      };
    });
  };

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const colors: Array<string> = (Object.keys(color) as Array<keyof typeof color>).reduce((acc, key) => {
      if (color[key] === true) {
        (acc as string[]).push(COLORS[key]);
      }
      return acc;
    }, []);

    const sizes: Array<string> = (Object.keys(size) as Array<keyof typeof size>).reduce((acc, key) => {
      if (size[key] === true) {
        (acc as string[]).push(SIZE[key]);
      }
      return acc;
    }, []);

    const manufacturers: Array<string> = (Object.keys(manufacturer) as Array<keyof typeof manufacturer>).reduce(
      (acc, key) => {
        if (manufacturer[key] === true) {
          (acc as string[]).push(MANUFACTURER[key]);
        }
        return acc;
      },
      []
    );

    const filteredCards = cards.filter(
      (card) =>
        card.name.toLowerCase().includes(query) &&
        parseInt(card.year) >= startValueRange &&
        parseInt(card.year) <= endValueRange &&
        startRateRange <= parseInt(card.count) &&
        endRateRange >= parseInt(card.count) &&
        colors.includes(card.color) &&
        sizes.includes(card.size) &&
        manufacturers.includes(card.manufacturer)
    );
    setDisplayedCards(filteredCards);
  }, [startValueRange, endValueRange, searchQuery, startRateRange, endRateRange, color, size, manufacturer]);

  const cleanFilters = () => {
    setStartValueRange(1930);
    setEndValueRange(2022);
    setStartRateRange(0);
    setEndRateRange(20);
    setColor({
      Yellow: true,
      Green: true,
      White: true,
      Blue: true,
      Red: true,
    });
    setFavorite(false);
    setSize({
      big: true,
      middle: true,
      little: true,
    });
    setManufacturer({
      snow: true,
      robin: true,
      ivan: true,
    });
    localStorage.clear();
    localStorage.setItem('SelectedSort', '');
    setSelectedSort(String(localStorage.getItem('SelectedSort')));
  };

  const changeFavorite = () => {
    if (favorite) {
      setDisplayedCards(cards);
      setFavorite(false);
    } else {
      setDisplayedCards([...displayedCards].filter((card) => card.favorite === true));
      setFavorite(true);
    }
  };

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
          <p>Дата выхода на рынок:</p>
          <p>
            От {startValueRange} до {endValueRange}{' '}
          </p>
          <Slider range value={[startValueRange, endValueRange]} min={1930} max={2022} onChange={changeRangePrice} />
        </div>
        <div className="main__range">
          <p>Количество:</p>
          <p>
            От {startRateRange} до {endRateRange}{' '}
          </p>
          <Slider range value={[startRateRange, endRateRange]} min={0} max={20} onChange={changeRangeRate} />
        </div>
        <div className="main__checkbox">
          <p>Цвет:</p>
          <input
            type="checkbox"
            id="Yellow"
            name="Yellow"
            checked={!!color.Yellow}
            onChange={changeColor}
            value="Yellow"
          />
          <label htmlFor="Yellow">Желтый</label>
          <div>
            <input
              type="checkbox"
              id="Green"
              name="Green"
              value="Green"
              checked={!!color.Green}
              onChange={changeColor}
            />
            <label htmlFor="Green">Зеленый</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="White"
              name="White"
              value="White"
              checked={!!color.White}
              onChange={changeColor}
            />
            <label htmlFor="White">Белый</label>
          </div>
          <div>
            <input type="checkbox" id="Blue" name="Blue" value="Blue" checked={!!color.Blue} onChange={changeColor} />
            <label htmlFor="Blue">Синий</label>
          </div>
          <div>
            <input type="checkbox" id="Red" name="Red" value="Red" checked={!!color.Red} onChange={changeColor} />
            <label htmlFor="Red">Красный</label>
          </div>
        </div>
        <div className="main__checkbox">
          <input type="checkbox" id="favorite" name="favorite" checked={favorite} onChange={changeFavorite} />
          <label htmlFor="favorite">Популярные товары</label>
        </div>
        <div>
          <div className="main__checkbox">
            <p>Размер:</p>
            <div>
              <input type="checkbox" id="big" name="big" checked={!!size.big} onChange={changeSize} />
              <label htmlFor="big">Большой</label>
            </div>
            <div>
              <input type="checkbox" id="middle" name="middle" checked={!!size.middle} onChange={changeSize} />
              <label htmlFor="middle">Средний</label>
            </div>
            <div>
              <input type="checkbox" id="little" name="little" checked={!!size.little} onChange={changeSize} />
              <label htmlFor="little">Маленький</label>
            </div>
          </div>
        </div>
        <div className="main__checkbox">
          <p>Производитель:</p>
          <div>
            <input type="checkbox" id="snow" name="snow" checked={!!manufacturer.snow} onChange={changeManufacturer} />
            <label htmlFor="snow">ООО Снегурочка</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="robin"
              name="robin"
              checked={!!manufacturer.robin}
              onChange={changeManufacturer}
            />
            <label htmlFor="robin">ООО Малиновка</label>
          </div>
          <div>
            <input type="checkbox" id="ivan" name="ivan" checked={!!manufacturer.ivan} onChange={changeManufacturer} />
            <label htmlFor="ivan">ООО Иванушка</label>
          </div>
        </div>
        <MyButton onClick={cleanFilters}>Очистить</MyButton>
      </div>
      <CardList card={displayedCards} />
    </div>
  );
};

export default Main;
