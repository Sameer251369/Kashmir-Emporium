import { useState, useEffect } from 'react'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Collections', 'Carpets', 'Shawls', 'Our Story', 'Contact']

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '1.5rem 3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          // The "Blend" effect: transitions from invisible to a deep, translucent wood finish
          backgroundColor: scrolled ? 'rgba(26, 8, 0, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(15px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent',
          transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: '1.2rem',
            fontWeight: 400,
            letterSpacing: '0.4em',
            color: '#f5efe0',
            textDecoration: 'none',
            textTransform: 'uppercase'
          }}
        >
          Kashmir Emporium
        </a>

        <div className="hidden-mobile" style={{ display: 'flex', gap: '3rem' }}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              style={{
                fontFamily: '"Cinzel", serif',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(245, 239, 224, 0.9)',
                textDecoration: 'none',
                transition: 'color 0.4s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = '#d4af37'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(245, 239, 224, 0.9)'}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button style={{ background: 'none', border: 'none', color: '#f5efe0', cursor: 'pointer', opacity: 0.8 }}>
            <Search size={18} strokeWidth={1} />
          </button>
          <button style={{ background: 'none', border: 'none', color: '#f5efe0', cursor: 'pointer', opacity: 0.8 }}>
            <ShoppingBag size={18} strokeWidth={1} />
          </button>
          <button
            onClick={() => setMobileOpen(true)}
            style={{ background: 'none', border: 'none', color: '#f5efe0', display: 'none' }}
            className="mobile-menu-btn"
          >
            <Menu size={20} strokeWidth={1} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay with Glass Effect */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100,
          backgroundColor: '#0f0500',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3rem'
        }}>
          <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: '#f5efe0' }}>
            <X size={28} />
          </button>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileOpen(false)} 
               style={{ fontFamily: '"Cinzel", serif', fontSize: '1.5rem', color: '#f5efe0', textDecoration: 'none' }}>
              {link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}