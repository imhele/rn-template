import intl, { LocaleType } from '@/components/intl';
import { setCommonParams } from '@/layouts/Routes';
import { Reducer } from './connect';

export interface GlobalState {
  locale: LocaleType;
  wingBlank: number;
}

interface GlobalModel {
  namespace: 'global';
  state: GlobalState;
  effects: {};
  reducers: {
    setLocale: Reducer<GlobalState, LocaleType>;
  };
}

const GlobalModel: GlobalModel = {
  namespace: 'global',
  state: {
    locale: intl.localeName,
    wingBlank: 12,
  },
  effects: {},
  reducers: {
    setLocale(state, { payload }) {
      setCommonParams({ locale: payload });
      return {
        ...state,
        locale: payload,
      };
    },
  },
};

export default GlobalModel;
