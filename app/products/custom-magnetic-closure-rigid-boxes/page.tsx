'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Box, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  Settings, 
  Truck, 
  Layout, 
  Paintbrush,
  HelpCircle
} from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function CustomMagneticClosureRigidBoxesPillarPage() {
  const categories = [
    { name: 'Folding Magnetic Rigid Boxes', desc: 'Flat-pack design for maximum storage and shipping efficiency.', image: '/images/collapsible-magnetic-box-structure.webp' },
    { name: 'Book-Style Rigid Boxes', desc: 'Bespoke flip-top opening for ultra-luxurious unboxing experience.', image: '/images/custom-magnetic-closure-rigid-boxes-elixir.webp' },
    { name: 'Bespoke Branded Collections', desc: 'Full-surface geometric line patterns and precision gold foil.', image: '/images/custom-magnetic-closure-box-branding-detail.webp' },
    { name: 'Premium Shoulder Kits', desc: 'Industrial-grade rigid shoulder frames with magnetic locks.', image: '/images/men-grooming-kit-rigid-shoulder-box.webp' }
  ];

  const features = [
    { title: 'Concealed N52 Magnets', desc: 'Embedded high-strength Neodymium magnets for a seamless, secure click-to-close mechanism.' },
    { title: 'V-Groove Automated Scoring', desc: 'Precision V-grooving machinery guarantees crisp 90-degree edges and perfect structural alignment.' },
    { title: 'Aesthetic Line Patterns', desc: 'Unique spider-web and geometric surface textures available via high-precision debossing.' },
    { title: 'FSC-Certified Greyboard', desc: 'Built with 1200g-1800g Grade AA industrial greyboard for heavy-duty protection.' }
  ];

  const faqs = [
    {
      q: "What makes Elixir-style magnetic boxes different?",
      a: "These boxes combine high-density rigid construction with unique geometric surface textures and internal gold foil branding, offering a multi-layered sensory unboxing experience."
    },
    {
      q: "Can I choose different foil colors?",
      a: "Yes. We offer metallic gold, rose-gold, silver, copper, and custom tinted foils to match your brand identity perfectly."
    },
    {
      q: "Are these boxes suitable for heavy luxury items?",
      a: "Absolutely. With grayboard thickness up to 2.5mm and reinforced magnetic flaps, these boxes can securely house heavy glass bottles, jewelry sets, and high-end electronics."
    },
    {
      q: "What is the global lead time for bulk orders?",
      a: "Standard mass production takes 10-12 days, with global DDP shipping options arriving at your doorstep in 3-7 days via air or 25-30 days via sea."
    }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative', color: '#fff' }}>
      <Header />

      {/* Hero Section */}
      <section className="product-detail-hero" style={{ paddingTop: '160px', paddingBottom: '80px', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="container">
          <div className="detail-grid" style={{ alignItems: 'center' }}>
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Wholesale Pillar Page</span>
              <Image 
                src="/images/custom-magnetic-closure-rigid-boxes-pillar-hero.webp" 
                alt="Premium Custom Magnetic Closure Rigid Boxes Collection" 
                width={800} 
                height={600} 
                priority 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)' }} 
              />
            </div>

            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.3em', marginBottom: '16px', fontWeight: 600 }}>
                <Sparkles size={14} style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }} />
                Premium Factory Direct Sourcing
              </div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', lineHeight: '1.1', fontWeight: 700 }}>
                Custom Magnetic Closure Rigid Boxes
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6', marginBottom: '32px' }}>
                Elevate your brand authority with our precision-engineered magnetic closure rigid boxes. Specializing in high-end B2B solutions, we combine high-density industrial cores with bespoke geometric textures and mirror-sharp gold foil stamping. Designed for global luxury brands seeking absolute unboxing perfection.
              </p>
              
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link href="/#rfq" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                  Get Custom Factory Quote
                </Link>
                <Link href="/guides/custom-magnetic-gift-boxes-manufacturer" className="btn" style={{ border: '1px solid #d4af37', color: '#d4af37', padding: '16px 40px' }}>
                  Explore Buying Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="section" style={{ backgroundColor: '#080808' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Masterpiece Box Architecture</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '700px', margin: '0 auto' }}>Bespoke structural engineering for high-performance retail and e-commerce packaging.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {categories.map((cat, idx) => (
              <div key={idx} style={{ backgroundColor: '#0d0d0d', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-10px)'} onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}>
                <Image src={cat.image} alt={cat.name} width={400} height={300} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '25px' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#d4af37' }}>{cat.name}</h3>
                  <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="section" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="container">
          <div className="detail-grid" style={{ gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Precision Engineered Rigid Core</h2>
              <div style={{ display: 'grid', gap: '30px' }}>
                {features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#d4af37', flexShrink: 0 }}><CheckCircle2 size={24} /></div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>{f.title}</h4>
                      <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>{f.desc || f.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <Image 
                src="/images/custom-magnetic-closure-box-technical.webp" 
                alt="Technical V-Groove Magnetic Closure Construction" 
                width={600} 
                height={500} 
                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }} 
              />
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', backgroundColor: '#d4af37', color: '#000', padding: '20px', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                Zero-Defect QA Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branding Close-up */}
      <section className="section" style={{ backgroundColor: '#070707' }}>
        <div className="container">
          <div className="detail-grid" style={{ gap: '80px', alignItems: 'center', direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Bespoke Foil Embellishments</h2>
              <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px' }}>
                Our on-site hot-stamping studio utilizes high-pressure Swiss-engineered presses to deliver absolute registration accuracy. From intricate line art to bold brand signatures, our foil finishes offer permanent metallic depth that never flakes.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#a0a0a0' }}><Paintbrush size={18} style={{ color: '#d4af37' }} /> Triple-Pass Gold Foil Stamping</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#a0a0a0' }}><Paintbrush size={18} style={{ color: '#d4af37' }} /> Multi-Layered Geometric Debossing</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#a0a0a0' }}><Paintbrush size={18} style={{ color: '#d4af37' }} /> Luxury Suede & Velvet Interior Lamination</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#a0a0a0' }}><Paintbrush size={18} style={{ color: '#d4af37' }} /> Custom Die-cut Structural inserts</li>
              </ul>
            </div>
            <div style={{ direction: 'ltr' }}>
              <Image 
                src="/images/custom-magnetic-closure-box-branding-detail.webp" 
                alt="Luxury Magnetic Box Branding Detail Gold Foil" 
                width={600} 
                height={500} 
                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / AEO Section */}
      <section className="section" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <HelpCircle size={40} style={{ color: '#d4af37', marginBottom: '16px' }} />
            <h2 style={{ fontSize: '2.5rem' }}>Magnetic Closure Box Sourcing FAQ</h2>
          </div>
          <div style={{ display: 'grid', gap: '25px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: '#0d0d0d', padding: '35px', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
                <h4 style={{ color: '#d4af37', fontSize: '1.2rem', marginBottom: '15px', fontWeight: 600 }}>{faq.q}</h4>
                <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC & ISO Certified Facility</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Layout size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>24h Structural Design Turnaround</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Truck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Global DDP & Door-to-Door Fulfillment</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
