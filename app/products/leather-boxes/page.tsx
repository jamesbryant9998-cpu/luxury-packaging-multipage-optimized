'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import FloatingContact from '../../../components/FloatingContact';
import Header from '../../../components/Header';

export default function LeatherBoxes() {
  const specs = [
    { name: 'Box Configurations', val: 'Full-grain Handcrafted Leather Box, Wooden Core, Custom Gold Polished Metal Lock' },
    { name: 'Standard MOQ', val: '500 Pcs' },
    { name: 'Raw Board Specification', val: '9mm - 12mm Grade-A MDF Wooden Core wrapped with Premium PU/Genuine Leather' },
    { name: 'Wrapping Materials', val: 'Premium Saffiano Textured Leather, Full-grain Calfskin PU, Genuine Leather wrapping' },
    { name: 'Cushioning Cradle', val: 'High-Density Silk-covered EVA Cradle, Custom Molded Velvet Ring & Watch Compartments' },
    { name: 'Decoration Options', val: 'Heat Blind Debossing, Precision Gold Leaf Hot Stamping, Custom Laser Engraved Metal Hardware' },
    { name: 'Lead Time', val: '15 - 18 Working Days (Meticulous Hand-Stitching & Quality QC included)' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      <Header />

      <section className="product-detail-hero">
        <div className="container">
          <div className="detail-grid">
            {/* 左：大图 */}
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Artisanal Leather</span>
              <Image src="/images/bespoke-leather-gift-boxes.webp" alt="Bespoke Premium Leather Gift Boxes Manufacturer" width={600} height={450} className="detail-gallery-image" priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* 右：规格 */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Handcrafted Prestige & Wooden Core
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
                Bespoke Premium Leather Gift Boxes
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
                Our handcrafted leather gift presentation boxes are engineered with genuine full-grain leather, pristine contrast hand-stitching, and protective velvet linings. Designed to provide unmatched security and timeless prestige for ultra-luxury goods, rare timepieces, high-end spirits, and bespoke jewelry collections.
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
                <Link href="/products/leather-boxes/premium-mdf-leather-case" className="btn btn-primary" style={{ flexGrow: 1, textAlign: 'center' }}>
                  Explore Premium Leather Case Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部特征 */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Genuine Full-Grain Leather</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Artisan Hand-Stitching Lines</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Polished Solid Brass Lock Hardware</span>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
