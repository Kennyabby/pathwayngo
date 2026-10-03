// ---------------------------------------------------------------------------
// Smooth, intentional scrolling with Lenis (https://github.com/darkroomengineering/lenis).
//
// - Mouse wheels and trackpads glide instead of jumping in steps.
// - Phones keep their own native touch scrolling (it already feels right).
// - Visitors who ask their device to reduce motion get normal scrolling.
// - The page still scrolls natively underneath, so the sticky header,
//   scroll-in animations and the browser's back button keep working.
// ---------------------------------------------------------------------------
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let lenis = null

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Space to leave above a section so its heading isn't hidden under the sticky header.
export const headerOffset = () => (document.querySelector('.header')?.offsetHeight || 84) + 16

export function initSmoothScroll() {
  if (lenis || prefersReducedMotion()) return lenis
  lenis = new Lenis({
    autoRaf: true,
    lerp: 0.09, // how quickly the page catches up with the wheel: lower is silkier
    smoothWheel: true,
    syncTouch: false, // leave touch scrolling to the phone
    anchors: { offset: -headerOffset(), duration: 1.1 }, // in-page #links glide and stop below the header
    // Let these areas scroll on their own: the mobile menu panel and the photo viewer
    prevent: (node) => !!node.closest?.('.nav, .lightbox, [data-lenis-prevent]'),
  })
  return lenis
}

export function destroySmoothScroll() {
  lenis?.destroy()
  lenis = null
}

// Glide to an element, a selector or a pixel position.
export function scrollToTarget(target, { immediate = false, duration = 1.1 } = {}) {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : -headerOffset(), immediate, duration, force: true })
    return
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target
  const top = typeof target === 'number' ? target : el ? el.getBoundingClientRect().top + window.scrollY - headerOffset() : 0
  window.scrollTo({ top, behavior: immediate || prefersReducedMotion() ? 'instant' : 'smooth' })
}

// Freeze the page behind an overlay (mobile menu, photo viewer) and release it again.
export function lockScroll(locked) {
  if (!lenis) return
  locked ? lenis.stop() : lenis.start()
}
