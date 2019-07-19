import { registerHooks } from '@/components/Hooks';
import { IntlConfig } from '@/components/intl';
import { WrapperConfig } from '@/components/Wrapper';
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

registerHooks('onDidMount', 'onSetLocale');

export default {
  intl,
  wrapper,
  ApiPrefix: 'https://google.com',
};
