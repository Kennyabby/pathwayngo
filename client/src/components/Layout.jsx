import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Icon from './Icon'
import { org } from '../data/site'

// Gives every section an entrance animation as it scrolls into view.
// Sections without hand-placed .reveal elements get them automatically,
// side-by-side layouts slide in from each side, media zooms in, and
// items in a row are staggered.
function prepare(root) {
  root.querySelectorAll('section:not(.hero):not(.page-hero)').forEach((section) => {
    const wrap = section.querySelector(':scope > .wrap') || section
    Array.from(wrap.children).forEach((el) => {
      if (!el.classList.contains('reveal') && !el.querySelector('.reveal')) {
        // A plain grid gets its items animated one by one, anything else animates as a block.
        if (/\b(grid-\d|stats|testimonials|partners|events|list-rows)\b/.test(el.className)) {
          Array.from(el.children).forEach((c) => c.classList.add('reveal'))
        } else {
          el.classList.add('reveal')
        }
      }
    })
  })
  root.querySelectorAll('.reveal:not([data-prepared])').forEach((el) => {
    el.dataset.prepared = '1'
    const parent = el.parentElement
    const isVariant = /reveal--/.test(el.className)
    if (!isVariant) {
      if (el.matches('.media, .program__media')) el.classList.add('reveal--zoom')
      else if (parent?.matches('.split, .program')) {
        el.classList.add(el === parent.firstElementChild ? 'reveal--left' : 'reveal--right')
      }
    }
    const siblings = Array.from(parent?.children || []).filter((c) => c.classList.contains('reveal'))
    const i = siblings.indexOf(el)
    if (siblings.length > 1 && i > 0) el.style.setProperty('--delay', `${Math.min(i, 8) * 0.1}s`)
  })
}

function useReveal(pathname) {
  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )
    const scan = () => {
      prepare(main)
      main.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el))
    }
    scan()
    // Pick up content that appears later (filters, form results, etc).
    let raf
    const mo = new MutationObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(scan) })
    mo.observe(main, { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect(); cancelAnimationFrame(raf) }
  }, [pathname])
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  useReveal(pathname)

  // Scroll to top on page change, or to the #section in the URL.
  useEffect(() => {
    document.activeElement?.blur?.()
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <Header />
      <main key={pathname} className="page-enter"><Outlet /></main>
      <Footer />
      <a className="wa-float" href={`https://wa.me/${org.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
        <Icon name="whatsapp" size={30} />
      </a>
    </>
  )
}
