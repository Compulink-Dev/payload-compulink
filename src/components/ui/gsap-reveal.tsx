'use client'
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  distance?: number
  duration?: number
  once?: boolean
  as?: React.ElementType
}

export default function GsapReveal({
  children,
  className,
  delay = 0,
  distance = 48,
  duration = 1,
  once = true,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const tween = gsap.fromTo(
      el,
      { y: distance, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration,
        ease: 'power3.out',
        delay,
      }
    )

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once,
      onEnter: () => tween.play(),
      onLeaveBack: () => tween.reverse(),
    })

    return () => {
      st.kill()
      tween.kill()
    }
  }, [delay, distance, duration, once])

  return (
    // @ts-ignore
    <Tag ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </Tag>
  )
}
