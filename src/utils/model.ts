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
  alpha3Code: string;
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

export interface ICountryPage extends ICountry {
  nativeName: string;
  subRegion: string;
  tld: string[];
  currencies: string[];
  languages: string[];
  borderCountries: string[];
}
