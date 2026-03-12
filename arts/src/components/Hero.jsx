import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        // Reduced movement for a smoother, more "expensive" feel
        bgRef.current.style.transform = `scale(1.1) translateY(${window.scrollY * 0.15}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '750px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a0800', // Fallback
      }}
    >
      {/* Background image with parallax */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-10%',
          backgroundImage: `url(https://images.pexels.com/photos/28379961/pexels-photo-28379961.jpeg?auto=compress&cs=tinysrgb&w=1920)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.1)',
          transition: 'transform 0.1s ease-out',
          filter: 'brightness(0.7) contrast(1.1)',
        }}
      />

      {/* Luxury Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(26,8,0,0.4) 0%, rgba(15,5,0,0.9) 100%)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '1000px',
        }}
      >
        <div 
          style={{ 
            fontFamily: '"Cinzel", serif',
            fontSize: '0.8rem',
            letterSpacing: '0.5em',
            color: 'var(--color-gold-light, #d4af37)',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            opacity: 0.9
          }}
        >
          Kashmir — The Heritage Collection — Est. 1972
        </div>

        <h1
          style={{
            fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 400,
            color: '#f5efe0',
            lineHeight: 1,
            marginBottom: '2rem',
            letterSpacing: '-0.01em',
            textShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          Woven Dreams from the<br />
          <span style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontStyle: 'italic',
            color: '#e2c275',
            fontWeight: 300
          }}>
            Heart of the Valley
          </span>
        </h1>

        <div style={{ 
          width: '60px', 
          height: '1px', 
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)', 
          margin: '0 auto 2.5rem' 
        }} />

        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
            color: 'rgba(245,239,224,0.9)',
            fontStyle: 'italic',
            marginBottom: '3.5rem',
            maxWidth: '650px',
            margin: '0 auto 3.5rem',
            lineHeight: 1.6,
          }}
        >
          Discover the intricate artistry of hand-knotted silk and pashmina, 
          where every knot is a testament to five decades of craftsmanship.
        </p>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#collections" className="btn-gold" style={buttonStyle(true)}>
            View Masterpieces
          </a>
          <a href="#our-story" className="btn-outline" style={buttonStyle(false)}>
            The Silk Route
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          color: '#d4af37',
          animation: 'bounce 2.5s infinite ease-in-out',
        }}
      >
        <span style={{ 
          fontFamily: '"Cinzel", serif', 
          fontSize: '0.65rem', 
          letterSpacing: '0.3em', 
          textTransform: 'uppercase',
          opacity: 0.7
        }}>
          Explore
        </span>
        <ArrowDown size={18} strokeWidth={1} />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.5; }
          50% { transform: translateX(-50%) translateY(10px); opacity: 1; }
        }

        .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.3); }
        .btn-outline:hover { background: rgba(245,239,224,0.05); transform: translateY(-2px); }
      `}</style>
    </section>
  )
}

// Utility for button styling to keep the JSX clean
const buttonStyle = (isGold) => ({
  padding: '1rem 2.5rem',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontFamily: '"Cinzel", serif',
  fontSize: '0.75rem',
  letterSpacing: '0.2em',
  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
  border: isGold ? 'none' : '1px solid rgba(245,239,224,0.3)',
  backgroundColor: isGold ? '#b8860b' : 'transparent',
  color: isGold ? '#1a0800' : '#f5efe0',
  fontWeight: 700
})