'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function RigidBoxes() {
  const specs = [
    { name: 'Box Structure', val: 'Classic Lift-off Lid, Telescoping Rigid Box, Base with Lid Box' },
    { name: 'Standard MOQ', val: '1,000 Pcs' },
    { name: 'Raw Board Specification', val: '1400g - 1800g Rigid Industrial Double-Greyboard (Grade A)' },
    { name: 'Wrapping Materials', val: 'Embossed Crocodile Skin Paper, Fine Leatherette Suede, Textured Linen, Gold-Foil Paper' },
    { name: 'Edge Tolerance', val: 'Ultra-precise V-Groove milling with absolute 90-degree corner sharpness' },
    { name: 'Standards Compliance', val: 'FSC Certified Forest Materials, ISO9001 quality audit' },
    { name: 'Lead Time', val: '12 - 14 Working Days' }
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
              <span className="detail-gallery-badge">Classic Rigid</span>
              <Image src="/images/boutique-apparel-gift-packaging-boxes.webp" alt="Premium Rigid Gift Boxes Custom Luxury Packaging" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* 右：产品技术Specs描述 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Sharp V-Groove Milling Craft
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Bespoke Rigid Setup Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
                Our signature heavy setup boxes utilize high-precision V-Groove milling machines to achieve absolutely sharp 90-degree corner edges. Wrapped in hand-selected premium linens and luxury textured art cards, creating robust structure and premium weight.
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
                  Get Instant FOB Prices & Specs
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
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Sharp 90-Degree V-Groove Milling</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Grade-A Double-Greyboard Base</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Handcraft Meticulous Wrapping</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
