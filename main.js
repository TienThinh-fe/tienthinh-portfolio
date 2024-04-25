import './reset.css'
import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sections = gsap.utils.toArray('.main section')

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.main',
    pin: true,
    scrub: 1,
    // end: '+=3000',
    // snap: 1 / (sections.length - 1),
    // markers: true, // TODO: remove on production
  },
})
