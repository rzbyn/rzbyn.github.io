'use client'

import { JSX, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NotFound(): JSX.Element {
  const router = useRouter()
  const [countdown, setCountdown] = useState(30)
  const timeOutDelay = 30000;

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/')
    }, timeOutDelay)
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(countdownInterval)
          return 0
        }
        return prevCountdown - 1
      })
    }, 1000)
    return () => { clearTimeout(redirectTimer); clearInterval(countdownInterval) }
  }, [router])

  return (
    <section>
      <h1>404 Page Not Found</h1>
      <p>What are you looking for? Go to <Link href="/" className="text-blue-500">homepage</Link> [{countdown}]</p>
    </section>
  )
}

export default NotFound

