// @ts-nocheck
import { useEffect, useRef } from "react";

export const useDebounce = (callback, delay = 150) => {
  const latestCallback = useRef();
  const latestTimeout = useRef();

  useEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  return () => {
    if (latestTimeout.current) {
      clearTimeout(latestTimeout.current);
    }

    latestTimeout.current = setTimeout(() => {
      latestCallback.current();
    }, delay);
  };
};
