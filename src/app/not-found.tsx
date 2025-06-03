'use client'

import { notFoundEasters } from "@/app/_lib/consts/not-found-easters";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { JSX, useEffect, useState } from "react";

function NotFound(): JSX.Element {
  const router = useRouter()
  const [countdown, setCountdown] = useState(30)
  const timeOutDelay = 30000
  const [{ icon, aria_label, text }, setRandomMessage] = useState({ icon: "", aria_label: '', text: '' })

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
    setRandomMessage(notFoundEasters[Math.floor(Math.random() * notFoundEasters.length)])
    return () => { clearTimeout(redirectTimer); clearInterval(countdownInterval) }
  }, [router])

  return (
    <>
      <h1>404 Page Not Found</h1>
      <section className='py-12 text-center'>
        <p className='my-10'>
          <span role='img' aria-label={aria_label} className='text-6xl'>{icon}</span>
        </p>
        <p className='mb-36'>{text}</p>
        <p>What are you looking for? Go to <Link href="/" className="text-blue-500">homepage</Link></p>
        <p>[{countdown}]</p>
      </section>
    </>
  )
}

export default NotFound

