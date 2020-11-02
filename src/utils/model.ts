export type TRegion =
  | 'Filter By Region'
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania';

export interface ICountry {
  name: string;
  flag: string;
  population: number;
  region: TRegion;
  capital: string;
}

export interface IState {
  searchQuery: string;
  region: TRegion;
  viewData: ICountry[];
  fullData: ICountry[];
}

export type TActionType =
  | { type: 'search'; payload: string }
  | { type: 'filter'; payload: TRegion };

export type TDispatch = (x: TActionType) => void;
