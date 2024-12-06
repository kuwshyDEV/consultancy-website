'use client';

import { useEffect, useCallback } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;

interface KeyboardOptions {
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
  meta?: boolean;
}

export function useKeyboard(
  key: string,
  handler: KeyHandler,
  options: KeyboardOptions = {}
) {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const { ctrl = false, alt = false, shift = false, meta = false } = options;

      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        !!event.ctrlKey === ctrl &&
        !!event.altKey === alt &&
        !!event.shiftKey === shift &&
        !!event.metaKey === meta
      ) {
        handler(event);
      }
    },
    [key, handler, options]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);
}

export function useEscapeKey(handler: KeyHandler) {
  useKeyboard('Escape', handler);
}

export function useArrowKeys(handlers: {
  up?: KeyHandler;
  down?: KeyHandler;
  left?: KeyHandler;
  right?: KeyHandler;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          handlers.up?.(event);
          break;
        case 'ArrowDown':
          handlers.down?.(event);
          break;
        case 'ArrowLeft':
          handlers.left?.(event);
          break;
        case 'ArrowRight':
          handlers.right?.(event);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlers]);
}
