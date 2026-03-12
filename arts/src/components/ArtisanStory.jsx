export default function ArtisanStory() {
  return (
    <section
      id="our-story"
      style={{
        backgroundColor: '#1a0800', // Deepest Mahogany
        backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(184,134,11,0.05) 0%, transparent 100%)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          minHeight: '650px',
        }}
        className="artisan-grid"
      >
        {/* Visual Side */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px' }}>
          <img
            src="https://images.pexels.com/photos/15467468/pexels-photo-15467468.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Master artisan weaving"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'sepia(20%) brightness(0.8) contrast(1.1)',
            }}
          />
          
          {/* Blend Overlay: Fades the image into the center of the grid */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, transparent 80%, #1a0800 100%)',
            pointerEvents: 'none'
          }} className="image-blend-overlay" />

          {/* Floating Identification Tag */}
          <div
            style={{
              position: 'absolute',
              bottom: '3rem',
              left: '3rem',
              borderLeft: '2px solid #d4af37',
              padding: '0.5rem 1.5rem',
              backgroundColor: 'rgba(26,8,0,0.6)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{
              fontFamily: '"Cinzel", serif',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#f5efe0',
            }}>
              The Hands of Heritage
            </div>
            <div style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.9rem',
              color: '#d4af37',
              fontStyle: 'italic',
              marginTop: '0.25rem'
            }}>
              Master Weaver · Srinagar Studio
            </div>
          </div>
        </div>

        {/* Narrative Side */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '5rem 6rem 5rem 4rem',
            position: 'relative'
          }}
          className="artisan-text"
        >
          {/* Ghosted Background Quote */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              fontFamily: '"Playfair Display", serif',
              fontSize: '15rem',
              color: 'rgba(212,175,55,0.04)',
              lineHeight: 0,
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          >
            &ldquo;
          </div>

          <div style={{ 
            fontFamily: '"Cinzel", serif', 
            fontSize: '0.75rem', 
            letterSpacing: '0.5em', 
            color: '#d4af37', 
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>
            Our Provenance
          </div>

          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#f5efe0',
              lineHeight: 1.1,
              marginBottom: '2rem',
            }}
          >
            A Tapestry of Time<br />
            <span style={{ color: '#e2c275', fontStyle: 'italic', fontWeight: 300 }}>
              Written in Silk & Wool
            </span>
          </h2>

          <div style={{ width: '40px', height: '1px', background: '#d4af37', marginBottom: '2.5rem' }} />

          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.25rem',
              lineHeight: 1.8,
              color: 'rgba(245,239,224,0.75)',
              marginBottom: '3rem',
              maxWidth: '480px'
            }}
          >
            In the quiet valleys of Kashmir, time moves differently. Since 1972, we have preserved the meditative rhythm of the loom. Each knot is a deliberate act of patience—a single carpet often requiring more than a year of unwavering dedication from a master artisan.
          </p>

          <a 
            href="#our-story" 
            style={{ 
              alignSelf: 'flex-start',
              fontFamily: '"Cinzel", serif',
              fontSize: '0.75rem',
              color: '#d4af37',
              textDecoration: 'none',
              letterSpacing: '0.2em',
              borderBottom: '1px solid rgba(212,175,55,0.3)',
              paddingBottom: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.borderBottom = '1px solid #d4af37'}
            onMouseLeave={(e) => e.target.style.borderBottom = '1px solid rgba(212,175,55,0.3)'}
          >
            Discover the Archive
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Playfair+Display:ital,wght@0,400;1,300;1,400&display=swap');

        @media (max-width: 1024px) {
          .artisan-grid { grid-template-columns: 1fr !important; }
          .image-blend-overlay { 
            background: linear-gradient(to bottom, transparent 70%, #1a0800 100%) !important; 
          }
          .artisan-text { padding: 4rem 2rem !important; }
        }
      `}</style>
    </section>
  )
}