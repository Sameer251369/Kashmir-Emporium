import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'The silk carpet has completely transformed our space. The craftsmanship is beyond anything I have seen in modern stores. It is truly a piece of the valley.',
    name: 'Margaret Thornton',
    location: 'London, UK',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?u=margaret-thornton',
  },
  {
    quote: 'The pashmina shawl is absolutely divine. It feels like wearing a cloud. The intricate embroidery work is incredibly detailed and the packaging was exquisite.',
    name: 'Sophie Rénard',
    location: 'Paris, France',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?u=sophie-renard',
  },
  {
    quote: 'Third purchase from Kashmirica and each one has been flawless. The authenticity certificate gives complete peace of mind. These are heirloom-quality pieces.',
    name: 'James Whitfield',
    location: 'New York, USA',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?u=james-whitfield',
  },
  {
    quote: 'Exceptional quality. The carpet arrived beautifully rolled, and the colours are even more vibrant in person than in the photos. A masterwork.',
    name: 'Anita Krishnamurthy',
    location: 'Mumbai, India',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?u=anita-krishnamurthy',
  },
  {
    quote: 'Ordered a Kani shawl as a wedding gift and the recipient was moved to tears. Truly a one-of-a-kind piece. Impeccable customer care.',
    name: 'Eleanor Davies',
    location: 'Sydney, Australia',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?u=eleanor-davies',
  },
  {
    quote: 'Having visited Kashmir myself, I can confirm that Kashmirica truly captures the authentic spirit of the valley. The woolen carpet is stunning.',
    name: 'Carlos Mendoza',
    location: 'Barcelona, Spain',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?u=carlos-mendoza',
  },
]

function TestimonialCard({ t, featured }) {
  return (
    <div
      style={{
        backgroundColor: featured ? 'rgba(212, 175, 55, 0.03)' : '#1e140f',
        border: featured ? '1px solid rgba(212, 175, 55, 0.3)' : '1px solid rgba(212, 175, 55, 0.1)',
        padding: '2.5rem',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        transition: 'all 0.5s ease',
      }}
    >
      {/* Subtle Background Ornament */}
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        fontFamily: '"Playfair Display", serif',
        fontSize: '4rem',
        color: 'rgba(212, 175, 55, 0.1)',
        lineHeight: 1,
        userSelect: 'none',
      }}>
        &ldquo;
      </div>

      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={10}
            fill={i < t.rating ? '#d4af37' : 'none'}
            stroke={i < t.rating ? '#d4af37' : 'rgba(212, 175, 55, 0.2)'}
          />
        ))}
      </div>

      <p
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontWeight: 300,
          fontStyle: 'italic',
          fontSize: '1.15rem',
          lineHeight: 1.7,
          color: 'rgba(245, 239, 224, 0.8)',
          flex: 1,
        }}
      >
        {t.quote}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          overflow: 'hidden',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          filter: 'grayscale(100%) opacity(0.7)' 
        }}>
          <img src={t.avatar} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <div
            style={{
              fontFamily: '"Cinzel", serif',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              fontWeight: 400,
              color: '#f5efe0',
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontFamily: '"Cinzel", serif',
              fontSize: '0.6rem',
              color: '#d4af37',
              letterSpacing: '0.1em',
              opacity: 0.7,
              marginTop: '0.2rem'
            }}
          >
            {t.location}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '10rem 2rem',
        backgroundColor: '#120a07', // Darkest walnut blend
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(61,12,2,0.1) 0%, transparent 80%)`,
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1250px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{ 
            fontFamily: '"Cinzel", serif', 
            fontSize: '0.75rem', 
            letterSpacing: '0.5em', 
            color: '#d4af37', 
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>
            Patronage
          </div>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: '#f5efe0',
            }}
          >
            Voices of the <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Global Collection</span>
          </h2>
          <div style={{ 
            width: '60px', 
            height: '1px', 
            background: 'linear-gradient(90deg, transparent, #d4af37, transparent)', 
            margin: '2rem auto 0' 
          }} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} featured={i === 1 || i === 4} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@1,300;1,400&family=Playfair+Display:ital,wght@0,400;1,300&display=swap');
        
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}