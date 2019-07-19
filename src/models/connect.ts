import { ArgsType, PromiseReturn } from '@/utils/types';
import { AnyAction } from 'redux';
import { connect as DvaConnect } from 'react-redux';
import { GlobalState } from './global';
import { HomeState } from './home';

export { GlobalState, HomeState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    home?: boolean;
  };
}

export interface ConnectState {
  global: GlobalState;
  home: HomeState;
  loading: Loading;
}

export interface EffectsCommandMap {
  put: Dispatch;
  call: <T, A extends any[], R>(
    func: T,
    ...args: ArgsType<T, A>
  ) => T extends (...args: any[]) => any ? ReturnType<T> : PromiseReturn<T, R>;
  select: <T>(func: (state: ConnectState) => T) => T;
  take: Function;
  cancel: Function;
  [key: string]: any;
}

export type Effect = (action: AnyAction, effects: EffectsCommandMap) => void;

/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch = <P = any, C = (payload: P) => void>(action: {
  type: string;
  payload?: P;
  callback?: C;
  [key: string]: any;
}) => any;

export interface ConnectProps {
  dispatch: Dispatch;
}

type AnyComponentClass<P = {}, S = any> = React.ComponentClass<P, S> | React.FunctionComponent<P>;

/**
 * @type P: props
 * @type R: without `Partial<>`
 */
type ConnectType = <S>(
  f: (state: ConnectState) => S,
) => <P, R extends boolean = true>(
  c: AnyComponentClass<any>,
) => React.FunctionComponent<
  R extends false
    ? Partial<Omit<P, keyof ConnectProps | keyof S>>
    : Omit<P, keyof ConnectProps | keyof S>
>;

export const connect = (DvaConnect as unknown) as ConnectType;
