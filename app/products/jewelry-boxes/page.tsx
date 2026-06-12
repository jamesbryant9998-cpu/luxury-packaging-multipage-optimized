'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function JewelryBoxes() {
  const specs = [
    { name: 'Box Style', val: 'Shoulder Box, Lift-off Lid, Sliding Drawer, Hinged Velvet Box' },
    { name: 'Standard MOQ', val: '1,000 Pcs' },
    { name: 'Materials', val: 'Heavy Rigid Board, Premium Flocked Velvet, Eco Specialty Paper' },
    { name: 'Insert Trays', val: 'Velvet-wrapped sponge slot, Silk pull-tabs, Premium Microfiber Insert, Suede Pillows' },
    { name: 'Quality Check', val: 'Two-stage manual full inspection (Double QC)' },
    { name: 'Sustainability', val: 'ISO14001, FSC Certified Materials, REACH compliance for lining foam' },
    { name: 'Production Time', val: '12 - 15 Working Days' }
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
              <span className="detail-gallery-badge">Jewelry Premium</span>
              <Image src="/images/bespoke-jewelry-drawer-packaging-boxes.webp" alt="Luxury Jewelry Packaging Boxes Custom Ring Necklace Gift Boxes" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* 右：产品技术Specs描述 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Premium Craftsmanship & Microfiber Inserts
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Bespoke Jewelry Packaging Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
                Elegant, heavy-duty boxes engineered with plush velvet linings and microfiber slot trays to protect and highlight precious metals and gems. Fully compliant with international sustainability standards.
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
                  Get Custom Insert Design Templates
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
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Anti-tarnish, Velvet Protection</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>FSC Certified Heavy Rigid Bases</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>High-Density Laser-Cut Inserts</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
