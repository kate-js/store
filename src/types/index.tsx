export interface ICardItem {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
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
    favorite: boolean;
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
