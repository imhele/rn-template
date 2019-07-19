import '@/config';
import DvaContainer from '@/models';
import { WrappedContainer } from '@/layouts/Routes';
import React from 'react';

export default () => (
  <DvaContainer>
    <WrappedContainer />
  </DvaContainer>
);
