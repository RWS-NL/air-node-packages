import { WindowLocationService } from '../src/WindowLocationService';

describe('WindowLocationService', () => {
  test('retrieve origin from current url', () => {
    const result = WindowLocationService.origin;
    const expected = 'http://localhost';

    expect(result).toBe(expected);
  });

  test('retrieve path from current url', () => {
    const result = WindowLocationService.path;
    const expected = '/';

    expect(result).toBe(expected);
  });

  test('retrieve hash from current url', () => {
    const result = WindowLocationService.hash;
    const expected = '';

    expect(result).toBe(expected);
  });

  test('retrieve search from current url', () => {
    const result = WindowLocationService.search;
    const expected = '';

    expect(result).toBe(expected);
  });

  test('redirects to new url', () => {
    const redirectSpy = jest.spyOn(WindowLocationService, 'redirectTo').mockImplementation((url: string) => url);
    const result = WindowLocationService.redirectTo('new_url');
    const expected = 'new_url';

    expect(result).toBe(expected);
    expect(redirectSpy).toHaveBeenCalledTimes(1);
    expect(redirectSpy).toHaveBeenCalledWith(expected);
  });
});
