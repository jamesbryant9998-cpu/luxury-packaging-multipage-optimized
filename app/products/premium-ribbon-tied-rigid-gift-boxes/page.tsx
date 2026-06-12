'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function PremiumRibbonTiedRigidGiftBoxes() {
  const specs = [
    { name: 'Box Architecture', val: 'Rigid two-piece lid-and-base or shoulder-neck gift box decorated with hand-tied satin bow ribbons' },
    { name: 'Standard MOQ', val: '1,000 Pcs (Direct Factory Wholesale Price Tiers)' },
    { name: 'Core Grayboard', val: '1200g - 1600g (Grade AA) Recycled High-Density Industrial Cardboard Core' },
    { name: 'Exterior Finishing', val: 'Matte black, cream-white, or navy blue premium face paper wrap (anti-fingerprint finish)' },
    { name: 'Ribbon Type', val: 'Premium 25mm double-faced silk satin or grosgrain ribbons tied into a beautiful, secure bow' },
    { name: 'Custom Accessories', val: 'Matching customized brand card-stock gift tags and hot-stamped gold accents' },
    { name: 'Eco Certification', val: '100% Recyclable cardboard, FSC-certified fibers, non-toxic soy inks, ISO14001 plant' },
    { name: 'Factory Capacity', val: 'Over 20,000 premium ribbon-tied boxes hand-finished and inspected daily' }
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
              <span className="detail-gallery-badge">Elegant Ribbon Bow</span>
              <Image 
                src="/images/premium-ribbon-tied-rigid-gift-boxes.webp" 
                alt="Premium Ribbon-Tied Rigid Gift Boxes Wholesale - Sourcing guide" 
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
                Prestige Ribbon Packaging
              </div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Premium Ribbon-Tied Rigid Gift Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                Create a majestic, high-end gifting ritual with our custom premium ribbon-tied rigid gift boxes. Constructed from industrial-grade, thick grayboard, these boxes are wrapped in anti-fingerprint matte papers (in classic black, off-white, or navy blue). Every box is pre-fitted and hand-decorated with wide 25mm double-faced satin ribbon bows, complete with custom hot-stamped branding gift tags, ensuring an unforgettable unboxing experience for your retail customers.
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
                  Get Ribbon Box Quote
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
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '16px' }}>Artisanal Ribbon Craftsmanship & Heavy Board Stability</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto' }}>Combining premium aesthetics with flawless structural engineering.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Double-Face Satin Ribbon</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>We hand-select premium double-face satin ribbons (25mm width) with high fiber density. Every ribbon is glued and anchored securely to ensure a symmetrical, majestic hand-tied bow that preserves unboxing prestige.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Sharp 90-Degree Corners</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>LuxePack Pro utilizes automatic V-grooving machinery to slice greyboard channels, ensuring that when the boxes are folded, all corners form crisp, sharp, flawless 90-degree edges, preventing rounded puffy structures.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Custom Hanging Brand Tags</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Each box is finished with custom card-stock tags, printed with hot-foil gold brand details and custom messages. Tags are looped smoothly onto the ribbon to offer buyers a personalized touch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部资质特征 */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC Certified Recycled Cardboard</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Water-Based Matte Protective Coating</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>SGS Audited Eco Soy Inks</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
