import { ReactWrapper, ShallowWrapper } from 'enzyme';
import { deprecate } from 'util';

/**
 * Searches for a given data-qa tag in a ShallowWrapped component
 * @param component The shallow wrapped component to traverse for the data-qa
 * @param selector The data-qa selector to search for
 * @returns The found component or an empty ShallowWrapper
 */
export function findShallowByDataQa<P = {}, S = {}, C = React.Component>(
  component: ShallowWrapper<P, S, C>,
  selector: string
) {
  return component.find(`[data-qa="${selector}"]`);
}

/**
 * Searches for a given data-qa tag in a ShallowWrapped component
 * @param component The shallow wrapped component to traverse for the data-qa
 * @param selector The data-qa selector to search for
 * @returns The found component or an empty ShallowWrapper
 * @deprecated replaced with `findShallowByDataQa`
 */
export const findByDataQa = deprecate(
  (...args: Parameters<typeof findShallowByDataQa>) => findShallowByDataQa(args[0], args[1]),
  'findByDataQa() is deprecated. Use findShallowByDataQa() instead.'
);

/**
 * Searches for a given data-qa tag in a ReactWrapped component
 * @param component The shallow wrapped component to traverse for the data-qa
 * @param selector The data-qa selector to search for
 * @returns The found component or an empty ReactWrapper
 */
export function findReactByDataQa<P = {}, S = {}, C = React.Component>(
  component: ReactWrapper<P, S, C>,
  selector: string
) {
  return component.find(`[data-qa="${selector}"]`);
}
