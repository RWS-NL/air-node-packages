import stringify, { QuerystringObject } from '@favware/querystring';
import React, { memo, PropsWithChildren } from 'react';
import { Route as AppRoute, RouteProps as ReactRouterProps, Switch } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { NonUndefined } from 'utility-types';

/**
 * Generic type for a parameter in a route
 * @example
 * ```ts
 * interface RouteParams {
 *   userId: RouteParamId
 * }
 * ```
 */
export type RouteParamId = string | number;

/**
 * Type wrapper that combines component props and route params to create an object of
 * both the component props and all Router props with params set internally.
 * @example
 * ```jsx
 * interface RouteParams {
 *   userId: string;
 * }
 *
 * interface RoutedComponentProps {
 *   name: string;
 * }
 *
 * export const RoutedComponent = (props: PropsWithChildren<ComponentOwnProps<RoutedComponentProps, RouteParams>>) => (
 *   <div>
 *     The UserID is: {props.match.params.userId}
 *     The name is: {props.name}
 *   </div>
 * )
 * ```
 */
export type ComponentOwnProps<CP extends object, Params extends { [K in keyof Params]?: string } = object> = CP &
  NonUndefined<RouteComponentProps<Params>>;

/**
 * Type wrapper to set the params on Router props "match" object
 * @example
 * ```ts
 * interface RouteParams {
 *   userId: string;
 * }
 *
 * export const handleGetUser = createAsyncAction(...)<RouteProps<RouteParams>['match'], unknown, Error>();
 * ```
 */
export type RouteProps<Params extends { [K in keyof Params]?: string } = object> = NonUndefined<
  RouteComponentProps<Params>
>;

export interface Route {
  path: ReactRouterProps['path'];
  component: ReactRouterProps['component'];
  reactRouterProps?: Omit<ReactRouterProps, 'exact' | 'component' | 'path'>;
  /** Data-qa tag to apply to the route */
  'data-qa'?: string;
}

export interface RouterProps extends ReactRouterProps {
  /** The component and route that should be rendered by default (root path and fallback) */
  defaultComponent: Route;
  /** Additional routes to render other than the default component */
  otherComponents?: Route[];

  /** Data-qa tag to apply to the default component route */
  'data-qa'?: string;
}

/**
 * Safely stringifies queryparameters and prefixes a `?`.
 * Applies URL encoding with `encodeURIComponent()`.
 * In case an empty object was provided an empty string is returned
 * @param params Queryparams to stringify
 * @returns Stringified params or empty string
 * @see [`@favware/querystring`](https://favware.tech/querystring)
 */
export const routeQueryParser = <T extends QuerystringObject>(params: T) => {
  const encodedUriParams = stringify(params);

  return encodedUriParams ? `?${encodedUriParams}` : '';
};

/**
 * Constructs a Router with provided routes and components
 * @param params Includes list of paths and components as well as the option to pass data-qa and additional props
 * @example
 * ```jsx
 *  <div>
 *    <Router
 *      defaultComponent={{ path: '/', component: () => <div>TEST</div> }}
 *      data-qa='TestRouter'
 *      otherComponents={[
 *        { path: '/app', component: () => <div>APP</div>, 'data-qa': 'AppRoute' },
 *        { path: '/contact', component: () => <Contact />, 'data-qa': 'ContactRoute' }
 *      ]}
 *    />
 *  </div>
 * ```
 */
export const Router = memo(({ defaultComponent, otherComponents, ...props }: PropsWithChildren<RouterProps>) => {
  return (
    <Switch>
      <AppRoute exact path={defaultComponent.path} component={defaultComponent.component} {...props} />
      {otherComponents?.map((child, index) => (
        <AppRoute key={index} exact path={child.path} component={child.component} {...child.reactRouterProps} />
      ))}
      <AppRoute component={defaultComponent.component} {...props} />
    </Switch>
  );
});
