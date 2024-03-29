import TabBarIcon from '@/components/Icon/TabBarIcon';
import intl from '@/components/intl';
import { Color, Font } from '@/config';
import FirstScene from '@/layouts/FirstScene';
import HomePage from '@/pages/home';
import MinePage from '@/pages/mine';
import { AnyComponent } from '@/utils/types';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import wrapPages, { createNavigator } from './wrapPages';

const CommonPages: { [K: string]: AnyComponent } = {};
const [firstscene, home, mine] = wrapPages([FirstScene, HomePage, MinePage]);
export const NavigatorKeys = ['hometab', 'usertab', 'home', 'mine'];

/**
 ** ****************************
 ** `Home` tab - stack navigator
 ** ****************************
 */
const hometab = createNavigator(
  createStackNavigator(
    {
      ...CommonPages,
      home,
    },
    {
      initialRouteKey: 'home',
      initialRouteName: 'home',
    },
  ),
  ({ navigationOptions }) => ({
    tabBarIcon: TabBarIcon({ type: 'home' }),
    title: intl.U('首页'),
    ...navigationOptions,
  }),
);

/**
 ** ****************************
 ** `User` tab - stack navigator
 ** ****************************
 */
const usertab = createNavigator(
  createStackNavigator(
    {
      ...CommonPages,
      mine,
    },
    {
      initialRouteKey: 'mine',
      initialRouteName: 'mine',
    },
  ),
  ({ navigationOptions }) => ({
    tabBarIcon: TabBarIcon({ type: 'user' }),
    title: intl.U('我的'),
    ...navigationOptions,
  }),
);

/**
 ** *******************************
 ** `App` Navigator - tab navigator
 ** *******************************
 */
const appnav = createBottomTabNavigator(
  {
    hometab,
    usertab,
  },
  {
    initialRouteName: 'hometab',
    defaultNavigationOptions: {},
    order: ['hometab', 'usertab'],
    tabBarOptions: {
      activeTintColor: Color.TabBar.active,
      inactiveTintColor: Color.TabBar.inactive,
      showIcon: true,
      showLabel: true,
      labelStyle: {
        fontSize: Font.$0.FS,
      },
      style: {
        height: 56,
        borderTopWidth: 1,
        paddingVertical: 4,
        borderTopColor: Color.TabBar.border,
      },
    },
  },
);

/**
 ** ****
 ** ROOT
 ** ****
 */
const Root = createSwitchNavigator(
  {
    firstscene,
    appnav,
  },
  {
    initialRouteName: 'firstscene',
  },
);

export default Root;
