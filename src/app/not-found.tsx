'use client';

import { errorMessages } from '@features/not-found';
import Heading from '@shared/ui/Heading';
import TextLink from '@shared/ui/TextLink';
import { type JSX, useEffect, useState } from 'react';

function NotFound(): JSX.Element {
  const [{ icon, aria_label, message }, setMessage] = useState({
    icon: '',
    aria_label: '',
    message: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomMessage =
        errorMessages[Math.floor(Math.random() * errorMessages.length)];
      setMessage(randomMessage);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Heading>404 Page Not Found</Heading>
      <section className="py-12 text-center">
        <p className="my-10">
          <span role="img" aria-label={aria_label} className="text-6xl">
            {icon}
          </span>
        </p>
        <p className="mb-36">{message}</p>
        <p>
          What are you looking for? Go to{' '}
          <TextLink href="/" underline="none">
            homepage
          </TextLink>
        </p>
      </section>
    </>
  );
}

export default NotFound;
