import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react'

const columns = [
  {
    heading: 'The Collection',
    links: ['Hand-knotted Carpets', 'Pashmina Shawls', 'Kani Masterpieces', 'Gift Ensembles', 'The Archive'],
  },
  {
    heading: 'The Maison',
    links: ['Our Legacy', 'The Artisans', 'The Craft', 'Journal', 'Global Presence'],
  },
  {
    heading: 'Concierge',
    links: ['Shipping & Provenance', 'Care & Longevity', 'Authentication', 'Bespoke Orders', 'Contact'],
  },
]

const socials = [
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Youtube, label: 'YouTube' },
  { Icon: Twitter, label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0f0500', // Deepest ebony-brown
        color: '#f5efe0',
        paddingTop: '8rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle "Woven" Texture Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)'
      }} />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem 6rem',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '4rem',
        }}
        className="footer-grid"
      >
        {/* Brand Narrative Column */}
        <div>
          <div
            style={{
              fontFamily: '"Cinzel", serif',
              fontSize: '1.4rem',
              fontWeight: 400,
              letterSpacing: '0.3em',
              color: '#d4af37',
              marginBottom: '2rem',
              textTransform: 'uppercase'
            }}
          >
            Kashmir Emporium
          </div>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'rgba(245,239,224,0.5)',
              marginBottom: '2.5rem',
              maxWidth: '300px',
              fontStyle: 'italic'
            }}
          >
            Preserving the rhythmic heritage of the loom since 1972. Every thread carries the soul of the valley to discerning homes worldwide.
          </p>
          
          {/* Social "Coin" Buttons */}
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid rgba(212,175,55,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(212,175,55,0.6)',
                  backgroundColor: 'rgba(212,175,55,0.02)',
                  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  textDecoration: 'none'
                }}
                className="social-button"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#d4af37';
                  e.currentTarget.style.color = '#1a0d07';
                  e.currentTarget.style.backgroundColor = '#d4af37';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)';
                  e.currentTarget.style.color = 'rgba(212,175,55,0.6)';
                  e.currentTarget.style.backgroundColor = 'rgba(212,175,55,0.02)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon size={16} strokeWidth={1.2} />
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <div
              style={{
                fontFamily: '"Cinzel", serif',
                fontSize: '0.75rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#d4af37',
                marginBottom: '2.5rem',
                opacity: 0.8
              }}
            >
              {col.heading}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1rem',
                      color: 'rgba(245,239,224,0.45)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={e => {
                      e.target.style.color = '#f5efe0';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.target.style.color = 'rgba(245,239,224,0.45)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright Bar */}
      <div style={{
        borderTop: '1px solid rgba(212,175,55,0.05)',
        padding: '3rem 2rem',
        backgroundColor: 'rgba(0,0,0,0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{
            fontFamily: '"Cinzel", serif',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            color: 'rgba(212,175,55,0.4)',
            textTransform: 'uppercase'
          }}>
            Handcrafted in Srinagar · Patrons in 68+ Countries
          </div>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '0.9rem',
            color: 'rgba(245,239,224,0.25)',
            letterSpacing: '0.05em'
          }}>
            © 2026 Kashmir emporium Archive. All Rights Reserved.
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');
        
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 4rem 2rem !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}