import { ICountry, TRegion } from './model';

export interface IState {
  searchQuery: string;
  region: TRegion;
  showAll: boolean;
  data: ICountry[];
}

export type TActionType =
  | { type: 'search'; payload: string }
  | { type: 'filter'; payload: TRegion }
  | { type: 'showAll'; payload: null };

// export const intitialState = (x: ICountry[]): IState => ({
//   searchQuery: '',
//   region: 'Filter By Region',
//   showAll: false,
//   data: x,
// });

// export const appReducer = (state: IState, action: TActionType): IState => {
//   switch (action.type) {
//     case 'showAll':
//       const x = state.data.slice(0, state.showAll ? state.data.length : 20);
//       return { data: x, showAll: !state.showAll, ...state };
//     default:
//       throw new Error();
//   }
// };
