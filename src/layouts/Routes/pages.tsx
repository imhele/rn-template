import Wrapper from '@/components/Wrapper';
import TabBarIcon from '@/components/Icon/TabBarIcon';
import intl, { getLocale } from '@/components/intl';
import { Color, Font } from '@/config';
import HomePage from '@/pages/home';
import MinePage from '@/pages/mine';
import { AnyComponent, FCN } from '@/utils/types';
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationScreenConfig,
  NavigationScreenOptions,
} from 'react-navigation';

const CommonPages: { [K: string]: AnyComponent } = {};
const initialRouteParams = {
  locale: getLocale(),
};
const [home, mine] = [HomePage, MinePage].map((Page: FCN<any, any>) => {
  const Wrapped: FCN = ({ children, ...props }) => (
    <Wrapper {...props}>
      <Page {...props}>{children}</Page>
    </Wrapper>
  );
  Wrapped.navigationOptions = Page.navigationOptions;
  return Wrapped;
});

/**
 ** ****************************
 ** `Home` tab - stack navigator
 ** ****************************
 */
const hometabConfig: NavigationScreenConfig<NavigationScreenOptions> = ({ navigationOptions }) => ({
  tabBarIcon: TabBarIcon({ type: 'home' }),
  title: 'Title',
  ...navigationOptions,
});

const hometab = createStackNavigator(
  {
    ...CommonPages,
    home,
  },
  {
    initialRouteKey: 'home',
    initialRouteName: 'home',
    initialRouteParams,
  },
);

hometab.navigationOptions = hometabConfig;

/**
 ** ****************************
 ** `User` tab - stack navigator
 ** ****************************
 */
const usertabConfig: NavigationScreenConfig<NavigationScreenOptions> = ({ navigationOptions }) => ({
  tabBarIcon: TabBarIcon({ type: 'user' }),
  title: 'Title',
  ...navigationOptions,
});

const usertab = createStackNavigator(
  {
    ...CommonPages,
    mine,
  },
  {
    initialRouteKey: 'mine',
    initialRouteName: 'mine',
    initialRouteParams,
  },
);

usertab.navigationOptions = usertabConfig;

/**
 ** **********************
 ** `Roor` - tab navigator
 ** **********************
 */
const Root = createBottomTabNavigator(
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

export default Root;
