export type TRegion =
  | 'Filter By Region'
  | 'Africa'
  | 'America'
  | 'Asia'
  | 'Europe'
  | 'Oceania';

export interface ICountry {
  name: string;
  flagSrc: string;
  population: number;
  region: string;
  capital: string;
}