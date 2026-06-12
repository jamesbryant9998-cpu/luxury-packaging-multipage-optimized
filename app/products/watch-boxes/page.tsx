'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function WatchBoxes() {
  const specs = [
    { name: 'Box Configurations', val: 'Classic Hinged Wood Box, Heavy Rigid Gift Lid, Multi-Watch Organizer Drawers' },
    { name: 'Standard MOQ', val: '1,000 Pcs' },
    { name: 'Inner Bed Cushioning', val: 'Custom Suede Pillow inserts, laser-moulded premium microfiber padding' },
    { name: 'Lid Assembly', val: 'Smooth dual-axis brass hinges or hidden magnetic hinges' },
    { name: 'Decoration Options', val: 'Piano wood gloss painting, Debossed Leatherette, Gold-stamp border outlines' },
    { name: 'Sustainability Audit', val: 'REACH compliance, FSC Certified sustainable wood bases and board' },
    { name: 'Production Lead Time', val: '15 Working Days (Heavy Handcraft involved)' }
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
              <span className="detail-gallery-badge">Horology Luxury</span>
              <Image src="/images/luxury-watch-packaging-gift-boxes.webp" alt="Luxury Watch Packaging Boxes Premium Watch Gift Box Manufacturer" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* 右：产品技术Specs描述 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Handcrafted Plush Horology Pillows
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Bespoke Luxury Watch Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
                Our bespoke watch boxes are handcrafted to protect and showcase Swiss-level watch craftsmanship. Engineered with smooth brass mechanical hinges and custom-moulded suede watch pillows, delivering an unmatched premium look.
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
                  Get Custom Watch-Pillow Prototypes
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
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Dual-axis smooth mechanical hinges</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Anti-skid plush suede pillow bed</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC Certified Premium Solid Timber option</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
