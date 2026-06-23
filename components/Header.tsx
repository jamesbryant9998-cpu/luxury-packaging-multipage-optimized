'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === '/';

  const productCategories = [
    { name: 'Magnetic Gift Boxes', path: '/products/magnetic-gift-boxes', desc: 'Premium custom magnetic closure collection' },
    { name: 'Experience Elegance Box', path: '/products/custom-magnetic-rigid-gift-boxes-pillar', desc: 'Elite navy blue rigid magnetic boxes' },
    { name: 'Luxury Gift Bags', path: '/products/luxury-paper-gift-bags', desc: 'Bespoke high-end paper carrier bags' },
    { name: 'Elixir Magnetic Box', path: '/products/custom-magnetic-closure-rigid-boxes', desc: 'Custom geometric magnetic rigid boxes' },
    { name: 'Graduation Gift Set', path: '/products/graduation-gift-set-rigid-box', desc: 'University alumni gift box sets' },
    { name: 'Grooming Kit Box', path: '/products/men-grooming-kit-rigid-shoulder-box', desc: 'Minimalist men grooming kit packaging' },
    { name: 'Ribbon Rigid Boxes', path: '/products/premium-ribbon-tied-rigid-gift-boxes', desc: 'Lid-and-base boxes with satin ribbon bows' },
    { name: 'Luxury Carrier Bags', path: '/products/minimalist-luxury-hot-foil-paper-carrier-bags', desc: 'Minimalist hot-foil paper carrier bags' },
    { name: 'Jewelry Showcase Box', path: '/products/luxury-velvet-lined-jewelry-showcase-rigid-box', desc: 'Premium velvet-lined gold foil jewelry box' },
    { name: 'Pastel Magnetic Box', path: '/products/pastel-magnetic-ribbon-closure-gift-boxes', desc: 'Collapsible pastel box with ribbon bows' },
    { name: 'Corrugated Mailer Boxes', path: '/products/custom-corrugated-mailer-boxes', desc: 'Custom printed subscription mailer boxes' },
    { name: 'Skincare Dropper Box', path: '/products/luxury-cosmetics-serum-dropper-box', desc: 'Bespoke cosmetics serum packaging kit' },
    { name: 'Polka Dot Gift Bag', path: '/products/polka-dot-especially-for-you-gift-bag', desc: 'Pink polka dot paper gift bag' },
    { name: 'Bespoke Custom Gift Bag', path: '/products/bespoke-personalized-floral-ribbon-gift-bag', desc: 'Bespoke custom floral ribbon gift bag' },
    { name: 'Forest Green Matte Box', path: '/products/forest-green-custom-magnetic-box', desc: 'Custom brand forest green magnetic packaging' },
    { name: 'Especially For You Gift Box', path: '/products/especially-for-you-magnetic-gift-box', desc: 'Bespoke especially for you magnetic gift box' },
    { name: 'Gold-Border Matte Box', path: '/products/gold-border-magnetic-box', desc: 'Rigid matte black box with gilded border' },
    { name: 'Cosmetic Rigid Boxes', path: '/products/custom-magnetic-rigid-gift-box-manufacturer', desc: 'High-end custom direct-factory folding structures' },
    { name: 'Cosmetics Packaging', path: '/products/cosmetic-boxes', desc: 'Bespoke skincare & makeup boxes' },
    { name: 'Jewelry Drawers', path: '/products/jewelry-boxes', desc: 'Satin ribbon pulls & velvet linings' },
    { name: 'Eco Kraft Mailers', path: '/products/gift-boxes', desc: 'Sustainable premium shipping boxes' },
    { name: 'Wine Packaging', path: '/products/wine-boxes', desc: 'Premium rigid wine presentation boxes' },
    { name: 'Slide-out Drawer Boxes', path: '/products/drawer-boxes', desc: 'Custom premium sliding sleeves' },
    { name: 'Perfume Packaging', path: '/products/perfume-boxes', desc: 'Elegant double-gate open displays' },
    { name: 'Classic Rigid Boxes', path: '/products/rigid-boxes', desc: 'High-density heavy-duty structures' },
    { name: 'Luxury Watch Boxes', path: '/products/watch-boxes', desc: 'Microfiber-lined premium watch slots' },
    { name: 'Leather Gift Boxes', path: '/products/leather-boxes', desc: 'Handcrafted luxury wood-core boxes' },
    { name: 'Eco Molded Pulp', path: '/products/pulp-boxes', desc: '100% Biodegradable zero-plastic trays' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLink = (anchor: string) => {
    return isHome ? anchor : `/${anchor}`;
  };

  return (
    <header style={{
      position: scrolled ? 'fixed' : 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: scrolled ? '16px 0' : '24px 0',
      backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.15)' : '1px solid rgba(212, 175, 55, 0.08)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Brand Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.12em', color: '#fff' }}>
            LUXE<span style={{ color: '#d4af37' }}>PACK</span>
            <span style={{ fontSize: '0.75rem', verticalAlign: 'super', color: '#a0a0a0', marginLeft: '3px', fontWeight: 400 }}>PRO</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '30px', alignItems: 'center' }} className="desktop-nav-container">
          {/* Products Dropdown Wrapper */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <button 
              aria-expanded={isProductsDropdownOpen}
              aria-haspopup="true"
              aria-label="Toggle products navigation dropdown"
              style={{ 
                background: 'none',
                border: 'none',
                color: isProductsDropdownOpen ? '#d4af37' : '#a0a0a0', 
                fontSize: '0.9rem', 
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 0'
              }}
            >
            Products
            <ChevronDown 
              size={14} 
              style={{ 
                transition: 'transform 0.3s', 
                transform: isProductsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
              }} 
            />
          </button>

          {isProductsDropdownOpen && (
            <div 
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '650px',
                backgroundColor: '#0a0a0a',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                borderRadius: '12px',
                padding: '30px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                zIndex: 110,
                marginTop: '10px'
              }}
            >
              {productCategories.slice(0, 12).map((cat, idx) => (
                <Link 
                  key={idx} 
                  href={cat.path}
                  style={{ 
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '12px',
                    borderRadius: '8px',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>{cat.name}</span>
                  <span style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.3' }}>{cat.desc}</span>
                </Link>
              ))}
              <div style={{ gridColumn: '1 / span 2', paddingTop: '15px', borderTop: '1px solid rgba(212, 175, 55, 0.1)', textAlign: 'center' }}>
                 <Link href="/#products" style={{ color: '#d4af37', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>View All Categories →</Link>
              </div>
            </div>
          )}
          </div>

          <a 
            href={getLink('#about')} 
            style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} 
            onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} 
            onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}
          >
            About Us
          </a>

          <a 
            href={getLink('#resources')} 
            style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} 
            onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} 
            onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}
          >
            Resources
          </a>

          <a 
            href="/news" 
            style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} 
            onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} 
            onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}
          >
            News
          </a>

          <a 
            href="/blog" 
            style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} 
            onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} 
            onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}
          >
            Blog
          </a>

          <a 
            href={getLink('#rfq')} 
            className="btn btn-primary" 
            style={{ 
              padding: '10px 24px', 
              fontSize: '0.8rem', 
              borderRadius: '4px',
              marginLeft: '10px'
            }}
          >
            Inquire Now
          </a>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle main mobile navigation menu"
          aria-controls="mobile-navigation-menu"
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            zIndex: 120
          }}
          className="mobile-nav-trigger"
        >
          {isMobileMenuOpen ? <X size={24} style={{ color: '#d4af37' }} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#050505',
          zIndex: 90,
          display: 'flex',
          flexDirection: 'column',
          padding: '100px 30px 40px',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            {/* Products Accordion for Mobile */}
            <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.08)', paddingBottom: '16px' }}>
              <button 
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                aria-expanded={isMobileProductsOpen}
                aria-label="Toggle mobile products sub-menu"
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                Products
                <ChevronDown 
                  size={18} 
                  style={{ 
                    color: '#d4af37',
                    transition: 'transform 0.3s',
                    transform: isMobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }} 
                />
              </button>
              
              {isMobileProductsOpen && (
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '14px', 
                  marginTop: '16px',
                  paddingLeft: '12px',
                  borderLeft: '2px solid rgba(212, 175, 55, 0.2)'
                }}>
                  {productCategories.slice(0, 10).map((p, idx) => (
                    <Link 
                      key={idx} 
                      href={p.path} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ 
                        color: '#a0a0a0', 
                        textDecoration: 'none', 
                        fontSize: '0.95rem' 
                      }}
                    >
                      {p.name}
                    </Link>
                  ))}
                  <Link href="/#products" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#d4af37', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>All Categories →</Link>
                </div>
              )}
            </div>

            <Link 
              href={getLink('#about')} 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                color: '#fff', 
                textDecoration: 'none', 
                fontSize: '1.2rem', 
                fontWeight: 600,
                borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                paddingBottom: '16px'
              }}
            >
              About Us
            </Link>

            <Link 
              href={getLink('#resources')} 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                color: '#fff', 
                textDecoration: 'none', 
                fontSize: '1.2rem', 
                fontWeight: 600,
                borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                paddingBottom: '16px'
              }}
            >
              Resources
            </Link>

            <Link 
              href="/news" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                color: '#fff', 
                textDecoration: 'none', 
                fontSize: '1.2rem', 
                fontWeight: 600,
                borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                paddingBottom: '16px'
              }}
            >
              News
            </Link>

            <Link 
              href="/blog" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                color: '#fff', 
                textDecoration: 'none', 
                fontSize: '1.2rem', 
                fontWeight: 600,
                borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                paddingBottom: '16px'
              }}
            >
              Blog
            </Link>

            <Link 
              href="#rfq" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                backgroundColor: '#d4af37',
                color: '#000',
                textDecoration: 'none',
                padding: '16px',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginTop: '10px'
              }}
            >
              GET QUOTE
            </Link>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '30px' }}>
              <Instagram size={20} color="#666" />
              <Linkedin size={20} color="#666" />
              <Facebook size={20} color="#666" />
            </div>
            <p style={{ color: '#444', fontSize: '0.8rem', textAlign: 'center' }}>
              © 2026 LUXEPACK PRO. High-End Packaging.
            </p>
          </div>
        </div>
      )}

      {/* Global CSS for Mobile Nav Trigger Persistence */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          .desktop-nav-container { display: flex !important; }
          .mobile-nav-trigger { display: none !important; }
        }
      `}</style>
    </header>
  );
}
