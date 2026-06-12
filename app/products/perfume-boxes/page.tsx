'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function PerfumeBoxes() {
  const specs = [
    { name: 'Application', val: 'Luxury Fragrance, Eau De Toilette, Cologne Packaging' },
    { name: 'Standard MOQ', val: '2,000 Pcs' },
    { name: 'Box Configuration', val: 'Double-Gate Open Box, Cylindrical Cylinder, Shoulder Box, Book-Style Box' },
    { name: 'Protective Bed', val: 'High-Density Velveteen Foam Tray / Custom Satin Bed / Moulded Eco pulp insert' },
    { name: 'Decoration Options', val: 'Gold Hot Foil, Scented varnish, Micro-embossed art paper' },
    { name: 'Certification Compliance', val: 'FSC, ISO9001:2015, BSCI Social Compliance' },
    { name: 'Structural Design Time', val: '12 Hours (Fast turn-around)' }
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
              <span className="detail-gallery-badge">Fragrance Custom</span>
              <Image src="/images/custom-perfume-rigid-packaging-boxes.webp" alt="Custom Perfume Rigid Boxes Luxury Fragrance Packaging" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* 右：产品技术Specs描述 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Premium Glass Protection & Unboxing Art
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Bespoke Perfume Packaging Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
                Our perfume boxes combine heavy-gauge shock-absorbent structural foam inserts with luxurious, textured outer papers. Specially engineered to protect heavy glass bottle designs during transit while providing a jaw-dropping unboxing experience.
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
                  Get Custom Insert CAD Template
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
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Heavy Fragrance Glass Protection</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Odourless Protective Raw Glues</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Scented Varnish / Fine Foil Finish</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
