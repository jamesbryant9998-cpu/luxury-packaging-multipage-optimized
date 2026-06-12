'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function ForestGreenCustomMagneticBox() {
  const specs = [
    { name: 'Box Architecture', val: 'Rigid Book-Style Forest Green Folding Box with concealed magnetic flap closure' },
    { name: 'Standard MOQ', val: '1,000 Pcs (Direct-to-Brand Factory Sourcing)' },
    { name: 'Color Exterior', val: 'Premium matte deep forest green specialty wrapper (luxurious natural earth-tone paper)' },
    { name: 'Custom Lining', val: 'Semi-translucent white customized wrapping tissue paper with a printed repeat pattern' },
    { name: 'Adhesive Seal', val: 'High-end gold-stamped forest green brand seal sticker for tissue paper fastening' },
    { name: 'Core Grayboard', val: '1200g - 1600g (Grade AA) Eco-friendly Recycled Rigid Cardboard Core' },
    { name: 'Logo Customization', val: 'Gloss gold hot-stamped brand logo on the inner cover (completely customizable)' },
    { name: 'Magnetic Core', val: 'Dual concealed N52 grade Neodymium magnets for a robust, premium click feedback' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      {/* 顶部 Header */}
      <Header />

      {/* 详情主区域 */}
      <section className="product-detail-hero" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="container">
          {/* Back button */}
          <Link href="/#products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a0a0a0', textDecoration: 'none', marginBottom: '32px', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}>
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="detail-grid">
            {/* 左：产品大图 */}
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Fully Customizable</span>
              <Image 
                src="/images/custom-magnetic-box-forest-green.webp" 
                alt="Forest Green Custom Magnetic Box - Premium packaging solution" 
                width={600} 
                height={450} 
                className="detail-gallery-image" 
                priority 
                style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.15)' }} 
              />
            </div>

            {/* 右：产品技术Specs描述 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Natural Earth-Tone Luxury
              </div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Forest Green Custom Magnetic Box
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                Bring an organic, elite aesthetic to your brand with this customized forest green magnetic folding box. Designed to leave a lasting tactile and visual impression, it features an ultra-premium matte green outer paper coupled with your gold foil brand logo stamped on the inner lid. Complete with high-grade semi-translucent custom wrapping tissue and a gold-fastened brand sticker seal.
              </p>

              <table className="specs-table">
                <tbody>
                  {specs.map((s, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600, color: '#d4af37' }}>{s.name}</td>
                      <td style={{ color: '#fff' }}>{s.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="btn-group" style={{ justifyContent: 'start', marginTop: '24px' }}>
                <Link href="/#rfq" className="btn btn-primary" style={{ flexGrow: 1, textAlign: 'center' }}>
                  Get Forest Green Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心优势/技术亮点 */}
      <section className="section" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)', borderBottom: '1px solid rgba(212, 175, 55, 0.1)', backgroundColor: '#080808' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '16px' }}>Sophisticated Earthy Brand Representation</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto' }}>Sustainable, eco-luxurious paper craftsmanship engineered to perform.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Forest Green Specialty Paper</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>We wrap each box in hand-selected matte forest green paper, offering a rich, velvet-like earthy texture. The surface is oil-resistant and fingerprint-resistant to preserve pristine unboxing luxury.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Bespoke Interior Wrap & Seal</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>The interior contains a pre-fitted custom semi-translucent tissue liner showing your brand repeat-pattern, complete with a gilded round seal sticker to deliver an unboxing moment filled with premium detail.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Dual Neodymium Snap</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Two concealed ultra-strong N52 Neodymium magnets are embedded into the front flap to ensure perfect closure alignment and a robust, secure acoustic "click" whenever the lid is closed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部资质特征 */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC Certified Recycled Bamboo Grayboard</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Soy-Based Eco-Friendly Printing Adhesives</span>
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
