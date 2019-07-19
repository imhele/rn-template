import React, { FC, useLayoutEffect, useState } from 'react';
import { Animated, ViewProps } from 'react-native';

interface FadeInViewProps extends ViewProps {
  delay?: number;
  duration?: number;
  useNativeDriver?: boolean;
}

function createFadeInAnimation(config: Partial<Animated.TimingAnimationConfig>) {
  const opacity = new Animated.Value(0);
  const animation = Animated.timing(opacity, {
    toValue: 1,
    ...config,
  });
  return { animation, opacity };
}

const FadeInView: FC<FadeInViewProps> = ({
  children,
  delay,
  duration = 160,
  useNativeDriver = true,
  ...restProps
}) => {
  const { animation, opacity } = useState(() =>
    createFadeInAnimation({ delay, duration, useNativeDriver }),
  )[0];
  useLayoutEffect(animation.start, [true]);
  return (
    <Animated.View {...restProps} style={[restProps.style, { opacity }]}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;
