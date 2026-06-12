'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare, BadgeCheck } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function EspeciallyForYouMagneticGiftBox() {
  const specs = [
    { name: 'Box Architecture', val: 'Classic Book-Style Folding Rigid Gift Box with gold gilding framing' },
    { name: 'Standard MOQ', val: '1,000 Pcs (Direct-from-Factory Wholesale Pricing)' },
    { name: 'Edge Gilded Border', val: 'Metallic gold foil-stamped framing lines on the outer top cover and side walls' },
    { name: 'Inside Lid Stamp', val: 'Gilded hot-stamped gift icon with "ESPECIALLY FOR YOU" typography' },
    { name: 'Core Grayboard', val: '1400g - 1800g (Grade AA) Recycled Industrial Extra-Rigid Grayboard' },
    { name: 'Exterior Finishing', val: 'Anti-fingerprint ultra-matte black specialty face paper wrapper' },
    { name: 'Liner Packaging', val: 'Luxury black textured silk wrapping tissue paper insert' },
    { name: 'Adhesive Seal', val: 'Gold foil hot-stamped circular "Especially For You" sticker seal' }
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
              <span className="detail-gallery-badge">Elegant Sensation</span>
              <Image 
                src="/images/magnetic-gift-box-especially-for-you.webp" 
                alt="Bespoke Especially For You Magnetic Gift Box - Gilded matte black gift box" 
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
                Prestige Gilded Gifting Sensation
              </div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Bespoke Especially For You Magnetic Gift Box
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                Create a memorable gifting sensation with this bespoke gilded rigid matte black magnetic closure box. Highlighted by elegant gold foil framing along the edges and a gold-stamped "ESPECIALLY FOR YOU" brand mark on the inner lid, this box elevates any premium gift. Complete with pre-assembled silk-like black wrapping tissue and a gold hot-stamped sticker seal.
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
                  Get Wholesale Custom Quote
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
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '16px' }}>Elegant Presentation & Craftsmanship</h2>
            <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto' }}>Combining premium aesthetics with flawless structural engineering.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Gold-Gilded Edge Framing</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Each box is finished with precision hot-foil gold gilding along the outer borders, creating a striking contrast against the matte black finish and highlighting the box's sophisticated geometric structure.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Bespoke Interior Presentation</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>The interior contains a pre-assembled luxury black tissue paper wrap with a gold foil sticker seal, keeping your products securely cushioned and establishing an elite presentation right from the opening snap.</p>
            </div>

            <div style={{ backgroundColor: '#0d0d0d', padding: '30px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
              <div style={{ color: '#d4af37', marginBottom: '16px' }}>
                <BadgeCheck size={32} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Neodymium Secure Snap</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>Engineered with premium dual Neodymium magnets embedded inside the front rigid cardboard flap. The cover aligns seamlessly and closes with a crisp, secure, acoustically pleasing snap that represents true luxury.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部资质特征 */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC Recyclable High-Density Board</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Anti-Fingerprint Matte Coating Finish</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>ISO9001 Quality Standard Adherence</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
