import { wrap } from '@/components/Wrapper';
import { locales, LocaleType } from './consts';

export function matchLocale(defaultValue: LocaleType, ...localeName: any[]): LocaleType {
  const match = Object.entries(locales).map(l => ({
    match: l[1].match,
    name: l[0] as LocaleType,
  }));
  localeName.some(n => {
    if (typeof n !== 'string') return false;
    const res = match.find(m => m.match(n));
    if (!res) return false;
    defaultValue = res.name;
    return true;
  });
  return defaultValue;
}
