import config from '@/config';
import { AnyComponentClass } from '@/utils/types';
import React, { FC } from 'react';

export interface WrapperConfig {
  default?: AnyComponentClass[];
}

const Wrapper: FC & {
  queue: AnyComponentClass[];
} = ({ children, ...props }) => (
  <React.Fragment>
    {Wrapper.queue.reduce(
      (prev, Curr) => (
        <Curr {...props}>{prev}</Curr>
      ),
      children,
    )}
  </React.Fragment>
);

Wrapper.queue = config.wrapper.default || ([] as AnyComponentClass[]);

export function wrap(component: AnyComponentClass) {
  return Wrapper.queue.unshift(component);
}

export default Wrapper;
