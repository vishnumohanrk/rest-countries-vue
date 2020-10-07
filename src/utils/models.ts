export interface IMode {
  icon: 'sun' | 'moon';
  name: 'dark' | 'light';
}

export type TStringToVoid = (e: string) => void;

export interface FilterInputCompProps {
  value: string;
  setValue: TStringToVoid;
}

export interface ICountry {
  name: string;
  population: number;
  capital: string;
  region: string;
  flag: string;
}
