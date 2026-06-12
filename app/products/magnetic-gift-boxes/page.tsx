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

export default function MagneticGiftBoxesPillarPage() {
  const categories = [
    { name: 'Collapsible Magnetic Boxes', desc: 'Flat-pack folding design to save 75% on shipping costs.', image: '/images/collapsible-magnetic-box-structure.webp' },
    { name: 'Rigid Book-Style Boxes', desc: 'Classic non-folding structure for maximum premium feel.', image: '/images/custom-magnetic-rigid-gift-box-manufacturer.webp' },
    { name: 'Magnetic Shoulder Boxes', desc: 'Elegant two-piece design with hidden magnetic neck collar.', image: '/images/men-grooming-kit-rigid-shoulder-box.webp' },
    { name: 'Ribbon Closure Magnetic Boxes', desc: 'Integrated satin ribbons for a secure and decorative seal.', image: '/images/pastel-magnetic-ribbon-closure-gift-boxes.webp' }
  ];

  const features = [
    { title: 'N52 Neodymium Magnets', desc: 'We use dual concealed high-strength magnets ensuring a satisfying acoustic click and secure closure every time.' },
    { title: 'V-Groove Engineering', desc: 'Automated precision V-grooving creates sharp, crisp 90-degree corners that define luxury packaging standards.' },
    { title: 'FSC Certified Core', val: 'Our rigid boards are made from 100% recycled high-density greyboard (1200g - 1800g) for ultimate durability.' },
    { title: 'Global DDP Shipping', desc: 'We handle all customs and duties, delivering factory-direct to your warehouse in the US, Europe, and Australia.' }
  ];

  const faqs = [
    {
      q: "What is the MOQ for custom magnetic gift boxes?",
      a: "Our standard MOQ starts at 1,000 units for fully customized orders to unlock offset printing and structural tooling efficiencies. For boutique runs, we offer 500 units with digital printing options."
    },
    {
      q: "How do collapsible magnetic boxes save on shipping?",
      a: "Collapsible boxes ship flat, which reduces the volumetric weight and storage space by up to 75%. This significantly lowers international air and sea freight costs compared to pre-assembled rigid boxes."
    },
    {
      q: "Can I customize the interior of the magnetic box?",
      a: "Absolutely. We offer custom-molded EVA foam, velvet-lined cardstock, satin fabric wraps, and sustainable molded pulp inserts tailored to your specific product dimensions."
    },
    {
      q: "What printing finishes are available?",
      a: "We specialize in metallic hot-foil stamping (gold, silver, rose-gold), raised spot UV, deep debossing, and premium anti-scratch matte or soft-touch lamination."
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
                src="/images/magnetic-gift-boxes-pillar-hero.webp" 
                alt="Premium Custom Magnetic Gift Boxes Wholesale Collection" 
                width={800} 
                height={600} 
                priority 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)' }} 
              />
            </div>

            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.3em', marginBottom: '16px', fontWeight: 600 }}>
                <Sparkles size={14} style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }} />
                Premium Factory Direct
              </div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', lineHeight: '1.1', fontWeight: 700 }}>
                Custom Magnetic Gift Boxes Manufacturer
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6', marginBottom: '32px' }}>
                LuxePack Pro is an ISO-certified manufacturer specializing in high-end magnetic closure boxes. From collapsible flat-pack structures to rigid book-style presentation kits, we provide global brands with precision-engineered, sustainable packaging that drives brand authority and unboxing engagement.
              </p>
              
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link href="/#rfq" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                  Request Bulk Quote
                </Link>
                <Link href="/blog/custom-magnetic-gift-boxes-wholesale" className="btn" style={{ border: '1px solid #d4af37', color: '#d4af37', padding: '16px 40px' }}>
                  Read Sourcing Guide
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Explore Our Magnetic Box Styles</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '700px', margin: '0 auto' }}>Bespoke structural solutions designed for cosmetics, jewelry, electronics, and luxury retail.</p>
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
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Engineered for Elite Unboxing</h2>
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
                src="/images/collapsible-magnetic-box-structure.webp" 
                alt="Technical V-Groove Collapsible Structure" 
                width={600} 
                height={500} 
                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }} 
              />
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', backgroundColor: '#d4af37', color: '#000', padding: '20px', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                75% Shipping Volume Savings
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
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Bespoke Branding & Finishes</h2>
              <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px' }}>
                We combine traditional artisanal craftsmanship with state-of-the-art print finishing. Our direct-factory capabilities ensure absolute color consistency and razor-sharp branding details on any specialty paper surface.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#a0a0a0' }}><Paintbrush size={18} style={{ color: '#d4af37' }} /> Gold, Silver & Rose-Gold Hot Stamping</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#a0a0a0' }}><Paintbrush size={18} style={{ color: '#d4af37' }} /> Raised Spot UV & Dimensional Varnish</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#a0a0a0' }}><Paintbrush size={18} style={{ color: '#d4af37' }} /> Deep Blind & Foil-Stamped Debossing</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#a0a0a0' }}><Paintbrush size={18} style={{ color: '#d4af37' }} /> Custom Suede, Linen & Soft-Touch Wrappers</li>
              </ul>
            </div>
            <div style={{ direction: 'ltr' }}>
              <Image 
                src="/images/luxury-box-hot-foil-detail.webp" 
                alt="Luxury Hot Foil Stamping Branding Detail" 
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
            <h2 style={{ fontSize: '2.5rem' }}>Magnetic Box Sourcing FAQ</h2>
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
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC & ISO9001 Certified Factory</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Layout size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Free 2D Die-lines & 3D Mockups</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Truck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>DDP Shipping to US, UK, AU, EU</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
