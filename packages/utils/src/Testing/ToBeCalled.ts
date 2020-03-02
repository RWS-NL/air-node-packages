/**
 * Checks if a Jest mocked function is called a certain amount of times with a certain amount of arguments
 * @param functionToBeCalled The function that has to be called
 * @param calledTimes The amount of times the function should be called
 * @param args Any arguments the function should be called with
 */
export function toBeCalled(functionToBeCalled: jest.Mock<any, any>, calledTimes: number, ...args: any[]) {
  expect(functionToBeCalled).toBeCalledTimes(calledTimes);
  expect(functionToBeCalled).toBeCalledWith(...args);
}
