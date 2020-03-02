import { toBeCalled } from '../../src/Testing/ToBeCalled';

const mockFunction = jest.fn();
const mockFunctionWithArgs = jest.fn().mockImplementation((name: string, age: number) => `${name} is ${age} years old`);

describe('ToBeCalled Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call given amount of times', () => {
    mockFunction();

    toBeCalled(mockFunction, 1);
  });

  test('should match amount of calls', () => {
    mockFunction();
    mockFunction();

    toBeCalled(mockFunction, 2);
  });

  test('should call with args', () => {
    mockFunctionWithArgs('John', 5000);

    toBeCalled(mockFunctionWithArgs, 1, 'John', 5000);
    expect(mockFunctionWithArgs).toHaveReturnedWith(`John is 5000 years old`);
  });
});
