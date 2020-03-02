import { ShallowWrapper } from 'enzyme';

/**
 * Searches for a given data-qa tag in a ShallowWrapped component
 * @param component The shallow wrapped component to traverse for the data-qa
 * @param selector The data-qa selector to search for
 * @returns The found component or an empty ShallowWrapper
 */
export function findByDataQa<P = {}, S = {}, C = React.Component>(
  component: ShallowWrapper<P, S, C>,
  selector: string
): ShallowWrapper {
  return component.find(`[data-qa="${selector}"]`);
}
