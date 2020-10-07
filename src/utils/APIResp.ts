import { ICountry } from './models';

export const getData = async (): Promise<ICountry[]> => {
  const dataC = await (await fetch('https://restcountries.eu/rest/v2/all')).json();

  const list = dataC.map(({ name, flag, region, population, capital }) => ({
    name,
    flag,
    region,
    population,
    capital,
  }));

  return list as ICountry[];
};
