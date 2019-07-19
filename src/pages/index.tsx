import '@/config';
import DvaContainer from '@/models';
import { WrappedContainer } from '@/layouts/Routes';
import { default as AntdProvider } from '@ant-design/react-native/es/provider';
import React from 'react';

export default () => (
  <DvaContainer>
    <AntdProvider>
      <WrappedContainer />
    </AntdProvider>
  </DvaContainer>
);
