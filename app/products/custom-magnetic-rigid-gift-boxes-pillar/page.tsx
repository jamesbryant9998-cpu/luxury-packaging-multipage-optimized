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
  HelpCircle,
  Globe,
  BadgeCheck
} from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function CustomMagneticRigidGiftBoxPillarPage() {
  const styles = [
    { name: 'Book-Style Magnetic Boxes', desc: 'Premium flip-top opening with reinforced extra-rigid walls for absolute prestige.', image: '/images/custom-magnetic-rigid-gift-box-blue.webp' },
    { name: 'Collapsible Folding Boxes', desc: 'Space-saving flat-pack design that reduces shipping volume and warehouse costs by 75%.', image: '/images/collapsible-magnetic-box-structure.webp' },
    { name: 'Neck-Collar Magnetic Boxes', desc: 'Bespoke two-piece architecture featuring a hidden magnetic neck for a layered reveal.', image: '/images/men-grooming-kit-rigid-shoulder-box.webp' },
    { name: 'Integrated Ribbon Boxes', desc: 'Combined high-strength magnetic closure with hand-tied satin ribbons for a secure decorative seal.', image: '/images/pastel-magnetic-ribbon-closure-gift-boxes.webp' }
  ];

  const specs = [
    { name: 'Structural Core', val: '1200g - 1800g (Grade AA) Recycled High-Density Industrial Rigid Grayboard' },
    { name: 'Magnetic Force', val: 'Dual hidden N52 Neodymium magnets (1500-1800 Gauss) for secure high-fidelity closure' },
    { name: 'Corner Engineering', val: 'Precision V-Groove automated channels for sharp 90-degree edges and structural stability' },
    { name: 'Standard MOQ', val: '1,000 Pcs (Direct Factory Wholesale Price Tiers)' },
    { name: 'Eco Certification', val: 'FSC Certified fiber cores, Soy-based inks, 100% Recyclable cardboard' },
    { name: 'Lead Time', val: '10-12 Days for bulk mass production' }
  ];

  const finishes = [
    { title: 'Gold & Silver Foil Stamping', desc: 'Swiss-engineered metallic foil stamping with extreme registration accuracy for mirror-sharp brand logos.' },
    { title: 'Raised Spot UV Varnish', desc: 'Adds a glossy, three-dimensional tactile depth and high-contrast reflectivity to specific printed patterns.' },
    { title: 'Deep Blind Debossing', desc: 'Architectural texture created by pressing 3D channels into the board for a sophisticated signature mark.' },
    { title: 'Soft-Touch Matte Film', desc: 'Anti-fingerprint velvet-like protective lamination that preserves unboxing prestige and tactile warmth.' }
  ];

  const industries = [
    { title: 'Perfume & Fragrance', desc: 'Provide an architectural, theatrical reveal for fragile glass bottles and cologne sets.' },
    { title: 'Luxury Jewelry & Watches', desc: 'Secure high-value timepieces and fine jewelry with weighted, felt-lined rigid protection.' },
    { title: 'Premium Skincare Kits', desc: 'Establish scientific authority and clinical elegance for high-end active serum collections.' }
  ];

  const benefits = [
    { title: 'Direct Factory Pricing', desc: 'We are the source manufacturer. By eliminating middleman markups, we deliver higher structural quality at competitive bulk wholesale rates.' },
    { title: 'Free Physical Sample', desc: 'Confirm material and build quality hands-on. A pre-production sample is provided for your approval before bulk mass production.' },
    { title: 'Low MOQ Tiers', desc: 'Supporting both emerging startups and global enterprises with MOQ starting from just 100 pcs for specific stock-customized items.' },
    { title: 'Global DDP Fulfillment', desc: 'We ship to 50+ countries. Our logistics team handles all customs, duties, and taxes for a seamless door-to-door delivery experience.' },
    { title: '24h Structural Design', desc: 'Receive professional 2D technical die-lines and digital 3D renderings within 24 hours of submitting your brand assets.' },
    { title: 'Strict ISO Quality QC', desc: 'Every batch undergoes a 3-stage inspection process to ensure a zero-defect luxury unboxing experience for every customer.' }
  ];

  const faqs = [
    {
      q: "What makes a custom magnetic rigid box better than a standard box?",
      a: "Magnetic rigid boxes combine the structural stability of heavy-duty cardboard with the premium psychological effect of a magnetic closure. The satisfying 'click' and weighted feel increase perceived product value and brand authority."
    },
    {
      q: "Can these boxes be reused by consumers?",
      a: "Yes. Due to their extreme durability and high-strength magnetic lock, customers frequently retain these boxes for storage, keeping your brand visible on their vanities for years."
    },
    {
      q: "Do you offer custom inserts for these boxes?",
      a: "Absolutely. We specialize in precision laser-cut high-density EVA foam, velvet-covered paperboard cradles, and eco-friendly molded pulp inserts tailored to your specific product dimensions."
    },
    {
      q: "What is the shipping cost difference for collapsible vs rigid boxes?",
      a: "Collapsible magnetic boxes reduce ocean shipping volume by up to 75%, significantly lowering international freight costs and domestic warehouse storage fees."
    }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative', color: '#fff' }}>
      <Header />

      {/* Hero Section */}
      <section className="product-detail-hero" style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)' }}>
        <div className="container">
          <div className="detail-grid" style={{ alignItems: 'center' }}>
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Wholesale Pillar Page</span>
              <Image 
                src="/images/custom-magnetic-rigid-gift-box-blue.webp" 
                alt="Custom Magnetic Rigid Gift Box Manufacturer in China" 
                width={800} 
                height={800} 
                priority 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)' }} 
              />
            </div>

            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.3em', marginBottom: '16px', fontWeight: 600 }}>
                <CheckCircle2 size={14} style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }} />
                Direct-from-Factory China Manufacturer
              </div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', lineHeight: '1.1', fontWeight: 700 }}>
                Custom Magnetic Rigid Gift Boxes Manufacturer
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6', marginBottom: '32px' }}>
                Transform your unboxing ritual into a powerful brand statement. LuxePack Pro specializes in engineering high-density magnetic closure gift boxes with precision V-grooving, hidden N52 Neodymium magnets, and bespoke foil embellishments. Factory-direct wholesale pricing, MOQ from 100 pcs, free digital 3D mockup before production.
              </p>
              
              <div style={{ display: 'flex', gap: '30px', margin: '40px 0' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>100</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>MOQ PCS</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>3-5</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>DAYS SAMPLE</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>12-15</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>DAYS BULK</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>50+</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>COUNTRIES SHIPPED</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link href="https://wa.me/yournumber" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  GET FREE QUOTE ON WHATSAPP
                </Link>
                <Link href="/#products" className="btn" style={{ border: '1px solid #d4af37', color: '#d4af37', padding: '16px 40px' }}>
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are custom magnetic rigid gift boxes */}
      <section className="section" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>What are Custom Magnetic Rigid Gift Boxes?</h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center' }}>
            A custom magnetic rigid box is the ultimate combination of structural engineering and sensory marketing. Built from heavy-weight industrial **Grade AA greyboard (1200g-1800g)** and wrapped in premium specialty papers, these boxes feature hidden dual Neodymium magnets that ensure a secure and satisfying "snap" closure. Unlike flimsy standard boxes, magnetic rigid boxes provide absolute protection for high-value merchandise while delivering a majestic unboxing sequence that reinforces brand authority.
          </p>
        </div>
      </section>

      {/* Gift Box Styles */}
      <section className="section" style={{ backgroundColor: '#080808' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Magnetic Rigid Gift Box Styles</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '700px', margin: '0 auto' }}>Bespoke structural architectures tailored for luxury cosmetics, jewelry, perfumes, and premium gift sets.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {styles.map((style, idx) => (
              <div key={idx} style={{ backgroundColor: '#0d0d0d', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-10px)'} onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}>
                <Image src={style.image} alt={style.name} width={400} height={300} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div style={{ padding: '25px' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#d4af37' }}>{style.name}</h3>
                  <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>{style.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Technical Specifications</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: '#0d0d0d', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.1)' }}>
            <table className="specs-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {specs.map((s, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '20px 30px', fontWeight: 600, color: '#d4af37', width: '35%' }}>{s.name}</td>
                    <td style={{ padding: '20px 30px', color: '#ccc' }}>{s.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Finishing Options */}
      <section className="section" style={{ backgroundColor: '#070707' }}>
        <div className="container">
          <div className="detail-grid" style={{ gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Premium Finishing & Branding</h2>
              <div style={{ display: 'grid', gap: '30px' }}>
                {finishes.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#d4af37', flexShrink: 0 }}><Paintbrush size={24} /></div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>{f.title}</h4>
                      <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <Image 
                src="/images/premium-finishing-options-foil-uv.webp" 
                alt="Luxury Rigid Box Finishing Details" 
                width={600} 
                height={500} 
                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }} 
              />
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', backgroundColor: '#d4af37', color: '#000', padding: '20px', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                Mirror-Sharp Foil Registration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="detail-grid" style={{ gap: '80px', alignItems: 'center', direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>High-Impact Industry Applications</h2>
              <div style={{ display: 'grid', gap: '30px' }}>
                {industries.map((ind, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: '#d4af37', flexShrink: 0 }}><Globe size={24} /></div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>{ind.title}</h4>
                      <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>{ind.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ direction: 'ltr' }}>
              <Image 
                src="/images/custom-magnetic-rigid-boxes-collection.webp" 
                alt="Custom Magnetic Rigid Box Industry Application" 
                width={600} 
                height={500} 
                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why LuxePack Pro */}
      <section className="section" style={{ backgroundColor: '#080808' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 600, display: 'block', marginBottom: '10px' }}>WHY LUXUPACKAGE</span>
            <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Why Source Custom Magnetic Boxes from Us?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h4 style={{ color: '#d4af37', fontSize: '1.2rem', fontWeight: 600 }}>{b.title}</h4>
                <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <HelpCircle size={40} style={{ color: '#d4af37', marginBottom: '16px' }} />
            <h2 style={{ fontSize: '2.5rem' }}>Magnetic Rigid Box Sourcing FAQ</h2>
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
            <BadgeCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Zero-Defect QA Guarantee</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Truck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>DDP Shipping to US, UK, AU, EU</span>
          </div>
        </div>
      </section>

      <div style={{ padding: '60px 0', textAlign: 'center', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Ready to Scale Your Brand Authority?</h2>
          <Link href="/#rfq" className="btn btn-primary" style={{ padding: '18px 50px', fontSize: '1.1rem' }}>
            Request Your Custom Design Quotation
          </Link>
        </div>
      </div>

      <FloatingContact />
    </main>
  );
}
