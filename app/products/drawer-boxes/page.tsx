'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function DrawerBoxes() {
  const specs = [
    { name: 'Box Structure', val: 'Slide-Out Drawer Style with Custom Pull Options (Ribbon, Cord, Metal Eyelet)' },
    { name: 'Standard MOQ', val: '1,000 Pcs' },
    { name: 'Paper Board', val: '1200g Eco-Friendly Rigid Grayboard wrapped with custom Art Specialty Paper' },
    { name: 'Logo Craft', val: 'Blind Embossing, Hot Foil Stamping (Gold/Silver/Rose-Gold), Spot UV' },
    { name: 'Sleeve Tolerance', val: 'Within ±0.3mm sliding precision to guarantee tight seal and smooth pull' },
    { name: 'Certifications', val: 'FSC, ISO9001, BSCI Carbon Audited' },
    { name: 'Lead Time', val: '10 - 12 Working Days' }
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
              <span className="detail-gallery-badge">Slide Drawers</span>
              <Image src="/images/luxury-chocolate-packaging-gift-boxes.webp" alt="Custom Drawer Gift Boxes Luxury Sliding Packaging Solutions" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* 右：产品技术Specs描述 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Premium Slider Mechanical Design
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Bespoke Drawer Packaging Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
                High-end slider gift drawers engineered to provide premium sliding friction. Each sleeve and inner drawer is precision-matched with automatic box making machines to guarantee smooth pull feel and rigid structure.
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
                  Get Custom Layout Specs & Quote
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
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Precision Slide Cut Fitting</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Smooth pull, Zero jamming</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Premium Ribbon / Cord Pull Materials</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
