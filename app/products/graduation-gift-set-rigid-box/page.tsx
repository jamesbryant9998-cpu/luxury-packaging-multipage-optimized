'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function GraduationGiftSetRigidBox() {
  const specs = [
    { name: 'Box Architecture', val: 'Over-sized Rigid Magnetic Book-Style Box with reinforced extra-rigid walls' },
    { name: 'Standard MOQ', val: '500 Sets (Direct-Factory Custom Commemorative Orders)' },
    { name: 'Core Greyboard', val: '1800g - 2000g (Grade AAA) Heavy-Duty Industrial Rigid Grayboard' },
    { name: 'Exterior Wrap', val: 'Anti-fingerprint matte black specialty paper with premium linen texture' },
    { name: 'Logo Branding', val: 'Deep gold metallic hot-foil stamped university crest and decorative borders' },
    { name: 'Interior Insert', val: 'Custom laser-cut high-density EVA foam covered in matching black velvet' },
    { name: 'Matching Carrier', val: 'Reinforced 300g cream cardboard gift bag with dark navy ribbon handles' },
    { name: 'Contents Targeted', val: 'Custom hoodies, ceramic mugs, insulated tumblers, notebooks, and premium pens' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      <Header />

      <section className="product-detail-hero" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="container">
          <Link href="/#products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a0a0a0', textDecoration: 'none', marginBottom: '32px', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}>
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="detail-grid">
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Elite Alumni Collection</span>
              <Image 
                src="/images/westhaven-university-graduation-gift-set-box.webp" 
                alt="Westhaver University Luxury Graduation Gift Set Box - Commemorative packaging" 
                width={600} 
                height={450} 
                className="detail-gallery-image" 
                priority 
                style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.15)' }} 
              />
            </div>

            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Premium Commemorative Sourcing
              </div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Westhaven University Luxury Graduation Gift Set Box
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                Celebrate life-long achievements with our bespoke Westhaver University luxury graduation gift set box. Engineered as an industrial-strength rigid magnetic box, this commemorative kit is designed to house a curated collection of university memorabilia. Every set includes precision laser-cut inserts to securely cradle heavy ceramic mugs, insulated tumblers, and high-end stationery, all beautifully presented in a gold foil-stamped masterpiece and paired with a matching heavy-weight carrier bag.
              </p>

              <table className="specs-table">
                <tbody>
                  {specs.map((s, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600, color: '#d4af37', width: '30%' }}>{s.name}</td>
                      <td style={{ color: '#fff' }}>{s.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="btn-group" style={{ justifyContent: 'start', marginTop: '24px' }}>
                <Link href="/#rfq" className="btn btn-primary" style={{ flexGrow: 1, textAlign: 'center' }}>
                  Get University Sourcing Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)', borderBottom: '1px solid rgba(212, 175, 55, 0.1)', backgroundColor: '#080808' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '16px' }}>Heavy-Duty Commemorative Engineering</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto' }}>Designed for heritage durability and absolute unboxing prestige.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>V-Groove Sharp Edge Tech</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>We utilize automated V-grooving machinery to slice deep channels into the 2000g grayboard core. This ensures that the commemorative box maintains perfectly rectangular 90-degree corners, reflecting the prestige of your academic institution.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Laser-Cut EVA Retention</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Fragile items like ceramic mugs and heavy insulated tumblers are protected by high-density EVA foam inserts. Each cavity is custom-molded to the exact millimeter of the product dimensions, preventing all movement during international transit.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Heritage Branding Accents</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>We apply advanced Swiss hot-foil gold stamping for the university crest. The stamping is deep and glossy, contrasting against the matte black linen texture to create a packaging legacy that alumni will treasure for years.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC Certified Recycled Industrial Board</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Water-Based Eco Soy Printing Inks</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>ISO9001 Factory Quality Certified</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
