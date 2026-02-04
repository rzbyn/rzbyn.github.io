'use client';

import { errorMessages } from '@consts/error-messages.const';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type JSX, useEffect, useState } from 'react';

function NotFound(): JSX.Element {
  const router = useRouter();
  const [countdown, setCountdown] = useState(30);
  const timeOutDelay = 30000;
  const [{ icon, aria_label, message }, setMessage] = useState({
    icon: '',
    aria_label: '',
    message: '',
  });

  useEffect(() => {
    const message =
      errorMessages[Math.floor(Math.random() * errorMessages.length)];
    setMessage(message);
    return;
  }, []);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, timeOutDelay);
    return () => {
      clearTimeout(redirectTimer);
    };
  }, [router]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
    return () => {
      clearInterval(countdownInterval);
    };
  });

  return (
    <>
      <h1>404 Page Not Found</h1>
      <section className="py-12 text-center">
        <p className="my-10">
          <span role="img" aria-label={aria_label} className="text-6xl">
            {icon}
          </span>
        </p>
        <p className="mb-36">{message}</p>
        <p>
          What are you looking for? Go to{' '}
          <Link href="/" className="text-blue-500">
            homepage
          </Link>
        </p>
        <p>[{countdown}]</p>
      </section>
    </>
  );
}

export default NotFound;
