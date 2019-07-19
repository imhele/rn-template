// import { Effect } from './connect';

export interface GlobalState {
  wingBlank: number;
}

interface GlobalModel {
  namespace: 'global';
  state: GlobalState;
  effects: {};
  reducers: {};
}

const GlobalModel: GlobalModel = {
  namespace: 'global',
  state: {
    wingBlank: 12,
  },
  effects: {},
  reducers: {},
};

export default GlobalModel;
