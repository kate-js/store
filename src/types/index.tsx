export interface ICardItem {
  id?: number;
  title: string;
  description: string;
  category: string;
  image: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
  price: number;
  rating: { rate: number; count: number };
}

export interface ICard {
  card: ICardItem[];
}

export interface Card {
  card: {
    id?: number;
    title: string;
    description: string;
    category: string;
    image: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
    price: number;
    rating: { rate: number; count: number };
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
