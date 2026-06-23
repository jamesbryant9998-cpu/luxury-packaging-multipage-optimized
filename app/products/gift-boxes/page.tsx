'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function GiftBoxes() {
  const specs = [
    { name: 'Box Configurations', val: 'Collapsible Folding Box, Book-Style Box, Lift-off Lid, Shoulder Neck Box' },
    { name: 'Standard MOQ', val: '1,000 Pcs' },
    { name: 'Grayboard Grade', val: '1000g - 1600g Premium Double-Greyboard (Grade A)' },
    { name: 'Wrapping Materials', val: 'Custom Kraft, Coated C2S, Matte Art Card, Suede Velvet, Metallic Foil Paper' },
    { name: 'Inks', val: 'Non-toxic, bio-degradable eco soy inks' },
    { name: 'Environmental Audit', val: 'FSC 100% Chain-of-Custody Certification' },
    { name: 'Sample Delivery', val: 'Express shipping within 5 days worldwide' }
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
              <span className="detail-gallery-badge">Luxury Gift Series</span>
              <Image src="/images/eco-kraft-courier-packaging-boxes.webp" alt="Premium Magnetic Gift Boxes Luxury Rigid Packaging" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* 右：产品技术Specs描述 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Premium Brand Gifting Packaging
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Bespoke Luxury Gift Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
                Specializing in robust, collapsible and rigid structural designs that minimize global logistic shipping volumes while retaining outstanding unboxing experiences. Fully FSC-certified with premium handcraft finishes.
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
                  Inquire and Get Price Sheet
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
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Collapsible Space-Saving Design</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Grade-A Raw FSC Cardboard</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Custom Logo Hot Stamping</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
