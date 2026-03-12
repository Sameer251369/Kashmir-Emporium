import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const collections = [
  {
    id: 'carpets',
    title: 'Kashmiri Carpets',
    subtitle: 'The Signature Series',
    image: 'https://images.pexels.com/photos/34887532/pexels-photo-34887532.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'large',
  },
  {
    id: 'shawls',
    title: 'Pashmina Shawls',
    subtitle: 'Woven Whispers',
    image: 'https://images.pexels.com/photos/10409984/pexels-photo-10409984.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'tall',
  },
  {
    id: 'silk',
    title: 'Silk Carpets',
    subtitle: 'Liquid Gold',
    image: 'https://images.pexels.com/photos/33299495/pexels-photo-33299495.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'small',
  },
  {
    id: 'kani',
    title: 'Kani Weaves',
    subtitle: 'Loom Artistry',
    image: 'https://images.pexels.com/photos/6069832/pexels-photo-6069832.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'small',
  },
]

function CollectionTile({ item }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        gridColumn: item.span === 'large' ? 'span 2' : 'span 1',
        gridRow: item.span === 'tall' ? 'span 2' : 'span 1',
        minHeight: item.span === 'large' ? '400px' : '280px',
        backgroundColor: '#1a0800',
      }}
      className="collection-tile"
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 1.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
          filter: hovered ? 'brightness(0.7) contrast(1.1)' : 'brightness(0.55)',
        }}
      />

      {/* Aesthetic Grain/Noise Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      {/* Decorative Border (Shows on Hover) */}
      <div style={{
        position: 'absolute',
        inset: '1.5rem',
        border: '1px solid rgba(212,175,55,0.3)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.6s ease',
        pointerEvents: 'none'
      }} />

      {/* Text Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '3rem 2.5rem',
          zIndex: 2,
        }}
      >
        <div style={{ 
          fontFamily: '"Cinzel", serif',
          fontSize: '0.65rem',
          color: '#e2c275',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
          transform: hovered ? 'translateY(0)' : 'translateY(10px)',
          opacity: hovered ? 1 : 0.8,
          transition: 'all 0.5s ease 0.1s'
        }}>
          {item.subtitle}
        </div>

        <h3
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 400,
            color: '#f5efe0',
            marginBottom: hovered ? '1.5rem' : '0.5rem',
            transition: 'margin 0.4s ease',
          }}
        >
          {item.title}
        </h3>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: '#d4af37',
            fontFamily: '"Cinzel", serif',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(0)' : 'translateX(-10px)',
            transition: 'all 0.4s ease 0.2s',
          }}
        >
          View Collection <ArrowRight size={14} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}

export default function Collections() {
  return (
    <section id="collections" style={{ padding: '10rem 2.5rem', backgroundColor: '#0f0500' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        
        {/* Gallery Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span style={{ 
            fontFamily: '"Cinzel", serif', 
            fontSize: '0.8rem', 
            letterSpacing: '0.6em', 
            color: '#d4af37',
            display: 'block',
            marginBottom: '1.5rem'
          }}>
            The Archive
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 400,
              color: '#f5efe0',
              lineHeight: 1.1,
            }}
          >
            A Legacy in Every <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Knot</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: 'minmax(280px, auto)',
            gap: '1.5rem',
          }}
          className="collections-grid"
        >
          {collections.map((item) => (
            <CollectionTile key={item.id} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Playfair+Display:ital,wght@0,400;1,300;1,400&display=swap');

        @media (max-width: 992px) {
          .collections-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 650px) {
          .collections-grid { grid-template-columns: 1fr !important; }
          .collection-tile { grid-column: span 1 !important; grid-row: span 1 !important; min-height: 320px !important; }
        }
      `}</style>
    </section>
  )
}