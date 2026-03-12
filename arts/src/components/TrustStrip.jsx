const stats = [
  { number: '52', label: 'Years of Heritage' },
  { number: '10k+', label: 'Carpets Woven' },
  { number: '240', label: 'Master Artisans' },
  { number: '68', label: 'Countries Shipped' },
]

export default function TrustStrip() {
  return (
    <section
      style={{
        // Deep mahogany blend with a subtle horizontal light sweep
        background: 'linear-gradient(90deg, #0f0500 0%, #1a0d07 50%, #0f0500 100%)',
        padding: '5rem 2.5rem',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
        }}
        className="trust-grid"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              textAlign: 'center',
              padding: '1.5rem',
              // Use a fading vertical divider for a high-end gallery look
              borderRight: i < stats.length - 1 ? '1px solid transparent' : 'none',
              backgroundImage: i < stats.length - 1 
                ? 'linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.3), transparent)' 
                : 'none',
              backgroundSize: '1px 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right',
            }}
            className="trust-item"
          >
            <div
              style={{
                fontFamily: '"Cinzel", serif',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                fontWeight: 400,
                color: '#e2c275', // Muted gold
                lineHeight: 1,
                marginBottom: '0.75rem',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              }}
            >
              {stat.number}
            </div>
            <div
              style={{
                fontFamily: '"Cinzel", serif',
                fontWeight: 400,
                fontSize: '0.65rem',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'rgba(245, 239, 224, 0.5)', // Blended cream
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');

        @media (max-width: 850px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0 !important; }
          .trust-item { 
            border-right: none !important; 
            background-image: none !important;
            padding: 3rem 1rem !important;
          }
          .trust-item:nth-child(odd) {
             background-image: linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.3), transparent) !important;
             background-position: right !important;
          }
          .trust-item:nth-child(1), .trust-item:nth-child(2) {
             border-bottom: 1px solid rgba(212, 175, 55, 0.1) !important;
          }
        }
      `}</style>
    </section>
  )
}