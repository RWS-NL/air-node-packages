declare module '{{APP_NAME_REDUX}}' {
  import { ActionType, StateType } from 'typesafe-actions';
  import { RouteComponentProps } from 'react-router';
  export type RootAction = ActionType<typeof import('./root-action').default>;
  export type RootState = StateType<ReturnType<typeof import('./root-reducer').default>>;

  export interface HotNodeModule extends NodeModule {
    hot: any;
  }

  export type ComponentOwnProps<CP extends object, Params extends { [K in keyof Params]?: string } = object> = CP &
    Partial<RouteComponentProps<Params>>;
  export type RouteProps<Params extends { [K in keyof Params]?: string } = object> = Partial<
    RouteComponentProps<Params>
  >;
}
