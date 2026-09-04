'use client';

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react';

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  wrapperClassName?: string;
  innerClassName?: string;
}

export default function Magnet({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  wrapperClassName = '',
  innerClassName = '',
  ...props
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const activeRef = useRef(false);
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (disabled || reducedMotion.matches) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const element = ref.current;
      if (!element || event.pointerType === 'touch') return;

      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const inside =
        Math.abs(centerX - event.clientX) < width / 2 + padding &&
        Math.abs(centerY - event.clientY) < height / 2 + padding;

      if (inside) {
        activeRef.current = true;
        setActive(true);
        setPosition({
          x: (event.clientX - centerX) / magnetStrength,
          y: (event.clientY - centerY) / magnetStrength,
        });
      } else if (activeRef.current) {
        activeRef.current = false;
        setActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [disabled, magnetStrength, padding]);

  return (
    <div ref={ref} className={wrapperClassName} {...props}>
      <div
        className={innerClassName}
        style={{
          transform: disabled
            ? 'translate3d(0, 0, 0)'
            : `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: active ? 'transform 180ms ease-out' : 'transform 420ms ease-in-out',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
