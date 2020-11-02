import { ICountry } from './model';

export const getAllCountries = async (): Promise<ICountry[]> => {
  const res: Response = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await res.json();

  const x = data.map(i => {
    const { name, capital, population, region, flag: flagSrc } = i;
    return { name, capital, population, region, flagSrc };
  });

  return x as ICountry[];
};
