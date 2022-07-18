export interface ICardItem {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  manufacturer: string;
  favorite: boolean;
  image: string;
}

export interface ICard {
  card: ICardItem[];
}

export interface Card {
  card: {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    manufacturer: string;
    favorite: boolean;
    image: string;
  };
}

export interface IMySelect {
  options: IOption[];
  defaultValue: string;
  value: string;
  onChange: (sort: string) => void;
}

export interface IOption {
  name: string;
  value: string;
}

export interface IResponse {
  data: ICardItem[];
  status: number;
  statusText: string;
}

export interface Colors {
  Yellow: boolean;
  Green: boolean;
  White: boolean;
  Blue: boolean;
  Red: boolean;
}

export interface Size {
  big: boolean;
  middle: boolean;
  little: boolean;
}

export interface Manufacturer {
  snow: boolean;
  robin: boolean;
  ivan: boolean;
}

export type pictures = {
  Green: string;
  Yellow: string;
  Blue: string;
  White: string;
  Red: string;
};
