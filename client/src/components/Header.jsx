import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon'
import { org, formatPhone, telHref, programs } from '../data/site'
import { images } from '../data/images'

export const menu = [
  { label: 'About', to: '/about', children: [
    { to: '/about', label: 'Our Story', desc: 'Who we are and why we exist' },
    { to: '/team', label: 'Our Team', desc: 'Staff and Board of Trustees' },
    { to: '/impact', label: 'Impact & Reports', desc: 'Results, finances and reports' },
    { to: '/partners', label: 'Partners', desc: 'The people who work with us' },
    { to: '/careers', label: 'Careers', desc: 'Jobs, internships and NYSC' },
  ] },
  { label: 'Our Work', to: '/programs', children: [
    { to: '/programs', label: 'All Programmes', desc: 'Everything we do in one place' },
    ...programs.map((p) => ({ to: `/programs/${p.slug}`, label: p.title })),
  ] },
  { label: 'Media', to: '/news', children: [
    { to: '/news', label: 'News', desc: 'Updates from the field' },
    { to: '/stories', label: 'Stories', desc: 'Real people, real change' },
    { to: '/events', label: 'Events', desc: 'Upcoming outreaches and activities' },
    { to: '/gallery', label: 'Gallery', desc: 'Photos from our work' },
  ] },
  { label: 'Get Involved', to: '/get-involved', children: [
    { to: '/donate', label: 'Donate', desc: 'Give once or monthly' },
    { to: '/get-involved#volunteer', label: 'Volunteer', desc: 'Give your time and skills' },
    { to: '/get-involved#fundraise', label: 'Fundraise', desc: 'Birthdays, offices and churches' },
    { to: '/partners#sponsor', label: 'Sponsor a Programme', desc: 'For companies and groups' },
    { to: '/faq', label: 'FAQs', desc: 'Answers to common questions' },
  ] },
  { label: 'Get Help', to: '/get-help' },
  { label: 'Contact', to: '/contact' },
]

function NavItem({ item }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  const active = item.children
    ? item.children.some((c) => pathname === c.to.split('#')[0]) || pathname.startsWith(item.to + '/')
    : pathname === item.to

  if (!item.children) {
    return <div className="nav__item"><NavLink to={item.to} className={active ? 'active' : undefined}>{item.label}</NavLink></div>
  }
  return (
    <div className={`nav__item has-children${open ? ' open' : ''}`}>
      <div className="nav__row">
        <Link to={item.to} className={active ? 'active' : undefined}>
          {item.label} <svg className="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m6 9 6 6 6-6" /></svg>
        </Link>
        <button className="sub-toggle" aria-label={`Show ${item.label} menu`} aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m6 9 6 6 6-6" /></svg>
        </button>
      </div>
      <div className="dropdown">
        {item.children.map((c) => (
          <Link key={c.to + c.label} to={c.to}>
            {c.label}
            {c.desc && <small>{c.desc}</small>}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  // Lock the page behind the mobile menu and close it with the Escape key.
  useEffect(() => {
    // Lock on <html>, not <body>: body overflow would break the sticky header.
    document.documentElement.classList.toggle('menu-open', open)
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span className="hide-sm"><Icon name="pin" size={15} /> Working in 8 states across Nigeria</span>
          <span>
            <Link to="/get-help" className="topbar__help"><span className="hide-sm">Need help?{'\u00a0'}</span>Request support</Link>
            <span className="sep">|</span>
            <Icon name="phone" size={15} />
            <a href={telHref(org.phones[0])}>{formatPhone(org.phones[0])}</a>
          </span>
        </div>
      </div>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap">
          <Link to="/" className="brand" aria-label={`${org.name} home`}>
            <img src={images.brand.emblem} alt="" />
            <span>
              <strong>PATHWAY FINDERS</strong>
              <small>Empowerment Initiative</small>
            </span>
          </Link>
          <nav className={`nav${open ? ' open' : ''}`} aria-label="Main">
            {menu.map((item) => <NavItem key={item.label} item={item} />)}
            <Link to="/donate" className="btn btn--primary"><Icon name="heart" size={17} /> Donate</Link>
          </nav>
          <button className={`menu-toggle${open ? ' is-open' : ''}`} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </header>
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
    </>
  )
}
