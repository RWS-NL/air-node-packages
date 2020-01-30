import { useState, useEffect } from 'react';

/**
 * React hook to get the current window size
 * Triggers on window resize.
 *
 * Use with {@link https://github.com/xnimorz/use-debounce | use-debounce} to ensure it is not triggered instantly!!
 *
 * @example
 * ```typescript
 * import { useDebounce } from 'use-debounce';
 *
 * const [ width, height ] = useDebounce(useWindowSize(), 1000);
 *
 * useEffect(() => {
 *   // Do something here
 * }, [ width, height ]);
 * ```
 */
export function useWindowSize() {
  const getSize = (): [number, number] => {
    return [window.innerWidth, window.innerHeight];
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
