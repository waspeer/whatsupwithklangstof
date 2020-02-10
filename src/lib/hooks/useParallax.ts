import { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';

export default function useParallax<E extends HTMLElement>() {
  const ref = useRef<E>(null);

  useEffect(() => {
    if (ref.current) {
      const p = new Parallax(ref.current);
      return () => p.destroy();
    }
    return () => {
      //
    };
  }, [ref]);

  return ref;
}
