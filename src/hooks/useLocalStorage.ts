import { useEffect, useState } from "react";

import { useOnMount } from "@/hooks/useOnMount";


export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const initialize = (key: string) => {
    try {
      const item = localStorage.getItem(key);
      if (item && item !== "undefined") {
        return JSON.parse(item) as T;
      }

      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch {
      return initialValue;
    }
  };

  const [state, setState] = useState(() => initialize(key));

  useOnMount(() => {
    setState(initialize(key));
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [key, state]);

  return [state, setState];
};