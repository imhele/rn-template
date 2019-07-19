import config, { Color, Font, PX } from '@/config';
import { FadeInView } from '@/components/Animation';
import { loadLocale } from '@/components/intl';
import { wait } from '@/utils';
import { FCN } from '@/utils/types';
import React, { ReactNode, useLayoutEffect } from 'react';
import { StatusBar, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

export interface FirstSceneConfig {
  afterInit: (navigattion: NavigationScreenProp<any, {}>) => any;
  description: ReactNode;
  title: ReactNode;
}

const initProcess = [loadLocale, () => wait(2)];

const FirstScene: FCN = ({ navigation }) => {
  useLayoutEffect(() => {
    Promise.all(initProcess.map(f => f())).then(() => {
      config.FirstScene.afterInit(navigation);
    });
  }, [true]);
  return (
    <FadeInView style={styles.container}>
      <StatusBar animated barStyle="light-content" backgroundColor={Color.Primary} />
      <Text style={styles.title}>{config.FirstScene.title}</Text>
      <Text style={styles.description}>{config.FirstScene.description}</Text>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.Primary,
    flex: 1,
    justifyContent: 'center',
  } as ViewStyle,
  title: {
    color: Color.W0,
    fontSize: Font.$5.FS,
    lineHeight: 64,
    maxWidth: PX.VW(90),
    textAlign: 'center',
  } as TextStyle,
  description: {
    color: Color.W0,
    fontSize: Font.$2.FS,
    lineHeight: Font.$2.LH,
    maxWidth: PX.VW(90),
    textAlign: 'center',
  } as TextStyle,
});

export default FirstScene;
