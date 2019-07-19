import { registerHooks } from '@/components/Hooks';
import { IntlConfig } from '@/components/intl';
import { WrapperConfig } from '@/components/Wrapper';
import { FirstSceneConfig } from '@/layouts/FirstScene';
import { UIManager } from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental(true);

export { default as Color } from './color';
export { default as Font } from './font';
export { default as PX } from './pixel';
export { default as Ratio } from './ratio';

const intl: IntlConfig = {
  default: 'zh-CN',
};

const wrapper: WrapperConfig = {
  default: [],
};

const FirstScene: FirstSceneConfig = {
  afterInit: navigation => navigation.navigate('appnav'),
  description: 'Selfuse Template With TypeScript / Dva / React Hooks / Ant Design Mobile',
  title: 'React Native',
};

registerHooks('onDidMount', 'onSetLocale');

export default {
  intl,
  wrapper,
  ApiPrefix: 'https://google.com',
  FirstScene,
};
