import Wrapper from '@/components/Wrapper';
import { FCN } from '@/utils/types';
import React from 'react';
import {
  NavigationContainer,
  NavigationScreenConfig,
  NavigationScreenOptions,
} from 'react-navigation';

export function wrapPage(
  Page: FCN<any, any>,
  navigationOptions?: NavigationScreenConfig<NavigationScreenOptions>,
) {
  const Wrapped: FCN = ({ children, ...props }) => (
    <Wrapper {...props}>
      <Page {...props}>{children}</Page>
    </Wrapper>
  );

  Wrapped.navigationOptions = Page.navigationOptions || navigationOptions;
  return Wrapped;
}

export function createNavigator(
  container: NavigationContainer,
  navigationOptions?: NavigationScreenConfig<NavigationScreenOptions>,
) {
  container.navigationOptions = navigationOptions;
  return container;
}

export default (pages: FCN<any, any>[]) => pages.map(p => wrapPage(p));
