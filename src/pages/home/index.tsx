import { PageContainer } from '@/components/Animation';
import { Color } from '@/config';
import { ConnectProps, connect } from '@/models/connect';
import { FCN } from '@/utils/types';
import React from 'react';
import { StatusBar } from 'react-native';
import Header from './Header';

interface HomeProps extends ConnectProps {
  refreshing: boolean;
}

const Home: FCN<HomeProps> = ({ dispatch, refreshing }) => {
  const onRefresh = () => dispatch({ type: 'home/refresh' });
  return (
    <PageContainer refreshing={refreshing} onRefresh={onRefresh}>
      <StatusBar animated barStyle="light-content" backgroundColor={Color.Primary} />
    </PageContainer>
  );
};

Home.navigationOptions = ({ navigation }) => ({
  header: <Header navigation={navigation} />,
  headerBackTitle: null,
});

export default connect(({ loading }) => ({
  refreshing: loading.effects['home/refresh'],
}))(Home);
