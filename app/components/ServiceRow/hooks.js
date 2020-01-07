import { useEffect, useCallback } from 'react';
import { useSpring, interpolate } from 'react-spring';

export const useRowAnimate = (parentRef, index, reverse) => {
  const initialValue = reverse ? -150 : -100;

  const [{ y, value }, set] = useSpring(() => ({
    y: initialValue,
    value: 0,
  }));

  const k = reverse ? 10 * index : 8;

  const animSettings = interpolate(
    [y, value],
    (yPos, offset) => `translate3d(0px, ${yPos + offset / k}px, 0px)`,
  );

  const onScroll = useCallback(() => {
    const block = parentRef.current;
    const { top } = block.getBoundingClientRect();

    const newValue = reverse ? -top : top;

    return set({ value: newValue });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return animSettings;
};
