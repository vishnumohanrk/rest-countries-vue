import { ICountry, IState, TActionType, TRegion } from './model';

export const intitialState = (x: ICountry[]): IState => ({
  searchQuery: '',
  region: 'Filter By Region',
  fullData: x,
  viewData: x,
});

export const appReducer = (state: IState, action: TActionType): IState => {
  switch (action.type) {
    case 'search':
      return {
        ...state,
        searchQuery: action.payload,
        viewData: getData(
          state.region,
          action.payload.toLowerCase(),
          state.fullData,
        ),
      };
    case 'filter':
      return {
        ...state,
        region: action.payload,
        viewData: getData(
          action.payload,
          state.searchQuery.toLowerCase(),
          state.fullData,
        ),
      };
    default:
      throw new Error();
  }
};

const getData = (region: TRegion, query: string, fullData: ICountry[]) =>
  region === 'Filter By Region'
    ? fullData.filter(i => i.name.toLowerCase().includes(query))
    : fullData.filter(
        i => i.region === region && i.name.toLowerCase().includes(query),
      );
