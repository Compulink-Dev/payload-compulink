import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const fadeUp = (el: Element | null, vars: gsap.TweenVars = {}) =>
  gsap.fromTo(
    el,
    { y: 40, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'power3.out',
      ...vars,
    }
  )

export const fadeIn = (el: Element | null, vars: gsap.TweenVars = {}) =>
  gsap.fromTo(
    el,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: 1,
      ease: 'power2.out',
      ...vars,
    }
  )

export const staggerIn = (els: Element[] | NodeListOf<Element>, vars: gsap.TweenVars = {}) =>
  gsap.fromTo(
    els,
    { y: 48, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      ...vars,
    }
  )

export const scaleIn = (el: Element | null, vars: gsap.TweenVars = {}) =>
  gsap.fromTo(
    el,
    { scale: 0.9, autoAlpha: 0 },
    {
      scale: 1,
      autoAlpha: 1,
      duration: 1,
      ease: 'power3.out',
      ...vars,
    }
  )
