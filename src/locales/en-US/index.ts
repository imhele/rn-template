import zhCN from '@/locales/zh-CN';
import Lang from './lang';
import Route from './route';
import Tip from './tip';
import Word from './word';

const enUS: typeof zhCN = {
  ...Lang,
  ...Route,
  ...Tip,
  ...Word,
};

export default enUS;
