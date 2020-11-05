/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICountry, ICountryPage } from './model';

export const getAllCountries = async (): Promise<ICountry[]> => {
  const res: Response = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await res.json();

  if (res.status === 200) {
    return data.map(
      (i: any): ICountry => ({
        name: i.name,
        capital: i.capital,
        population: i.population,
        region: i.region,
        flag: i.flag,
        alpha3Code: i.alpha3Code,
      }),
    );
  }

  throw new Error();
};

type getByName = (name: string) => Promise<ICountryPage>;

export const getCountryByName: getByName = async isoCODE => {
  const res: Response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${isoCODE}`,
  );

  if (res.status === 200) {
    const i = await res.json();

    return {
      alpha3Code: i.alpha3Code,
      borderCountries: i.borders,
      capital: i.capital,
      currencies: (i.currencies as any[]).map(j => j.name),
      flag: i.flag,
      languages: (i.languages as any[]).map(j => j.name),
      name: i.name,
      nativeName: i.nativeName,
      population: i.population,
      region: i.region,
      subRegion: i.subregion,
      tld: i.topLevelDomain,
    };
  }

  throw new Error();
};
