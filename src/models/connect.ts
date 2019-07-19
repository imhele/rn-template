import { AnyComponentClass, ArgsType, PromiseReturn } from '@/utils/types';
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
  ) => T extends (...args: any[]) => any ? PromiseReturn<ReturnType<T>> : R;
  select: <T>(func: (state: ConnectState) => T) => T;
  take: Function;
  cancel: Function;
  [key: string]: any;
}

export interface ActionWithPayload<P = any> extends AnyAction {
  type: string;
  payload: P;
}

export interface ActionWithCallback<P = any, C = (payload: P) => void> extends AnyAction {
  type: string;
  payload: P;
  callback: C;
}

export type Action<P = undefined, C = false> = P extends undefined
  ? AnyAction
  : C extends false
  ? ActionWithPayload<P>
  : C extends true
  ? ActionWithCallback<P>
  : ActionWithCallback<P, C>;

export type Effect<P = any, C = (payload: P) => void> = (
  action: Action<P, C>,
  effects: EffectsCommandMap,
) => void;

export type Reducer<S, P = any, C = (payload: P) => void> = (state: S, action: Action<P, C>) => S;

/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch = <P = undefined, C = false>(action: Action<P, C>) => any;

export interface ConnectProps {
  dispatch: Dispatch;
}

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
