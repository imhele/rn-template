import { Effect } from './connect';

export interface HomeState {}

interface HomeModel {
  namespace: 'home';
  state: HomeState;
  effects: {
    refresh: Effect;
  };
  reducers: {};
}

const home: HomeModel = {
  namespace: 'home',
  state: {},
  effects: {
    *refresh(_, { call }) {
      yield call(() => new Promise(resolver => setTimeout(resolver, 2000)));
    },
  },
  reducers: {},
};

export default home;
