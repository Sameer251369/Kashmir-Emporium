import { useState } from 'react'
import { Send, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section 
      className="newsletter-section"
      style={{ 
        position: 'relative',
        padding: '10rem 2rem',
        textAlign: 'center',
        backgroundColor: '#120a07',
        backgroundImage: `url(https://images.pexels.com/photos/33299495/pexels-photo-33299495.jpeg?auto=compress&cs=tinysrgb&w=1920)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax effect
        overflow: 'hidden'
      }}
    >
      {/* Deep Blending Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(26,13,7,0.95) 0%, rgba(15,5,0,0.85) 100%)',
        zIndex: 1
      }} />

      {/* Elegant Inner Frame */}
      <div style={{
        position: 'absolute',
        inset: '2.5rem',
        border: '1px solid rgba(212,175,55,0.15)',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      <div style={{ position: 'relative', zIndex: 3, maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ 
          fontFamily: '"Cinzel", serif', 
          fontSize: '0.75rem', 
          letterSpacing: '0.6em', 
          color: '#d4af37',
          marginBottom: '1.5rem',
          textTransform: 'uppercase'
        }}>
          The Inner Circle
        </div>

        <h2 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: 400,
          color: '#f5efe0',
          marginBottom: '1.5rem',
          lineHeight: 1.1
        }}>
          Invite the <span style={{ fontStyle: 'italic', color: '#e2c275' }}>Valley</span> Home
        </h2>

        <div style={{ 
          width: '50px', 
          height: '1px', 
          background: '#d4af37', 
          margin: '0 auto 2.5rem' 
        }} />

        <p style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.2rem',
          color: 'rgba(245,239,224,0.7)',
          lineHeight: 1.8,
          marginBottom: '3.5rem',
          fontWeight: 300
        }}>
          Subscribe to receive private invitations to new collection previews, 
          artisan narratives, and the heritage of Kashmirica.
        </p>

        {!submitted ? (
          <form 
            onSubmit={handleSubmit} 
            style={{ 
              display: 'flex', 
              maxWidth: '500px', 
              margin: '0 auto',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              style={{
                flex: 1,
                padding: '1.25rem 1.5rem',
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(212,175,55,0.3)',
                borderRight: 'none',
                color: '#f5efe0',
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.1rem',
                outline: 'none',
                backdropFilter: 'blur(5px)'
              }}
              className="newsletter-input"
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#d4af37',
                color: '#1a0d07',
                border: '1px solid #d4af37',
                padding: '0 2rem',
                fontFamily: '"Cinzel", serif',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e2c275'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#d4af37'}
            >
              Subscribe <Send size={14} />
            </button>
          </form>
        ) : (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(212,175,55,0.4)',
            backgroundColor: 'rgba(212,175,55,0.05)',
            color: '#e2c275',
            fontFamily: '"Cinzel", serif',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <Check size={18} /> You are now on the list
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
        
        .newsletter-input::placeholder {
          color: rgba(245,239,224,0.3);
          font-style: italic;
        }

        @media (max-width: 600px) {
          form { flex-direction: column; }
          .newsletter-input { border-right: 1px solid rgba(212,175,55,0.3) !important; border-bottom: none !important; }
          button { padding: 1.25rem !important; justify-content: center !important; }
          .newsletter-section { padding: 6rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}