declare module '{{APP_NAME_REDUX}}' {
  import { RouteComponentProps } from 'react-router';
  import { ActionType, StateType } from 'typesafe-actions';
  import { NonUndefined } from 'utility-types';

  export type RootAction = ActionType<typeof import('./root-action').default>;
  export type RootState = StateType<ReturnType<typeof import('./root-reducer').default>>;

  export interface HotNodeModule extends NodeModule {
    hot: any;
  }

  export type ComponentOwnProps<CP extends object, Params extends { [K in keyof Params]?: string } = object> = CP &
    NonUndefined<RouteComponentProps<Params>>;
  export type RouteProps<Params extends { [K in keyof Params]?: string } = object> = NonUndefined<
    RouteComponentProps<Params>
  >;
}
