import { useState, useEffect } from 'react';
const KEY = 'contacts';
export default function useLocalStorage(defaultValue) {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(KEY)) ?? defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
