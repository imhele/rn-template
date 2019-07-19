import '@/config';
import DvaContainer from '@/models';
import { WrappedContainer } from '@/layouts/Routes';

export default () => (
  <DvaContainer>
    <WrappedContainer />
  </DvaContainer>
);
