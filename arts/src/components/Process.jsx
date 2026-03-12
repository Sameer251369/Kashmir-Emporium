import { Pencil, Scissors, Package } from 'lucide-react'

const steps = [
  {
    number: 'I',
    icon: Pencil,
    title: 'The Cartography',
    description: 'Every masterpiece begins as a "Talim"—a coded script of knots hand-drawn by master artists, inspired by the geometry of ancient Persian gardens.',
  },
  {
    number: 'II',
    icon: Scissors,
    title: 'The Alchemy',
    description: 'Under the patient hands of our artisans, raw silk and highland wool are transformed. A single square inch can hold up to 400 individual hand-tied knots.',
  },
  {
    number: 'III',
    icon: Package,
    title: 'The Provenance',
    description: 'Every creation is finished with organic vegetable washes and a signature of authenticity, documenting its journey from the loom to your sanctuary.',
  },
]

export default function Process() {
  return (
    <section
      style={{
        padding: '10rem 2.5rem',
        backgroundColor: '#1a0d07', // Deep Umber/Chocolate background
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(184,134,11,0.08) 0%, transparent 70%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%233d261a' stroke-width='1'/%3E%3C/svg%3E")
        `, // Subtle "Woven" pattern background
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Header with Gold Blending */}
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <span style={{ 
            fontFamily: '"Cinzel", serif', 
            fontSize: '0.75rem', 
            letterSpacing: '0.6em', 
            color: '#d4af37',
            display: 'block',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            opacity: 0.8
          }}>
            The Art of Slow Living
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              color: '#f5efe0',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
          >
            Woven in <span style={{ fontStyle: 'italic', color: '#e2c275' }}>Silence</span>
          </h2>
          <div style={{ 
            width: '40px', 
            height: '2px', 
            background: '#d4af37', 
            margin: '2.5rem auto 0',
            boxShadow: '0 0 15px #d4af37' 
          }} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '5rem',
            position: 'relative',
          }}
          className="process-grid"
        >
          {/* Connecting "Silk Thread" Line */}
          <div
            style={{
              position: 'absolute',
              top: '4.5rem',
              left: '15%',
              right: '15%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.4) 50%, transparent 100%)',
            }}
            className="process-line"
          />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                  <div
                    style={{
                      width: '9rem',
                      height: '9rem',
                      borderRadius: '50%',
                      border: '1px solid rgba(212,175,55,0.2)',
                      background: 'linear-gradient(145deg, #26150e, #1a0d07)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 3,
                      boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                    }}
                  >
                    <Icon size={32} color="#e2c275" strokeWidth={1} />
                    <span
                      style={{
                        fontFamily: '"Cinzel", serif',
                        fontSize: '0.7rem',
                        letterSpacing: '0.3em',
                        color: 'rgba(226,194,117,0.5)',
                        marginTop: '0.75rem'
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: '"Cinzel", serif',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: '#f5efe0',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.15em',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: '1.2rem',
                    lineHeight: 1.8,
                    color: 'rgba(245,239,224,0.7)',
                    padding: '0 0.5rem'
                  }}
                >
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
        
        @media (max-width: 1024px) {
          .process-grid { grid-template-columns: 1fr !important; gap: 6rem !important; }
          .process-line { display: none; }
        }
      `}</style>
    </section>
  )
}