import { ICountry } from './model';

export const getAllCountries = async (): Promise<ICountry[]> => {
  const res: Response = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await res.json();

  return data.map(({ name, capital, population, region, flag }: ICountry) => ({
    name,
    capital,
    population,
    region,
    flag,
  }));
};
