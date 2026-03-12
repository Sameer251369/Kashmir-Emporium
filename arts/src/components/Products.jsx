import { useState } from 'react'
import { ShoppingBag, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Kashmir Silk Carpet',
    material: '100% Pure Silk',
    price: '$2,450',
    originalPrice: '$2,950',
    rating: 5,
    reviews: 48,
    image: 'https://images.pexels.com/photos/28379961/pexels-photo-28379961.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Pashmina Long Shawl',
    material: '100% Pashmina',
    price: '$380',
    originalPrice: null,
    rating: 5,
    reviews: 126,
    image: 'https://images.pexels.com/photos/10409984/pexels-photo-10409984.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Woolen Medallion Carpet',
    material: 'Hand-knotted Wool',
    price: '$1,280',
    originalPrice: '$1,680',
    rating: 5,
    reviews: 67,
    image: 'https://images.pexels.com/photos/31917723/pexels-photo-31917723.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Sale',
  },
  {
    id: 4,
    name: 'Kani Jamawar Shawl',
    material: 'Kani Weave',
    price: '$520',
    originalPrice: null,
    rating: 4,
    reviews: 39,
    image: 'https://images.pexels.com/photos/2112000/pexels-photo-2112000.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Limited',
  },
]

const tagColors = {
  Bestseller: { bg: '#B8860B', color: '#fff' },
  New: { bg: '#2C5F2E', color: '#fff' },
  Sale: { bg: '#800000', color: '#fff' },
  Limited: { bg: '#4B3621', color: '#F5EFE0' },
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const tag = tagColors[product.tag]

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#1E140F', // Darker, warmer background
        border: '1px solid rgba(184,134,11,0.15)',
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: hovered ? '0 30px 60px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.2)',
        position: 'relative'
      }}
    >
      {/* Image Container with Soft-Light Blend */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '320px' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1)',
            filter: hovered ? 'brightness(1)' : 'brightness(0.85)',
          }}
        />
        
        {/* Overlay to blend image into the card */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 60%, #1E140F 100%)',
          pointerEvents: 'none'
        }} />

        {/* Floating Tag */}
        <div
          style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            padding: '0.4rem 1rem',
            backgroundColor: tag.bg,
            color: tag.color,
            fontFamily: '"Cinzel", serif',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}
        >
          {product.tag}
        </div>
      </div>

      {/* Product Information */}
      <div style={{ padding: '1.5rem', textAlign: 'center' }}>
        <div style={{ 
          fontFamily: '"Cinzel", serif', 
          fontSize: '0.65rem', 
          color: '#d4af37', 
          letterSpacing: '0.3em',
          marginBottom: '0.75rem',
          opacity: 0.8
        }}>
          {product.material}
        </div>
        
        <h3
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.35rem',
            fontWeight: 400,
            color: '#f5efe0',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h3>

        {/* Refined Rating Stars */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', marginBottom: '1.5rem' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={11}
              fill={i < product.rating ? '#d4af37' : 'none'}
              stroke={i < product.rating ? '#d4af37' : 'rgba(245,239,224,0.2)'}
            />
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
            <span style={{ 
              fontFamily: '"Cinzel", serif', 
              fontSize: '1.4rem', 
              color: '#f5efe0' 
            }}>
              {product.price}
            </span>
            {product.originalPrice && (
              <span style={{ 
                fontFamily: '"Cormorant Garamond", serif', 
                fontSize: '1rem', 
                color: 'rgba(245,239,224,0.4)', 
                textDecoration: 'line-through' 
              }}>
                {product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            style={{
              width: '100%',
              backgroundColor: added ? '#2C5F2E' : 'transparent',
              color: '#f5efe0',
              border: added ? '1px solid #2C5F2E' : '1px solid rgba(212,175,55,0.4)',
              padding: '0.8rem',
              fontFamily: '"Cinzel", serif',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem'
            }}
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            {added ? 'In Collection' : 'Acquire'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section
      id="carpets"
      style={{
        padding: '8rem 2rem',
        backgroundColor: '#120a07', // Deep mahogany-black background
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(61,12,2,0.15) 0%, transparent 80%)`,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ 
            fontFamily: '"Cinzel", serif', 
            fontSize: '0.75rem', 
            letterSpacing: '0.6em', 
            color: '#d4af37',
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>
            The Curated Gallery
          </div>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: '#f5efe0',
              letterSpacing: '0.02em'
            }}
          >
            Featured Masterpieces
          </h2>
          <div style={{ 
            width: '80px', 
            height: '1px', 
            background: 'linear-gradient(90deg, transparent, #d4af37, transparent)', 
            margin: '2rem auto 0' 
          }} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
          }}
          className="products-grid"
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');

        @media (max-width: 1100px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 650px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}