import intl from '@/components/intl';
import config from '@/config';
import Toast from '@ant-design/react-native/es/toast';

export async function getWeather(id: number[]) {
  return fetch(`${config.ApiPrefix}/url`, {
    method: 'POST',
  })
    .then(resp => resp.json())
    .catch(() => Toast.offline(intl('网络请求失败')) && null)
    .then(res => res || null) as Promise<null>;
}
