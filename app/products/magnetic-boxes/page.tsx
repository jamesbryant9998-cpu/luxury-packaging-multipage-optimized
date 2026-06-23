'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function MagneticBoxes() {
  const specs = [
    { name: 'Box Architecture', val: 'Rigid Book-Style Folding Box with hidden strong Magnetic Flap' },
    { name: 'Standard MOQ', val: '1,000 Pcs' },
    { name: 'Magnet Specification', val: 'Concealed high-strength Ndfeb Neodymium Iron Boron magnets (1200 - 1500 Gauss)' },
    { name: 'Grayboard Thick', val: '1200g - 1800g (Grade A) Industrial Rigid Grayboard' },
    { name: 'External Wrapping', val: 'Specialty Pearl Card / Premium Black Card / Suede / Soft Touch Matte Paper' },
    { name: 'Custom Finishes', val: '3D Embossed Logo, Hot Metallic Foil Stamping, Gloss UV coating' },
    { name: 'Environmental Status', val: 'FSC, ISO14001, RoHS compliant protective glue' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      {/* 顶部 Header */}
      <Header />

      {/* 详情主区域 */}
      <section className="product-detail-hero">
        <div className="container">
          <div className="detail-grid">
            {/* 左：大图占位/Gallery */}
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Magnetic Elite</span>
              <Image src="/images/premium-magnetic-gift-boxes-luxury-packaging.webp" alt="Custom Magnetic Closure Gift Boxes Premium Packaging Supplier" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* 右：产品技术Specs描述 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Premium Flap Concealed Magnets
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Bespoke Magnetic Gift Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
                Our signature folding magnetic boxes are designed with hidden strong Neodymium magnetic snaps that seal with a robust, satisfying click. Fully collapsible flat-pack structures to save 75% on ocean shipping freight volumes.
              </p>

              <table className="specs-table">
                <tbody>
                  {specs.map((s, idx) => (
                    <tr key={idx}>
                      <td>{s.name}</td>
                      <td>{s.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="btn-group" style={{ justifyContent: 'start' }}>
                <Link href="/#rfq" className="btn btn-primary" style={{ flexGrow: 1 }}>
                  Inquire flat-pack folding samples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部资质特征 */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Concealed Twin Magnetic Snaps</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Collapsible Flat-Pack Mechanics</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Satisfying Magnetic Closure Click</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
