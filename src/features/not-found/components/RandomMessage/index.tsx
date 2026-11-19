'use client';

import { type JSX, useEffect, useState } from 'react';
import {
  type ErrorMessage,
  errorMessages,
} from '../../consts/error-messages.const';

/**
 * Picks a random 404 message after mount, so the static export doesn't
 * freeze one message at build time. Both lines keep their height while
 * empty, so filling them in doesn't push the page down.
 */
function RandomMessage(): JSX.Element {
  const [picked, setPicked] = useState<ErrorMessage | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPicked(
        errorMessages[Math.floor(Math.random() * errorMessages.length)],
      );
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Decorative: the message below carries the meaning */}
      <p aria-hidden className="my-6 min-h-[1lh] text-center text-5xl">
        {picked?.icon}
      </p>
      {/* Fits the longest message: 3 lines at 320px, 2 from md up */}
      <p className="min-h-[3lh] md:min-h-[2lh] text-center">
        {picked?.message}
      </p>
    </>
  );
}

export default RandomMessage;
