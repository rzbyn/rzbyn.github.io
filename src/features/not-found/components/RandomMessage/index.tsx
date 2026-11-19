'use client';

import { type JSX, useEffect, useState } from 'react';
import {
  type ErrorMessage,
  errorMessages,
} from '../../consts/error-messages.const';

/**
 * Picks a random 404 message after mount, so the static export doesn't
 * freeze one message at build time. Renders nothing until then.
 */
function RandomMessage(): JSX.Element | null {
  const [picked, setPicked] = useState<ErrorMessage | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPicked(
        errorMessages[Math.floor(Math.random() * errorMessages.length)],
      );
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!picked) return null;

  return (
    <>
      {/* Decorative: the message below carries the meaning */}
      <p aria-hidden className="my-10 text-6xl">
        {picked.icon}
      </p>
      <p className="mb-36">{picked.message}</p>
    </>
  );
}

export default RandomMessage;
