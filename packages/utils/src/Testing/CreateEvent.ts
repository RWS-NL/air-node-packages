import { KeyedObject, mergeObjects } from '../MergeObjects';
/**
 * Creates a dummy event
 * @param value Value to put on the target, used for click/change events
 * @param additionalData Any additional data to put into the event
 * @remark `additionalData` is merged using `mergeObject` so deep merging is possible
 */
export const createEvent = <T>(value: T, additionalData: KeyedObject = {}) =>
  mergeObjects(
    {
      target: {
        value
      }
    },
    additionalData ?? {}
  );
