'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function MenGroomingKitRigidShoulderBox() {
  const specs = [
    { name: 'Box Architecture', val: 'Minimalist Rigid Shoulder-Neck Box with decorative button-stud closure' },
    { name: 'Standard MOQ', val: '1,000 Pcs (Direct Factory Wholesale Price Tiers)' },
    { name: 'Core Greyboard', val: '1400g - 1600g (Grade AA) High-Density Recycled Cardboard' },
    { name: 'Shoulder Lining', val: 'Integrated rigid interior shoulder collar in contrasting matte grey/black' },
    { name: 'Exterior Finish', val: 'Anti-fingerprint matte charcoal black specialty paper wrap' },
    { name: 'Interior Insert', val: 'Custom die-cut high-density grey EVA foam with precision tool cavities' },
    { name: 'Custom Branding', val: 'Deep debossed brand typography on the outer lid and high-contrast interior print' },
    { name: 'Contents Targeted', val: 'Mens safety razors, shaving foam canisters, aftershave balms, and grooming tools' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      <Header />

      {/* 详情主区域 */}
      <section className="product-detail-hero" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="container">
          <Link href="/#products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a0a0a0', textDecoration: 'none', marginBottom: '32px', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}>
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="detail-grid">
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Minimalist Excellence</span>
              <Image 
                src="/images/harrys-uncrate-men-grooming-kit-box.webp" 
                alt="Harrys + Uncrate Men Grooming Kit Rigid Shoulder Box - Limited edition packaging" 
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
                Elite Men's Grooming Sourcing
              </div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Harrys + Uncrate Men Grooming Kit Rigid Shoulder Box
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                Deliver a bold, modern grooming statement with our custom minimalist rigid shoulder box. Designed for limited-edition collaborations, this box features an architectural shoulder-neck design where the lid sits flush against a secondary interior collar. Outfitted with a unique button-stud closure and precision-molded EVA foam inserts, it provides a rugged yet refined unboxing experience for safety razors, canisters, and grooming essentials.
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
                  Get Grooming Kit Box Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)', borderBottom: '1px solid rgba(212, 175, 55, 0.1)', backgroundColor: '#080808' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '16px' }}>Architectural Shoulder Construction & Protection</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto' }}>Combining modern industrial aesthetics with heavy-duty structural integrity.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Integrated Shoulder Neck</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>We engineer a secondary interior cardboard collar (the "shoulder") that extends above the base. This provides incredible vertical stack strength and creates a high-contrast visual reveal as the buyer lifts the lid.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Precision EVA Cavities</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Every kit is equipped with a high-density, multi-layered EVA foam insert. Our laser-die-cutting technology ensures that razors, canisters, and accessory boxes are held in a secure, zero-friction cradle for safe global transit.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Button-Stud Mechanical Lock</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Instead of magnets, this kit utilizes a unique physical button-stud and loop closure mechanism. This industrial-style detail reinforces the grooming kit’s rugged masculine aesthetic and ensures the lid remains locked.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC Certified Premium Cardboard Core</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Anti-Fingerprint Matte protective Wrap</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>ISO14001 Environmentally Compliant Plant</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
